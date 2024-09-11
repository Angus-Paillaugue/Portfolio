<script>
	import { scale } from 'svelte/transition';
	import { cn } from '$lib/utils';

	const {
		children,
		class: className,
		name,
		copyCode = true,
		snippet = false,
		lineNumbers = false
	} = $props();
	let codeCopied = $state(false);
	let interval = $state();
	let codeContainer = $state();

	/**
	 * Function to copy text.
	 */
	function copyText() {
		// Change the button icon to a checkmark
		codeCopied = true;
		const textToCopy = codeContainer.querySelector('code').innerText;
		// Write the code to clipboard
		navigator.clipboard.writeText(textToCopy);
		if (interval) {
			clearTimeout(interval);
			interval = null;
		}
		interval = setTimeout(() => {
			// Reset the button icon back to default
			codeCopied = false;
		}, 2000);
	}
</script>

{#snippet copyCodeButton(classes)}
	{#if copyCode !== 'false'}
		<button
			onclick={copyText}
			tabindex="0"
			class={cn('flex items-center justify-center rounded-full p-2 text-neutral-600', classes)}
			name="Copy code"
			aria-label="Copy code"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24">
				{#if codeCopied}
					<g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						><path d="m12 15l2 2l4-4" /><rect
							width="14"
							height="14"
							x="8"
							y="8"
							rx="2"
							ry="2"
						/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></g
					>
				{:else}
					<g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path
							d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
						/></g
					>
				{/if}
			</svg>
		</button>
	{/if}
{/snippet}

{#if snippet == 'true'}
	<div class="snippet" bind:this={codeContainer}>
		{@render children()}
		<div class="flex shrink-0 flex-col items-center justify-center rounded-none bg-neutral-50 px-1">
			{@render copyCodeButton()}
		</div>
	</div>
{:else}
	<div
		class={cn('codeContainer relative my-4', lineNumbers == 'true' && 'line-numbers')}
		bind:this={codeContainer}
	>
		{#if name}
			<div
				class="codeBlockName relative flex h-12 w-full flex-row items-center rounded-t-xl border border-b-0 border-neutral-300/50 px-3"
			>
				<p class="!m-0 flex flex-row items-center gap-2 text-base font-medium">
					<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24"
						><g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path
								d="M14 2v4a2 2 0 0 0 2 2h4"
							/></g
						></svg
					>
					{name}
				</p>
				{@render copyCodeButton('aspect-square ml-auto')}
			</div>
		{/if}
		<div class={className}>
			{@render children()}
			{#if !name}
				{@render copyCodeButton('absolute bottom-1 right-5 top-4 aspect-square')}
			{/if}
		</div>
	</div>
{/if}

<style>
	:global(.codeBlockName + div .shiki) {
		@apply !rounded-t-none;
	}
</style>

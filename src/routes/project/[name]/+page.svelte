<script>
	import './markdownStyles.css';
	import { cn } from '$lib/utils';
	import { A } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import { locale } from '$lib/stores';

	const { data } = $props();
	const { component } = data;

	let mdComponent = $state(component[$locale].default);
	let meta = $state(component[$locale].metadata);
</script>

<svelte:head>
	<title>{meta.name} | Angus Paillaugue</title>
</svelte:head>

<div class="p-4">
	<div
		class={cn(
			'grid lg:gap-10 items-center',
			meta.fullImage && 'max-lg:grid-rows-2 lg:grid-cols-2 '
		)}
	>
		<div class="flex flex-col gap-4 py-8 lg:py-20">
			<h1>{meta.name}</h1>
			<p>{meta.description}</p>
			<div class="flex flex-row flex-wrap gap-2">
				{#each meta.tags as tag}
					<span class={cn('text-xs text-white rounded-full px-2 py-1', meta.bgColor)}>{tag}</span>
				{/each}
			</div>

			<div class="flex flex-row max-lg:justify-between lg:gap-10">
				{#if meta.preview}
					<A href={meta.preview} target="_blank" label="Open demo in new tab"
						>{$_('project.demo')}</A
					>
				{/if}
				{#if meta.github}
					<A href={meta.github} target="_blank" label="Open github in new tab">
						<div class="flex flex-row items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="size-4 transition-colors"
								viewBox="0 0 24 24"
								><mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0"
									><g fill="#fff"
										><ellipse cx="9.5" cy="9" rx="1.5" ry="1" /><ellipse
											cx="14.5"
											cy="9"
											rx="1.5"
											ry="1"
										/></g
									></mask
								><g
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									><path
										stroke-dasharray="32"
										stroke-dashoffset="32"
										d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
										><animate
											fill="freeze"
											attributeName="stroke-dashoffset"
											dur="0.7s"
											values="32;0"
										/></path
									><path
										stroke-dasharray="10"
										stroke-dashoffset="10"
										d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
										><animate
											attributeName="d"
											dur="3s"
											repeatCount="indefinite"
											values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
										/><animate
											fill="freeze"
											attributeName="stroke-dashoffset"
											begin="0.8s"
											dur="0.2s"
											values="10;0"
										/></path
									></g
								><rect
									width="8"
									height="4"
									x="8"
									y="11"
									fill="currentColor"
									mask="url(#lineMdGithubLoop0)"
									><animate
										attributeName="y"
										dur="10s"
										keyTimes="0;0.45;0.46;0.54;0.55;1"
										repeatCount="indefinite"
										values="11;11;7;7;11;11"
									/></rect
								></svg
							>
							{$_('project.github')}
						</div>
					</A>
				{/if}
			</div>
		</div>

		{#if meta.fullImage}
			<div
				class="w-full rounded-xl overflow-hidden h-[220px] md:h-[400px] border border-neutral-300 group/image relative"
			>
				<img
					src={meta.fullImage}
					alt="{meta.name}'s full page preview"
					class="transition-all duration-[5s] w-full lg:group-hover/image:-translate-y-[calc(100%-400px)] group-hover/image:-translate-y-[calc(100%-220px)]"
				/>
			</div>
		{/if}
	</div>

	<hr class="my-10" />

	<div class="mt-10 markdown-contents">
		{@render mdComponent()}
	</div>
</div>

<script>
	import './markdownStyles.css';
	import { cn } from "$lib/utils";

	const { data } = $props();
	const { component, meta } = data;
</script>

<svelte:head>
	<title>{meta.name} | Angus Paillaugue</title>
</svelte:head>

<div class="p-4">
	<div class={cn("grid lg:gap-10 items-center", meta.fullImage && 'max-lg:grid-rows-2 lg:grid-cols-2 ')}>
		<div class="flex flex-col gap-4 py-8 lg:py-20">
			<h1>{meta.name}</h1>
			<p>{meta.description}</p>
			<div class="flex flex-row flex-wrap gap-2">
				{#each meta.tags as tag}
					<span class={cn("text-xs text-white rounded-full px-2 py-1", meta.bgColor)}>{tag}</span>
				{/each}
			</div>
		</div>

		{#if meta.fullImage}
			<div class="w-full rounded-xl overflow-hidden h-[220px] md:h-[400px] border border-neutral-300 group/image relative">
				<img src={meta.fullImage} alt="{meta.name}'s full page preview" class="transition-all duration-[5s] w-full lg:group-hover/image:-translate-y-[calc(100%-400px)] group-hover/image:-translate-y-[calc(100%-220px)]" />
				<a href={meta.link} target="_blank" class="opacity-0 p-2 rounded-full border border-neutral-300/50 bg-neutral-50 hocus:scale-110 hocus:opacity-100 group-hover/image:opacity-100 transition-all absolute top-2 right-2" aria-label="Open the project's website in a new tab">
					<svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17L17 7"/></svg>
				</a>
			</div>
		{/if}
	</div>

	<hr class="my-10" />

	<div class="mt-10 markdown-contents">
		{@render component()}
	</div>
</div>

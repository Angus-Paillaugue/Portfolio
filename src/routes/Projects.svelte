<script>
	import { onMount } from 'svelte';
	import { reveal, cn } from '$lib/utils';
	import { t, locale } from '$lib/i18n';
	import { A } from '$lib/components';

	const { projects } = $props();
	let projectsCarousel = $state();
	let carouselIndex = $state(0);
	let displayedElements = $state(3);

	$effect(handleCarouselIndexChange);

	onMount(() => {
		window.addEventListener('resize', onResize);
		onResize();

		return () => {
			window.removeEventListener('resize', onResize);
		};
	});

	/**
	 * Handles the change of the carousel index.
	 */
	function handleCarouselIndexChange() {
		const leftCard = projectsCarousel.children[carouselIndex];
		if (!leftCard) return;
		projectsCarousel.style.transform = `translateX(-${leftCard.offsetLeft}px)`;
	}

	/**
	 * Handles the resize event.
	 */
	function onResize() {
		displayedElements = screen.width > 768 ? 3 : 1;
	}
</script>

<section id="projects" class="mx-auto max-w-screen-xl p-4">
	<div class="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
		<h1 use:reveal>{$t('home.projects.title')}</h1>
		<p use:reveal={{ delay: 200 }}>
			{$t('home.projects.subtitle')}
		</p>
	</div>

	<!-- Carousel -->
	<div
		class="relative col-[content] mt-20 flex flex-row gap-8 transition-transform duration-300 ease-in-out"
		bind:this={projectsCarousel}
	>
		{#each projects[$locale] as project, index}
			<!-- Projects card -->
			<div
				class={cn(
					'group/card group relative flex aspect-square w-full shrink-0 flex-col overflow-hidden rounded-xl md:w-[30%]',
					project.bgColor,
					project.name === 'Portfolio' && 'cursorInvert'
				)}
			>
				<div
					class="pointer-events-none absolute bottom-[calc(25%+33.333333%+1rem)] left-4 right-4 top-4 z-0 bg-contain bg-center bg-no-repeat lg:bottom-[calc(25%+1rem)]"
					style="background-image: url({project.image});"
				></div>
				<p
					class="absolute right-4 top-4 z-20 rounded-full bg-white/10 px-2 py-1 text-sm text-neutral-200"
				>
					{project.date}
				</p>
				<div class={cn('z-10 mt-auto flex h-1/4 flex-col justify-evenly px-4', project.bgColor)}>
					<h3 class="text-lg font-medium text-white">{project.name}</h3>
					<div class="no-scrollbar flex flex-row flex-nowrap gap-4 overflow-auto">
						{#each project.tags as tag}
							<span class="rounded-full bg-white/10 px-2 py-1 text-xs text-neutral-200">{tag}</span>
						{/each}
					</div>
				</div>
				<!-- Details on hover/focus -->
				<div
					class={cn(
						'z-10 flex h-0 flex-col justify-between overflow-auto px-4 transition-all duration-300 ease-in group-hover/card:grow group-hover/card:pb-4 group-has-[:focus]:grow group-has-[:focus]:pb-4 max-lg:h-1/3 max-lg:pb-4',
						project.bgColor
					)}
				>
					<p class="line-clamp-3 text-base leading-5 text-neutral-50/70">{project.description}</p>
					<div>
						<A
							href="/project/{project.name}"
							class="text-white decoration-white hocus:text-white"
							tabindex={carouselIndex + displayedElements > index &&
							index >= carouselIndex &&
							index < carouselIndex + displayedElements
								? 0
								: -1}
						>
							{$t('home.projects.learnMore')}
						</A>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Carousel controls -->
	<div class="flex-row-items-center mt-4 flex justify-end gap-8">
		<button
			class="group/button rounded-full p-1 transition-colors disabled:text-neutral-400 hocus:bg-neutral-300/50"
			aria-label="Carousel previous"
			onclick={() => {
				carouselIndex = Math.max(carouselIndex - 1, 0);
			}}
			disabled={carouselIndex === 0}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-8 translate-x-2 transition-transform group-hover/button:translate-x-0 group-focus/button:translate-x-0 group-disabled/button:translate-x-0"
				viewBox="0 0 24 24"
				aria-label="Carousel previous icon"
			>
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m12 19l-7-7l7-7m7 7H5"
				/>
			</svg>
		</button>
		<button
			class="group/button rounded-full p-1 transition-colors disabled:text-neutral-400 hocus:bg-neutral-300/50"
			aria-label="Carousel next"
			onclick={() => {
				carouselIndex = Math.min(carouselIndex + 1, projects[$locale].length);
			}}
			disabled={projects[$locale].length - displayedElements <= carouselIndex}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-8 -translate-x-2 transition-transform group-hover/button:translate-x-0 group-focus/button:translate-x-0"
				viewBox="0 0 24 24"
				aria-label="Carousel next icon"
			>
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 12h14m-7-7l7 7l-7 7"
				/>
			</svg>
		</button>
	</div>
</section>

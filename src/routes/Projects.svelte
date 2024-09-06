<script>
	import { onMount } from 'svelte';
	import { reveal } from "$lib/utils";

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
		projectsCarousel.style.transform = `translateX(-${leftCard.offsetLeft}px)`;
	}

	/**
	 * Handles the resize event.
	 */
	function onResize() {
		displayedElements = screen.width > 768 ? 3 : 1;
	}
</script>

<section id="projects" class="max-w-screen-xl mx-auto p-4">
	<div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
		<h1 use:reveal>Projects</h1>
		<p use:reveal={{ delay:200 }}>
			Like most of us - I have lot of ideas and projects that I would like to implement. Many of
			them get lost in my notes or as random thoughts on my computer. But can you believe it? Some
			of them actually happen.
		</p>
	</div>

	<!-- Carousel -->
	<div
		class="flex flex-row col-[content] gap-8 relative transition-transform duration-300 ease-in-out mt-20"
		bind:this={projectsCarousel}
	>
		{#each projects as project, index}
		<!-- Projects card -->
			<div
				class="aspect-square group rounded-xl relative flex flex-col w-full md:w-[30%] shrink-0 group/card overflow-hidden {project.bgColor}"
			>
				<div
					class="absolute pointer-events-none z-0 lg:bottom-[calc(25%+1rem)] bottom-[calc(25%+33.333333%+1rem)] top-4 left-4 right-4 bg-center bg-no-repeat bg-contain"
					style="background-image: url({project.image});"
				></div>
				<p
					class="absolute z-20 top-4 right-4 text-neutral-200 bg-white/10 text-sm px-2 py-1 rounded-full"
				>
					{project.date}
				</p>
				<div class="px-4 mt-auto z-10 h-1/4 justify-evenly flex flex-col {project.bgColor}">
					<h3 class="text-white font-medium text-lg">{project.name}</h3>
					<div class="flex flex-nowrap overflow-auto no-scrollbar gap-4 flex-row">
						{#each project.tags as tag}
							<span class="text-neutral-200 bg-white/10 text-xs px-2 py-1 rounded-full">{tag}</span>
						{/each}
					</div>
				</div>
				<!-- Details on hover/focus -->
				<div
					class="h-0 px-4 z-10 group-hover/card:pb-4 group-has-[:focus]:pb-4 max-lg:pb-4 flex flex-col justify-between group-hover/card:grow group-has-[:focus]:grow duration-300 max-lg:h-1/3 overflow-auto ease-in transition-all {project.bgColor}"
				>
					<p class="text-neutral-50/70 text-base leading-5 line-clamp-3">{project.description}</p>
					<div>
						<a
							href="/project/{project.name}"
							class="text-white flex flex-row gap-2 items-center"
							tabindex={carouselIndex + displayedElements > index &&
							index >= carouselIndex &&
							index < carouselIndex + displayedElements
								? 0
								: -1}
						>
							Learn more
							<svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
								<path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M7 7h10v10M7 17L17 7"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Carousel controls -->
	<div class="flex flex-row-items-center justify-end gap-8 mt-4">
		<button
			class="rounded-full p-1 disabled:text-neutral-400 transition-colors hocus:bg-neutral-300/50 group/button"
			aria-label="Carousel previous"
			onclick={() => {
				carouselIndex = Math.max(carouselIndex - 1, 0);
			}}
			disabled={carouselIndex === 0}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-8 transition-transform translate-x-2 group-disabled/button:translate-x-0 group-hover/button:translate-x-0 group-focus/button:translate-x-0"
				viewBox="0 0 24 24"
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
			class="rounded-full p-1 disabled:text-neutral-400 transition-colors hocus:bg-neutral-300/50 group/button"
			aria-label="Carousel next"
			onclick={() => {
				carouselIndex = Math.min(carouselIndex + 1, projects.length);
			}}
			disabled={projects.length - displayedElements <= carouselIndex}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-8 transition-transform -translate-x-2 group-hover/button:translate-x-0 group-focus/button:translate-x-0"
				viewBox="0 0 24 24"
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

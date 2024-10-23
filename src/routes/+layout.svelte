<script>
	import '../app.css';
	import 'lenis/dist/lenis.css';
	import { spring } from 'svelte/motion';
	import { cn } from '$lib/utils';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { scale } from 'svelte/transition';
	import { tick } from 'svelte';
	import Lenis from 'lenis';
	import { navigating } from '$app/stores';
	import { t } from '$lib/i18n';
	import { sections } from '$lib/stores';
	import { Cursor, InitialPageLoader, Analytics } from '$lib/components/';

	const { children } = $props();
	let isSidebarShown = $state(false);
	let activeSectionLink = $state();
	let goBackButton = $state();
	let observer = $state();
	let sidebarIndicator = spring(
		{ y: 0, width: 0 },
		{
			stiffness: 0.1,
			damping: 0.2
		}
	);

	// Reset sections list on navigation
	beforeNavigate(() => {
		sections.set([]);
	});

	// Handle Lenis and run onMountHandle
	afterNavigate(async () => {
		if (window.lenis) window.lenis.destroy();
		const lenis = new Lenis({
			prevent: (node) => node.classList.contains('lenis-prevent'),
			wrapper: document.querySelector('main')
		});
		window.lenis = lenis;

		function raf(time) {
			window.lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		onMountHandle();
		return () => observer.disconnect();
	});

	/**
	 * This function is called when the component is mounted.
	 * It is an asynchronous function.
	 */
	async function onMountHandle() {
		await tick();
		// Retract sidebar on navigation
		isSidebarShown = false;

		// Hide sidebar indicator
		sidebarIndicator.set({
			y: $sidebarIndicator.y,
			width: 0
		});

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					const newActiveSectionLink = document.querySelector(`a[href="#${entry.target.id}"]`);
					if (!newActiveSectionLink) return;
					if (newActiveSectionLink === activeSectionLink) return;
					activeSectionLink = newActiveSectionLink;
					// Add text-black class to active link
					activeSectionLink.classList.add('text-black');
					activeSectionLink.classList.remove('text-white');
					// Remove text-black class from other links
					document.querySelectorAll('aside > nav > a').forEach((link) => {
						if (link !== activeSectionLink) {
							link.classList.remove('text-black');
							link.classList.add('text-white');
						}
					});
					// Update sidebar indicator position
					sidebarIndicator.set({
						y: activeSectionLink.offsetTop - 4,
						width: activeSectionLink.clientWidth + 16
					});
				});
			},
			{ threshold: 0.5 }
		);

		$sections.forEach((section) => {
			observer.observe(document.getElementById(section.id));
		});

		if ($sections.length === 0) {
			// By calling tick, we ensure that the DOM has been updated
			await tick();

			sidebarIndicator.set({
				y: goBackButton.offsetTop - 4,
				width: goBackButton.getBoundingClientRect().width + 16
			});
		}

		// Hide/Show sidebar occupation
		const logo = document.getElementById('logo');
		const occupation = logo.querySelector('h2');
		document.querySelector('main').addEventListener('scroll', (e) => {
			const scroll = e.target.scrollTop;
			if (scroll > 200) {
				occupation.classList.remove('top-full');
				occupation.classList.add('top-0');
			} else {
				occupation.classList.add('top-full');
				occupation.classList.remove('top-0');
			}
		});
	}
</script>

<!-- Custom cursor -->
<Cursor />

<!-- Initial page loader -->
<InitialPageLoader />

<Analytics />

<div class="h-screen w-screen bg-primary">
	<div class="mx-auto flex h-full w-full max-w-[2000px] flex-row gap-8 p-2 md:p-6 lg:p-8">
		<!-- Sidebar -->
		<aside
			class={cn(
				'z-30 flex w-4/5 shrink-0 flex-col justify-between bg-primary transition-transform duration-500 max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:top-0 max-lg:p-6 lg:w-[200px]',
				!isSidebarShown && 'max-lg:-translate-x-full'
			)}
		>
			<div class="relative" id="logo">
				<h2
					class="font-base absolute left-0 right-0 top-full -z-10 text-lg transition-all duration-300 ease-back-out"
				>
					{$t('sidebar.occupation')}
				</h2>
				<a href="/" aria-label="Go home" class="flex w-fit flex-col bg-primary">
					<h1 class="text-xl font-semibold">Angus Paillaugue</h1>
				</a>
			</div>

			<!-- TOC -->
			<nav class="relative flex h-fit flex-col gap-2 px-2 font-medium">
				{#each $sections as section}
					<a
						href="#{section.id}"
						class="w-fit cursor-pointer capitalize text-white transition-colors"
						in:scale>{section.label}</a
					>
				{/each}
				<!-- Scroll indicator -->
				<span
					class="absolute -z-10 -ml-2 h-8 rounded-full bg-white"
					style="top: {$sidebarIndicator.y}px; width: {$sidebarIndicator.width}px;"
				></span>
				{#if $sections.length === 0}
					<button
						class="flex w-fit flex-row gap-2 text-base font-medium text-black"
						onclick={() => window.history.back()}
						aria-label={$t('sidebar.back')}
						in:scale
						bind:this={goBackButton}
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 size-6" viewBox="0 0 24 24">
							<path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m12 19l-7-7l7-7m7 7H5"
							/>
						</svg>
						{$t('sidebar.back')}
					</button>
				{/if}
			</nav>
			<div></div>
		</aside>
		<!-- Open sidebar button -->
		{#if $page.route.id === '/'}
			<button
				onclick={() => (isSidebarShown = !isSidebarShown)}
				class={cn(
					'transition-color fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-row items-center gap-4 rounded-2xl bg-primary px-4 py-2 text-lg text-white duration-500 lg:hidden',
					isSidebarShown && 'bg-white text-black'
				)}
				in:scale={{ duration: 300, start: 0.5 }}
			>
				{#if isSidebarShown}
					<svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"
						>
							<animate
								fill="freeze"
								attributeName="d"
								dur="0.4s"
								values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"
							/>
						</path>
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6">
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"
						>
							<animate
								fill="freeze"
								attributeName="d"
								dur="0.4s"
								values="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19;M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"
							/>
						</path>
					</svg>
				{/if}
				{$t('sidebar.menu')}
			</button>
		{:else}
			<!-- Go back button -->
			<a
				href="/"
				aria-label={$t('sidebar.back')}
				class="transition-color fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-row items-center gap-4 rounded-2xl bg-primary px-4 py-2 text-lg text-white duration-500 lg:hidden"
				in:scale={{ duration: 300, start: 0.5 }}
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m12 19l-7-7l7-7m7 7H5"
					/>
				</svg>
				{$t('sidebar.back')}
			</a>
		{/if}
		<main
			class="no-scrollbar h-full w-full grow scroll-pt-[100px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white text-black"
			tabindex="-1"
		>
			{#if $navigating}
				<div class="flex h-full w-full flex-col items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="size-12" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="0" fill="currentColor">
							<animate
								id="svgSpinnersPulse20"
								fill="freeze"
								attributeName="r"
								begin="0;svgSpinnersPulse21.begin+0.6s"
								calcMode="spline"
								dur="1.2s"
								keySplines=".52,.6,.25,.99"
								values="0;11"
							/>
							<animate
								fill="freeze"
								attributeName="opacity"
								begin="0;svgSpinnersPulse21.begin+0.6s"
								calcMode="spline"
								dur="1.2s"
								keySplines=".52,.6,.25,.99"
								values="1;0"
							/>
						</circle>
						<circle cx="12" cy="12" r="0" fill="currentColor">
							<animate
								id="svgSpinnersPulse21"
								fill="freeze"
								attributeName="r"
								begin="svgSpinnersPulse20.begin+0.6s"
								calcMode="spline"
								dur="1.2s"
								keySplines=".52,.6,.25,.99"
								values="0;11"
							/>
							<animate
								fill="freeze"
								attributeName="opacity"
								begin="svgSpinnersPulse20.begin+0.6s"
								calcMode="spline"
								dur="1.2s"
								keySplines=".52,.6,.25,.99"
								values="1;0"
							/>
						</circle>
					</svg>
				</div>
			{:else}
				{@render children()}
			{/if}
		</main>
	</div>
</div>

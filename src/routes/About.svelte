<script>
	import { cn, reveal } from '$lib/utils';
	import { A } from '$lib/components';
	import { locale } from '$lib/stores';
	import { t } from '$lib/i18n';

	let { experience } = $props();

	const iconPaths = [
		'M7.5 0C7.75463 4.03197 10.968 7.24539 15 7.5C10.968 7.75463 7.75463 10.968 7.5 15C7.24539 10.968 4.03197 7.75463 0 7.5C4.03197 7.24539 7.24539 4.03197 7.5 0Z',
		'M8.03573 0L6.96428 0V6.20667L2.57551 1.81789L1.8179 2.57551L6.20667 6.96428H0L0 8.03573H6.20666L1.8179 12.4245L2.57551 13.1821L6.96428 8.7933V15H8.03573V8.7933L12.4245 13.1821L13.1821 12.4245L8.7933 8.03573H15V6.96428H8.7933L13.1821 2.5755L12.4245 1.81789L8.03573 6.20666V0Z'
	];

	/**
	 * Function to get a random position for the stars.
	 */
	function getStarPos() {
		const borderWidth = 50;
		const borderHeight = 40;
		const width = 224;
		const height = 48;

		const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
		const topRand = Math.random();
		const leftRand = Math.random();

		let top, left;
		switch (side) {
			case 0: // Top side (0 to 20px from the top)
				top = -Math.floor(topRand * borderHeight);
				left = Math.floor(leftRand * (width + borderWidth * 2)) - borderWidth;
				break;
			case 1: // Right side (0 to 20px from the right)
				top = Math.floor(topRand * (height + borderHeight * 2)) - borderHeight;
				left = width + Math.floor(leftRand * borderWidth);
				break;
			case 2: // Bottom side (0 to 20px from the bottom)
				top = height + Math.floor(topRand * borderHeight);
				left = Math.floor(leftRand * (width + borderWidth * 2)) - borderWidth;
				break;
			case 3: // Left side (0 to 20px from the left)
				top = Math.floor(topRand * (height + borderHeight * 2)) - borderHeight;
				left = -Math.floor(leftRand * borderWidth);
				break;
		}

		// Ensure the top and left values don't go beyond the container's border limits
		return {
			top: Math.max(-borderHeight, Math.min(height + borderHeight, top)),
			left: Math.max(-borderWidth, Math.min(width + borderWidth, left))
		};
	}
</script>

<section class="max-w-screen-xl mx-auto p-4" id="about">
	<div class="flex flex-col max-lg:items-center">
		<button class="relative group h-12 w-56">
			{#each { length: 20 } as _, i}
				{@const { top, left } = getStarPos()}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 15 15"
					fill="none"
					class="size-6 text-primary absolute opacity-0 transition-all group-hover:opacity-70 group-focus:opacity-70 star-icon"
					style="--top:{top}px; --left:{left}px;"
				>
					<path d={iconPaths[i % iconPaths.length]} fill="currentColor"></path>
				</svg>
			{/each}
			<h1 class="max-lg:text-center text-start">{$t('home.about.title')}</h1>
		</button>
	</div>

	<h4 class="flex flex-row items-center gap-2 mt-10">
		{$t('home.about.subtitle')}
		<svg xmlns="http://www.w3.org/2000/svg" class="size-6 shrink-0 inline" viewBox="0 0 512 512">
			<path
				fill="#d5dee4"
				d="M256 504.575c-13.382 0-18.231-10.848-18.231-24.23l-6-323.28c0-13.382 10.848-24.23 24.23-24.23s24.23 10.848 24.23 24.23l-6 323.28c.001 13.382-4.847 24.23-18.229 24.23"
			/>
			<path
				fill="#bccbd3"
				d="M256 132.834c-13.382 0-24.23 10.848-24.23 24.23l1.752 94.386C240.745 253.119 248.27 254 256 254s15.255-.881 22.479-2.549l1.752-94.386c-.001-13.382-10.849-24.231-24.231-24.231"
			/>
			<circle cx="256" cy="112" r="111" fill="#ff473e" />
			<ellipse
				cx="194.399"
				cy="60.749"
				fill="#fd7085"
				rx="19.076"
				ry="32.428"
				transform="rotate(33.488 194.39 60.752)"
			/>
		</svg>
	</h4>
	<p class="mt-4" use:reveal>
		{$t('home.about.description')}
		<A href="#projects">
			{$t('home.about.myProjects')}
		</A>
	</p>

	<p class="mt-4" use:reveal>
		{$t('home.about.mySkills')}
	</p>

	<p class="mt-4" use:reveal>
		{$t('home.about.myExperience')}
	</p>

	<p class="mt-4" use:reveal>
		{$t('home.about.wantToLearn')}
	</p>

	<div class="mt-4" use:reveal>
		<A href="/cv/{$locale}.pdf" target="_blank">
			{$t('home.about.downloadCV')}
		</A>
	</div>
	<h2 class="mt-10" use:reveal>
		{$t('home.about.goToExperienceSection')}
	</h2>

	<ol role="list" class="list-none mt-4">
		{#each experience[$locale] as job, index}
			<li
				class={cn(
					'relative m-0 pl-10 pt-1 before:absolute before:left-0 before:top-1.5 before:flex before:size-5 before:flex-col before:items-center before:justify-center before:rounded-full before:bg-primary before:hover:scale-125 before:transition-transform w-fit',
					index < experience[$locale ?? 'en'].length - 1 &&
						'after:absolute after:bottom-0 after:left-[9px] after:top-8 after:w-0 after:border-l after:border-neutral-300 pb-8'
				)}
				use:reveal
			>
				<h3>{job.name}</h3>
				<p>{job.start} - {job.end}</p>
			</li>
		{/each}
	</ol>
</section>

<style>
	:global(.star-icon) {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	:global(.group:is(:hover, :focus) .star-icon) {
		top: var(--top);
		left: var(--left);
	}
</style>

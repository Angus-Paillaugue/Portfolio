<script>
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
		const width = 160;
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

<section class="max-w-screen-xl mx-auto p-2 lg:p-4" id="about">
	<div class="flex flex-col max-lg:items-center">
		<button class="relative group h-12 flex flex-row items-center justify-start w-40">
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
			<h1>About</h1>
		</button>
	</div>

	<h3 class="flex flex-row items-center gap-2 mt-10">
		A dedicated Full-stack Developer based in Toulouse, France
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
	</h3>
	<p class="mt-4">
		As a Junior Full-Stack Developer, I possess an impressive arsenal of skills in SvelteKit,
		Tailwind and SQL. I excel in designing and maintaining responsive websites that offer a smooth
		user experience. My expertise lies in crafting dynamic, engaging interfaces through writing
		clean and optimized code and utilizing cutting-edge development tools and techniques. I am also
		a team player who thrives in collaborating with cross-functional teams to produce outstanding
		web applications.
	</p>

	<a
		href="/my-cv.pdf"
		target="_blank"
		class="decoration-dotted decoration-2 decoration-primary underline underline-offset-2 hocus:text-primary flex flex-row gap-1 mr-1 hocus:gap-2 hocus:mr-0 transition-all items-center mt-2"
	>
		My CV
		<svg xmlns="http://www.w3.org/2000/svg" class="size-4 text-black" viewBox="0 0 24 24">
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

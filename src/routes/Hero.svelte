<script>
	import Code from '$lib/components/icons/Code.svelte';
	import Smiley from '$lib/components/icons/Smiley.svelte';
</script>

<section id="home" class="bg-primary/10">
	<div
		class="max-w-screen-xl mx-auto px-2 md:px-8 lg:px-12 pt-32 pb-20 sm:pb-30 sm:pt-[160px] md:pt-[200px] md:pb-[100px] lg:pt-[280px] lg:pb-[200px] flex flex-col gap-20 min-h-[400px] items-center"
	>
		<h1 class="group/heading lg:w-[80%]">
			Hi, I'm Angus
			<Smiley
				class="inline-block text-sm size-12 rotate-[16deg] transition-transform group-hover/heading:rotate-[25deg] group-hover/heading:scale-125 duration-500 ease-back-out"
			/>
			- A fullstack web developer
			<Code
				class="inline-block text-sm w-12 rotate-[-25deg] transition-transform group-hover/heading:rotate-[-16deg] group-hover/heading:scale-125 duration-500 ease-back-out delay-200"
			/>
			living in Toulouse.
		</h1>
		<p class="text-lg ml-auto lg:w-[50%]">
			This personal website is my own little space on the internet where I want to share my work,
			interests and passions with others, without having to please the algorithms of social media
			platforms or follow any other rules. I hope you enjoy exploring my digital living room as much
			as I enjoyed creating it.
		</p>
	</div>
</section>

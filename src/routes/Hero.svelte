<script>
	import Code from '$lib/components/icons/Code.svelte';
	import Smiley from '$lib/components/icons/Smiley.svelte';
	import { t } from '$lib/i18n';
</script>

<section id="home" class="bg-primary/10">
	<div
		class="sm:pb-30 mx-auto flex min-h-[400px] max-w-screen-xl flex-col items-center gap-20 px-4 pb-20 pt-20 sm:pt-[160px] md:px-8 md:pb-[100px] md:pt-[200px] lg:px-12 lg:pb-[200px] lg:pt-[280px]"
	>
		<h1 class="group/heading lg:w-[80%]">
			{$t('home.hero.title1')}
			<Smiley
				class="inline-block size-12 rotate-[16deg] text-sm transition-transform duration-500 ease-back-out group-hover/heading:rotate-[25deg] group-hover/heading:scale-125"
			/>
			- {$t('home.hero.title2')}
			<Code
				class="inline-block w-12 rotate-[-25deg] text-sm transition-transform delay-200 duration-500 ease-back-out group-hover/heading:rotate-[-16deg] group-hover/heading:scale-125"
			/>
			{$t('home.hero.title3')}
		</h1>
		<p class="ml-auto text-lg lg:w-[50%]">
			{$t('home.hero.subtitle')}
		</p>
	</div>
</section>

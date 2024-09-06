<script>
  import { onMount } from 'svelte';

  let isLoaded = $state(false);

  onMount(() => {
		isLoaded = true;
	});
</script>

<svelte:head>
	<style>
		@keyframes fade {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
	</style>
</svelte:head>

<div class="z-50 fixed inset-0 grid grid-cols-11 grid-rows-11 pointer-events-none">
	{#each { length : 11 * 11} as _, i}
		<div class="w-full h-full bg-white felx flex-col items-center justify-center" style="opacity: 1;" style:animation={isLoaded && `2s ease ${i* 10}ms forwards fade`}>
			{#if i === Math.floor((11 * 11) / 2)}
				<svg xmlns="http://www.w3.org/2000/svg" class="size-full aspect-square text-primary" viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="0" fill="currentColor">
						<animate id="svgSpinnersPulse20" fill="freeze" attributeName="r" begin="0;svgSpinnersPulse21.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11" />
						<animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulse21.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0" />
					</circle>
					<circle cx="12" cy="12" r="0" fill="currentColor">
						<animate id="svgSpinnersPulse21" fill="freeze" attributeName="r" begin="svgSpinnersPulse20.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11" />
						<animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse20.begin+0.6s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0" />
					</circle>
				</svg>
			{/if}
		</div>
	{/each}
</div>

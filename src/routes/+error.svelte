<script>
  import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
  import { A } from '$lib/components';

	const statusCount = spring(0, {
    stiffness: 0.1,
    damping: 0.3,
  });
	let offset = $derived(modulo($statusCount, 1));

	function modulo(n, m) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}

  onMount(() => {
    statusCount.set($page.status);
  });
</script>

<main class="w-full h-full flex flex-col items-center justify-center">
  <div class="relative overflow-hidden text-center w-32 h-[5.2rem]">
    <div class="absolute w-full h-full text-6xl font-black" style="transform: translate(0, {100 * offset}%)">
      <span class="-top-full select-none absolute flex w-full h-full items-center justify-center text-primary" aria-hidden="true">{Math.floor($statusCount + 1)}</span>
      <span class="absolute flex w-full h-full items-center justify-center text-primary">{Math.floor($statusCount)}</span>
    </div>
  </div>

  <h2>{$page.error.message}</h2>

  <A href="/" class="mt-4" icon={false}>Go Home</A>
</main>

<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { A } from '$lib/components';
	import { t } from '$lib/i18n';

	const statusCount = spring(0, {
		stiffness: 0.1,
		damping: 0.3
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

<svelte:head>
	<title>{$page.status} Error</title>
</svelte:head>

<main class="flex h-full w-full flex-col items-center justify-center">
	<div class="relative h-[5.2rem] w-32 overflow-hidden text-center">
		<div
			class="absolute h-full w-full text-6xl font-black"
			style="transform: translate(0, {100 * offset}%)"
		>
			<span
				class="absolute -top-full flex h-full w-full select-none items-center justify-center text-primary"
				aria-hidden="true">{Math.floor($statusCount + 1)}</span
			>
			<span class="absolute flex h-full w-full items-center justify-center text-primary"
				>{Math.floor($statusCount)}</span
			>
		</div>
	</div>

	<h2>{$t($page.error.message)}</h2>

	<A href="/" class="mt-4" icon={false}>{$t('errors.goHome')}</A>
</main>

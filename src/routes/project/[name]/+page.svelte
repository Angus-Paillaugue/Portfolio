<script>
	const { data } = $props();
	const { component, meta } = data;
</script>

<svelte:head>
	<title>{meta.name} | Angus Paillaugue</title>
</svelte:head>

<div class="p-2">
	{@render component()}
</div>

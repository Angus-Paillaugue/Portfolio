<script>
    import "../app.css";
    import { fly } from 'svelte/transition'
    import { Analytics } from '$lib/components'

    export let data;
</script>

<svelte:head>
    <meta name="keywords" content="Portfolio">
    <meta name="author" content="Angus Paillaugue">
</svelte:head>

<Analytics />

{#key data.url}
    <div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
        <slot />
    </div>
{/key}
<script>
    import "../app.css";
    import { Analytics } from '$lib/components';
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let isLoaded = false;
    let dots = ".";

    setInterval(() => {
        dots = dots.length <= 3 ? dots + "." : ".";
    }, 200);

    onMount(() => {
        setTimeout(() => {
            isLoaded = true;
        }, 400)
    });
</script>

<svelte:head>
    <meta name="keywords" content="Portfolio">
    <meta name="author" content="Angus Paillaugue">
</svelte:head>

<Analytics />


{#if isLoaded}
    <slot />
{:else}
    <div class="fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center" in:fade={{duration:100}} out:fade={{duration:100}}>
        <div class="flex flex-row gap-2 justify-center items-center">
            <svg fill='none' class="w-10 h-10 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                <path clip-rule='evenodd' d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z' fill='currentColor' fill-rule='evenodd' />
            </svg>
            <p>Loading <span class="w-2 inline-block">{dots}</span></p>
        </div>
    </div>
{/if}
<script>
    import "../app.css";
    import { fly } from 'svelte/transition'

    export let data;
</script>
  
{#key data.url}
    <div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
        <slot />
    </div>
{/key}
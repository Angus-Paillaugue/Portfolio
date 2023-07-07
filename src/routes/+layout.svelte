<script>
    import "../app.css";
    import { fly } from 'svelte/transition'
    import { Analytics } from '$lib/components'
    import { onMount } from "svelte";

    export let data;

    onMount(() => {
        var section = document.querySelectorAll("section");
        var sections = {};
        var i = 0;

        section.forEach(function(e) {
            sections[e.id] = e.getBoundingClientRect().top + window.scrollY;
        });
        
        window.onscroll = function() {
            var scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) +window.innerHeight/2;
            
            for (i in sections) {
                if (sections[i] <= scrollPosition) {
                    document.querySelectorAll('[data-section]').forEach(el => {
                        el.classList.remove('link','border-b-2');
                    });
                    document.querySelector('[data-section*=' + i + ']').classList.add('link','border-b-2');
                }
            }
        };
    })
</script>

<Analytics />

<nav class="bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-200">
    <div class="flex flex-row justify-between mx-auto max-w-4xl p-4 ">
        <h3 class="max-md:text-xl">Angus</h3>
        <ul class="flex justify-center md:justify-between flex-row md:gap-8 sm:gap-4 gap-2 font-medium border-gray-100 rounded-lg bg-white md:text-base text-sm">
            <li><a href="#Home" class="link border-primary-600 border-b-2" data-section="Home">Home</a></li>
            <li><a href="#About" class="border-primary-600" data-section="About">About</a></li>
            <li><a href="#Work" class="border-primary-600" data-section="Work">Work</a></li>
            <li><a href="#Experience" class="border-primary-600" data-section="Experience">Experience</a></li>
            <li><a href="#Contact" class="border-primary-600" data-section="Contact">Contact</a></li>
        </ul>
    </div>
</nav>
  
{#key data.url}
    <div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
        <slot />
    </div>
{/key}
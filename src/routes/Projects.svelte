<script>
	import { onMount } from "svelte";

  let projectsCarousel = $state();
  let carouselIndex = $state(0);
  let displayedElements = $state(3)

  const projects = [
    {
      date:2024,
      name:'Svelte Shine',
      tags:['Markdown', 'Docs', 'Svelte'],
      description:'A documentation writing template for Svelte projects',
      bgColor:'bg-[#f38d1c]',
      link:'https://svelte-shine.paillaugue.fr',
      image:'/projectsAssets/Svelte-Shine/logo.svg'
    },
    {
      date:2024,
      name:'Portfolio',
      tags:["SvelteKit", "TailwindCSS"],
      description:'This project is simply the one you are looking at right now!',
      bgColor:'bg-blue-600',
      link:'https://angus.paillaugue.fr',
      image:'https://angus.paillaugue.fr/Nothing-Notes.webp'
    },
    {
      date:2024,
      name:'Nothing Notes',
      tags:['Notes', 'SvelteKit'],
      description:'Note taking app based ont the Nothing™ design',
      link:'https://notes.paillaugue.fr ',
      bgColor:'bg-black',
      image:'https://angus.paillaugue.fr/Nothing-Notes.webp'
    },
    {
      date:2024,
      name:'Code Chronicles',
      tags:["SvelteKit", "TailwindCSS", "Markdown"],
      description:'This website was my first contact with Sveltekit. It allowed me to learn the fundamentals principles of Sveltekit.',
      bgColor:'bg-[#131110]',
      link:'https://blog.paillaugue.fr',
      image:'https://angus.paillaugue.fr/Nothing-Notes.webp'
    },
    {
      date:2024,
      name:'Shop',
      tags:["SvelteKit", "TailwindCSS", "MongoDB"],
      description:'This website is a replica of Nude Project (clothing brand) made with SvelteKit.',
      bgColor:'bg-[#452b1a]',
      link:'https://shop.paillaugue.fr',
      image:'https://angus.paillaugue.fr/Nothing-Notes.webp'
    },
  ]

  $effect(handleCarouselIndexChange);

  onMount(() => {
    window.addEventListener('resize', onResize);
    onResize()

    return () => {
      window.removeEventListener('resize', onResize);
    }
  });

  function handleCarouselIndexChange() {
    const leftCard = projectsCarousel.children[carouselIndex];
    projectsCarousel.style.transform = `translateX(-${leftCard.offsetLeft}px)`;
  }

  function onResize() {
    displayedElements = screen.width > 768 ? 3 : 1;
  }
</script>

<section id="projects" class="max-w-screen-xl mx-auto p-2 lg:p-4">
  <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
    <h1>Projects</h1>
    <p>Like most of us - I have lot of ideas and projects that I would like to implement. Many of them get lost in my notes or as random thoughts on my computer. But can you believe it? Some of them actually happen. </p>
  </div>

  <div class="flex flex-row col-[content] gap-8 relative transition-transform duration-300 ease-in-out mt-20" bind:this={projectsCarousel}>
    {#each projects as project}
    <!-- TODO : Fix mobile click not growing lower section -->
      <div class="aspect-square group rounded-xl relative flex flex-col w-full md:w-1/3 shrink-0 group/card overflow-hidden {project.bgColor}">
        <div class="absolute pointer-events-none z-0 inset-4 bg-center bg-no-repeat bg-contain" style="background-image: url({project.image});"></div>
        <p class="absolute z-20 top-4 right-4 text-neutral-200 bg-white/10 text-sm px-2 py-1 rounded-full">{project.date}</p>
        <div class="p-4 mt-auto z-10 {project.bgColor}">
          <h3 class="text-neutral-100 font-medium text-lg">{project.name}</h3>
          <div class="flex flex-nowrap overflow-auto no-scrollbar gap-4 mt-2 flex-row">
            {#each project.tags as tag}
              <span class="text-neutral-200 bg-white/10 text-xs px-2 py-1 rounded-full">{tag}</span>
            {/each}
          </div>
        </div>
        <div class="h-0 px-4 z-10 overflow-hidden flex flex-col justify-between group-hover/card:grow duration-300 ease-in transition-all {project.bgColor}">
          <p class="mt-4 text-neutral-50/70">{project.description}</p>
          <div class="mb-2">
            <a href={project.link} target="_blank" class="text-white flex flex-row gap-2 items-center">
              Open project
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10v10M7 17L17 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="flex flex-row-items-center justify-end gap-8 mt-4">
    <button class="rounded-full p-1 disabled:text-neutral-400 transition-colors hover:bg-neutral-300/50 group/button" aria-label="Carousel previous" onclick={() => {carouselIndex = Math.max(carouselIndex - 1, 0)}} disabled={carouselIndex === 0}>
      <svg xmlns="http://www.w3.org/2000/svg" class="size-8 transition-transform translate-x-2 group-disabled/button:translate-x-0 group-hover/button:translate-x-0" viewBox="0 0 24 24" >
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l-7-7l7-7m7 7H5" />
      </svg>
    </button>
    <button class="rounded-full p-1 disabled:text-neutral-400 transition-colors hover:bg-neutral-300/50 group/button" aria-label="Carousel next" onclick={() => {carouselIndex = Math.min(carouselIndex + 1, projects.length)}} disabled={projects.length - displayedElements <= carouselIndex}>
      <svg xmlns="http://www.w3.org/2000/svg" class="size-8 transition-transform -translate-x-2 group-hover/button:translate-x-0" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7" />
      </svg>
    </button>
  </div>
</section>

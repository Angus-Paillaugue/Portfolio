<script>
    import languages from "$lib/languages";
    import { onMount } from "svelte";

    export let data;

    const theme = "light";
    const project = data.project;
    let article;

    onMount(() => {
        // Add classes to the heading elements
        const headings = article.querySelectorAll('h1,h2,h3,h4,h5,h6');
        headings.forEach((heading) => {
        heading.classList.add('article-heading');
        });
        // Add classes to the paragraph elements
        const paragraphs = article.querySelectorAll('p');
        paragraphs.forEach((paragraph) => {
        paragraph.classList.add('article-text');
        });
    });
</script>

<svelte:head>
    <title>{project.title} - Angus's portfolio</title>
    <meta name="description" content="{project.title}">
</svelte:head>

<button onclick="history.back()" class="fixed top-6 left-6 flex flex-col justify-center items-center bg-gray-100 rounded-full w-10 h-10 hover:scale-110 transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>
</button>

<section id="work" class="p-4 lg:p-10 sm:p-6">
    <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
        <div class="flex flex-col rounded-2xl lg:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300">
            <div class="grid grid-cols-1 lg:grid-cols-7 lg:gap-20 gap-5 mb-6">
                <div class="rounded-2xl border border-gray-300 lg:-mt-0 -mt-9 lg:-ml-20 -ml-9 lg:-mr-0 -mr-9 col-span-1 lg:col-span-4">
                    <img src="/{project.imgSrc}" alt="{project.title} img" class="rounded-2xl w-full h-full">
                </div>
                <div class="flex flex-col w-full gap-4 col-span-1 lg:col-span-3">
                    <h4 class="font-bold">{project.title}</h4>
                    <a href="{project.link}" target="_blank" class="link">
                        {project.link}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 inline-block ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                    </a>
                    <div class="grid gap-2" style="grid-template-rows: min-content; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));">
                        {#each project.languages as language}
                            <img src="/icons/{languages.filter(lang => lang.name == language)[0].icons[theme]}" class="languageIcon" alt="{language}">
                        {/each}
                    </div>
                </div>
            </div>
            <article bind:this={article}>
                <svelte:component this={data.component} />
            </article>
        </div>
    </div>
</section>

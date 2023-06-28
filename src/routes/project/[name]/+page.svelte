<script>
    import languages from "$lib/languages"
    import { Link, Button } from "$lib/components"
    import { Tooltip } from 'flowbite-svelte'


    export let data;

    const theme = "light";

    const project = data.project;
</script>

<button onclick="history.back()" class="fixed top-6 left-6 flex flex-col justify-center items-center bg-gray-200 rounded-full w-10 h-10 hover:scale-110 transition-all">
    <i class="bi bi-arrow-left-short text-4xl"></i>
</button>

<section id="work" class="p-4 lg:p-10 sm:p-6">
    <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
        <div class="flex md:flex-row flex-col md:gap-20 gap-5 rounded-2xl md:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300">
            <div class="rounded-2xl border border-gray-300 lg:-mt-0 -mt-9 lg:-ml-20 -ml-9 lg:-mr-0 -mr-9">
                <img src="/{project.imgSrc}" alt="{project.title} img" class="rounded-2xl w-full h-full">
            </div>
            <div class="flex flex-col w-full gap-4">
                <h4 class="font-bold">{project.title}</h4>
                <Link href="{project.link}" target="_blank">{project.link}<i class='bi bi-box-arrow-up-right ml-2'></i></Link>
                <p>{@html project.description}</p>
                <div class="flex flex-row gap-2 flex-wrap">
                    {#each project.languages as language}
                        <img src="/icons/{languages.filter(lang => lang.name == language)[0].icons[theme]}" class="md:h-14 h-10 cursor-pointer drop-shadow-md" alt="{language}">
                        <Tooltip>{language}</Tooltip>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
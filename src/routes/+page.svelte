<script>
    import languages from "$lib/languages"
    import projects from "$lib/projects"
    import { Link, Button } from "$lib/components"
    import { Tooltip, Input, Label, Textarea } from 'flowbite-svelte'
    import { reveal } from 'svelte-reveal';

    let email;
    let message;
    let sendEmailButtonContent = "Submit";

    async function contact(){
        sendEmailButtonContent = "<div role='status'><svg aria-hidden='true' class='inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor'/><path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill'/></svg><span class='sr-only'>Loading...</span></div>"
        const response = await fetch('/contact', {
            method: 'POST',
            body: JSON.stringify({ email, message }),
            headers: {
                'content-type': 'application/json'
            }
        });
        
        await response.json();
        sendEmailButtonContent = "<i class='bi bi-check'></i>";
        setTimeout(() => {
            sendEmailButtonContent = "Submit"
        }, 2000);
    }

    const theme = "light";
    const techStack = ["HTML", "Javascript", "TailwindCSS", "Svelte", "MongoDB"];
    const socials = [{ name:"LinkedIn", link:"https://www.linkedin.com/in/angus-paillaugue-573aa91a5/" }, { name:"Github", link:"https://github.com/mere-patrie" }, { name:"CodeWars", link:"https://www.codewars.com/users/mere-patrie" }];
    // TODO : Round codeWars svg logo
</script>

<svelte:head>
    <title>Angus's portfolio</title>
</svelte:head>

<section class="p-4 lg:p-10 sm:p-6 min-h-screen flex flex-col md:justify-center items-center relative">

    <div class="absolute top-0 left-0 w-full h-full duration-[10s]" style="z-index: -20; background: url(https://astro.build/assets/noise.webp) repeat,linear-gradient(0deg,#FFBCAD 0%,#EF562F 100%); background-blend-mode: overlay;-webkit-mask-image: radial-gradient(rgba(0,0,0,.5),transparent 70%);"></div>

    <div class="flex flex-col w-full max-w-4xl mx-auto md:gap-20 gap-5 max-h-full md:max-h-3/4">

        <!-- Short about me and image section -->
        <div class="flex flex-col-reverse mx-auto md:gap-20 gap-5 md:flex-row justify-center items-start md:w-full max-w-sm md:max-w-none">
            <div class="block md:w-3/5 w-full text-start h-full">
                <h1 class="font-bold text-7xl text-center md:text-start">Full stack web dev</h1>
                <p class="mt-4 font-normal text-lg text-center md:text-start">Hi 👋, I'm Angus. A passionate full-stack web developer based in Toulouse, France</p>
            </div>
    
            <div class="block md:w-2/5 w-full max-w-xs mx-auto">
                <div class="w-full aspect-square bg-no-repeat bg-cover bg-center border-2 border-primary-600 transition-all duration-1000 ease-in-out shadow-2xl" style="border-radius: 28% 72% 22% 78% / 39% 23% 77% 61%; transform: rotate(0deg); animation: morph 8s ease-in-out infinite; background-image: url('angus.jpg');"></div>
            </div>
    
            <!-- Blob animation -->
            <style>
                @keyframes morph {
                    0% {
                        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                    }
                    50% {
                        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
                    }
                    100% {
                        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                    }
                }
            </style>
        </div>

        <!-- Tech stack -->
        <div class="flex md:flex-row flex-col mx-auto gap-5 md:justify-start justify-center items-center md:w-full max-w-sm md:max-w-none flex-wrap">
            <p class="text-lg font-bold md:pr-5 md:border-r-2 md:border-b-0 border-b-2 border-text-main md:mr-4">Tech Stack</p>
            <div class="flex flex-row gap-5 flex-wrap md:justify-start justify-center">
                {#each techStack as language}
                    <div>
                        <img src="/icons/{languages.filter(lang => lang.name == language)[0].icons[theme]}" class="md:h-20 h-14 cursor-pointer drop-shadow-xl" alt="{language}">
                        <Tooltip>{language}</Tooltip>
                    </div>
                {/each}
            </div>
        </div>
    </div>

</section>


<div class="relative">

    <!-- Squares bg -->
    <!-- <div class="absolute top-0 left-0 w-full h-full bg-top" style="z-index: -20;background-size: 20px 20px; background-image: linear-gradient(to right, rgb(209, 213, 219, .4) 1px, transparent 1px), linear-gradient(rgba(209, 213, 219, .4) 1px, transparent 1px);image-rendering: pixelated;"></div> -->

    <!-- Topography bg -->
    <div class="absolute top-0 left-0 w-full h-full bg-top" style="z-index: -20;background-image: url(/bg.svg);image-rendering: pixelated;"></div>


    <div class="absolute top-0 left-0 w-full h-64" style="z-index: -19;background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);"></div>

    <div class="absolute bottom-0 left-0 w-full h-64" style="z-index: -19;background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);"></div>

    
    <section id="about" class="p-4 lg:p-10 sm:p-6 flex flex-col lg:justify-center items-center">

        <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
            
            <div class="grid lg:grid-cols-2 grid-cols-1 items-center md:gap-10 gap-0 w-full max-w-5xl mx-auto rounded-lg lg:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300" use:reveal={{ transition: "fly", duration:200, y:60 }}>
                <div class="w-full lg:w-auto h-full lg:aspect-auto aspect-square relative lg:-mt-0 -mt-20 lg:-ml-20 -ml-0 rounded-lg bg-cover bg-no-repeat bg-center" style="background-image: url(aboutImg.jpg);">
                    <div class="absolute top-0 left-0 h-full w-full z-10 opacity-70 rounded-2xl" style="background: url(noise.png) repeat;background-blend-mode: overlay;"></div>
                </div>
                <div class="w-full flex flex-col gap-3">
                    <h4 class="text-primary-600 font-bold">ABOUT ME</h4>
                    <h4 class="font-bold">A dedicated Full-stack Developer based in Toulouse, France 📍</h4>
                    <p class="leading-6">As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                    <Button href="myCv.pdf" target="_blank">My CV</Button>
                    <div class="flex flex-row flex-wrap gap-5">
                        {#each socials as social}
                            <a href="{social.link}" target="_blank">
                                <img src="/icons/{languages.filter(lang => lang.name == social.name)[0].icons[theme]}" class="md:h-14 h-10 cursor-pointer drop-shadow-md" alt="{social.name}">
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    <section id="work" class="p-4 lg:p-10 sm:p-6 sm:pl-12">
        <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
            <h4 class="text-primary-600 font-extrabold">MY PROJECTS</h4>
    
            {#each projects as project, index}
                <div class="flex md:flex-{index % 2 == 0 ? "row" : "row-reverse"} flex-col md:gap-10 gap-5 rounded-2xl md:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300 project" use:reveal={{ transition: "slide", duration:200, x:index % 2 == 0 ? -40 : 40 }}>
                    <div class="rounded-2xl border border-gray-300 {index % 2 == 0 ? "md:-mt-0 -mt-9 md:-ml-20 -ml-9 md:-mr-0 -mr-9" : "md:-mt-0 -mt-9 md:-ml-0 -ml-9 md:-mr-20 -mr-9"}">
                        <img src="/{project.imgSrc}" alt="{project.title} img" class="rounded-2xl w-full h-full">
                    </div>
                    <div class="flex flex-col w-full gap-4 justify-between">
                        <div class="flex flex-col w-full gap-4">
                            <Link href="/project/{project.title}" class="w-fit"><h4 class="font-bold">{project.title}</h4></Link>
                            <Link href="{project.link}" target="_blank" class="w-fit">{project.link}<i class='bi bi-box-arrow-up-right ml-2'></i></Link>
                            <p class="text-ellipsis line-clamp-4">{@html project.description} <Link href="/project/{project.title}">More info</Link></p>
                        </div>
                        <div class="grid gap-2 md:grid-cols-5 grid-cols-8" style="grid-template-rows: min-content;">
                            {#each project.languages as language}
                                <img src="/icons/{languages.filter(lang => lang.name == language)[0].icons[theme]}" class="w-full cursor-pointer drop-shadow-md" alt="{language}">
                                <Tooltip>{language}</Tooltip>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>
    
    <section id="experience" class="p-4 lg:p-10 sm:p-6">
    
        <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
            <h4 class="text-primary-600 font-extrabold">MY EXPERIENCES</h4>
            <div class="rounded-lg md:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300" use:reveal={{ transition: "fly", y:60, duration:300 }}>
                <ol class="relative border-l border-gray-300 dark:border-gray-700 ">
                    <li class="ml-4">
                        <div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">Novembre 2021 - Aujourd'hui</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Équipier McDonald's</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Description</p>
                    </li>
                    <li class="ml-4">
                        <div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">Novembre 2021 - Aujourd'hui</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Équipier McDonald's</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Description</p>
                    </li>
                    <li class="ml-4">
                        <div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">Novembre 2021 - Aujourd'hui</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Équipier McDonald's</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Description</p>
                    </li>
                </ol>
            </div>
        </div>
    </section>

    <section id="contact" class="p-4 lg:p-10 sm:p-6">
    
        <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
            <form on:submit|preventDefault={contact} class="rounded-lg md:p-10 p-6 items-start bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300 flex flex-col gap-5 w-full" use:reveal={{ transition: "fly", duration:200, y:60 }}>
                <h4 class="text-primary-600 font-extrabold">CONTACT ME</h4>
                <div class="w-full">
                    <Label for="email" class="mb-2">E-mail</Label>
                    <Input type="email" id="email" name="email" placeholder="Your e-mail" bind:value={email}/>
                </div>
                <div class="w-full">
                    <Label for="message" class="mb-2">Message</Label>
                    <Textarea id="message" placeholder="Your message" rows="8" name="message" bind:value={message}/>
                </div>
                <Button type="submit" class="w-full">
                    {@html sendEmailButtonContent}
                </Button>
            </form>
        </div>
    
    </section>
</div>

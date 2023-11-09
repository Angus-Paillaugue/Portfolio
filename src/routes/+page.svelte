<script>
    import languages from "$lib/languages";
    import projects from "$lib/projects";
    import { reveal } from 'svelte-reveal';
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    let email;
    let message;
    let contactButton;
    let navLinkUnderline;
    let sectionsList = [];
    let sections = {};
    let navBarToggle = false;
    let isSendingForm = false;

    async function contact(){
        if(isSendingForm) return;
        if(!email || !message) return;
        if(email?.length === 0 || message?.length === 0) return;
        isSendingForm = true;
        contactButton.innerHTML = "<div role='status'><svg aria-hidden='true' class='inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor'/><path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill'/></svg><span class='sr-only'>Loading...</span></div>";
        await fetch('/contact', {
            method: 'POST',
            body: JSON.stringify({ email, message }),
            headers: {'content-type': 'application/json'}
        });
        
        contactButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>`;
        isSendingForm = false;
        setTimeout(() => {
            contactButton.innerHTML = "Submit";
        }, 2000);
    }

    const theme = "light";
    const techStack = [["HTML","TailwindCSS"], ["Javascript", "SvelteKit"], ["MongoDB", "MySQL"]];
    const socials = [{ name:"LinkedIn", link:"https://www.linkedin.com/in/angus-paillaugue/" }, { name:"Github", link:"https://github.com/Angus-Paillaugue" }, { name:"CodeWars", link:"https://www.codewars.com/users/Angus%20Paillaugue" }];
    // TODO : Round codeWars svg logo

    onMount(() => {
        setTimeout(() => {
            sectionsList = document.querySelectorAll("section");
            sectionsList.forEach(function(e) {
                sections[e.id] = e.getBoundingClientRect().top + window.scrollY;
            });
    
            setActiveTab();
            
            window.onscroll = setActiveTab;
            window.onresize = setActiveTab;

            // Scroll to section if in URL
            if(location.href.split("#").length > 0){
                let section = location.href.split("#").at(-1);
                try{
                    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
                }catch(_){}
            }
        }, 0);
    });

    function setActiveTab() {
        let scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight / 4;
            
        for (let i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelectorAll('[data-section]').forEach(el => {
                    el.classList.remove('text-neutral-900');
                });
                let activeSection =  document.querySelector('[data-section*=' + i + ']')
                navLinkUnderline.style.left = activeSection.offsetLeft-8+"px";
                navLinkUnderline.style.width = activeSection.clientWidth+8*2+"px";
                activeSection.classList.add("text-neutral-900");
            }
        }
    }
</script>

<svelte:head>
    <title>Angus's portfolio</title>
    <meta name="description" content="This is the portfolio of Angus Paillaugue">
</svelte:head>


<nav class="fixed w-full z-50 top-4 left-0" in:fly={{y: 50}}>
    <div class="flex flex-row justify-between ml-auto max-lg:mr-4 lg:mx-auto w-fit items-center h-full py-4 px-6 gap-2 rounded-full {!navBarToggle && "shadow-lg bg-neutral-200/50 lg:bg-neutral-200/70 backdrop-blur-md lg:backdrop-blur-lg"} transition-all delay-150">
        <div class="max-lg:hidden relative h-fit">
            <div class="relative grid grid-cols-5 font-medium md:text-base md:gap-8 gap-4 z-[100]">
                <a href="#Home" data-section="Home" class="text-neutral-600 text-center">Home</a>
                <a href="#About" data-section="About" class="text-neutral-600 text-center">About</a>
                <a href="#Work" data-section="Work" class="text-neutral-600 text-center">Work</a>
                <a href="#Experience" data-section="Experience" class="text-neutral-600 text-center">Experience</a>
                <a href="#Contact" data-section="Contact" class="text-neutral-600 text-center">Contact</a>
            </div>
            <span bind:this={navLinkUnderline} class="h-8 -top-1 transition-all bg-white rounded-full absolute duration-75"></span>
        </div>
        <button class="lg:hidden text-gray-500 w-10 h-10 relative focus:outline-none {navBarToggle && "z-50"}" on:click={() => {navBarToggle = !navBarToggle}}>
            <span class="sr-only">Open main menu</span>
            <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {navBarToggle ? "rotate-45" : "-translate-y-1.5"}"></span>
                <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {navBarToggle ? "opacity-0" : "opacity-100"}"></span>
                <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out {navBarToggle ? "-rotate-45" : "translate-y-1.5"}"></span>
            </div>
        </button>
    </div>
</nav>

<div class="fixed top-0 left-0 bg-neutral-200/50 backdrop-blur-lg w-full h-full z-40 transition-all ease-in-out duration-500 p-2 text-xl font-semibold {!navBarToggle && "-translate-x-full"}">
    <div class="h-full w-full relative flex flex-col items-center justify-center gap-8">
        <a href="#Home" on:click={() => {navBarToggle = false;}}>Home</a>
        <a href="#About" on:click={() => {navBarToggle = false;}}>About</a>
        <a href="#Work" on:click={() => {navBarToggle = false;}}>Work</a>
        <a href="#Experience" on:click={() => {navBarToggle = false;}}>Experience</a>
        <a href="#Contact" on:click={() => {navBarToggle = false;}}>Contact</a>
    </div>
</div>


<!-- Home section -->
<section class="p-4 lg:p-10 sm:p-6 min-h-screen flex flex-col md:justify-center items-center relative max-md:pt-16" id="Home">

    <div class="absolute top-0 left-0 w-full h-full duration-[10s]" style="z-index: -20; background: url(/noise.webp) repeat,linear-gradient(0deg,#7ebf92 0%,#469453 100%); background-blend-mode: overlay;-webkit-mask-image: radial-gradient(rgba(0,0,0,.5),transparent 70%);"></div>

    <div class="flex flex-col w-full max-w-4xl mx-auto md:gap-20 gap-5 max-h-full md:max-h-3/4">

        <!-- Short about me and image section -->
        <div class="flex flex-col-reverse mx-auto md:gap-20 gap-5 md:flex-row justify-center items-start md:w-full max-w-sm md:max-w-none">
            <div class="block md:w-3/5 w-full text-start h-full">
                <h1 class="font-bold text-7xl text-center md:text-start" in:fly={{y: 100, delay:50}}>Full stack web dev</h1>
                <p class="mt-4 font-normal text-lg text-center md:text-start" in:fly={{y: 100, delay:100}}>Hi 👋, I'm Angus. A passionate full-stack web developer based in Toulouse, France</p>
                <div class="flex flex-row gap-6 mt-10 max-md:justify-center items-center w-full">
                    <a href="{socials.filter(el => el.name === "Github")[0].link}" target="_blank" class="group" name="GithubProfile" in:fly={{y: 100, delay:120}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 group-hover:text-primary-600 transition-all duration-200 group-hover:scale-105"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                    </a>
                    <a href="{socials.filter(el => el.name === "LinkedIn")[0].link}" target="_blank" class="group" name="LinkedInProfile" in:fly={{y: 100, delay:170}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 group-hover:text-primary-600 transition-all duration-200 group-hover:scale-105"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                    </a>
                </div>
            </div>
    
            <div class="block md:w-2/5 w-full max-w-xs mx-auto" in:fly={{y: 100, delay:250}}>
                <div class="w-full aspect-square bg-no-repeat bg-cover bg-center border-2 border-primary-600 transition-all duration-1000 ease-in-out shadow-2xl" style="border-radius: 28% 72% 22% 78% / 39% 23% 77% 61%; transform: rotate(0deg); animation: morph 8s ease-in-out infinite; background-image: url('angus.webp');"></div>
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
            <p class="text-lg font-bold md:pr-5 md:border-r-2 md:border-b-0 border-b-2 border-text-main md:mr-4" in:fly={{y: 100, delay:250}}>Tech Stack</p>
            <div class="flex flex-row gap-10 flex-wrap md:justify-start justify-center">
                {#each techStack as array, i}
                    <div class="flex flex-row gap-4 languageIcon">
                        {#each array as language (language)}
                            <img src="/icons/{languages.filter(lang => lang.name == language)[0].icons[theme]}" class="md:h-14 h-10 drop-shadow-md" alt="{language}" in:fly|global={{y:100, delay:250+(i*150)}}>
                        {/each}
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
    <div class="absolute top-0 left-0 w-full h-full bg-top" style="z-index: -20;background-image: url(/bg.svg);"></div>


    <div class="absolute top-0 left-0 w-full h-64" style="z-index: -19;background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);"></div>

    <div class="absolute bottom-0 left-0 w-full h-64" style="z-index: -19;background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);"></div>

    
    <section id="About" class="p-4 lg:p-10 sm:p-6 flex flex-col lg:justify-center items-center">

        <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
            
            <div class="grid lg:grid-cols-2 grid-cols-1 items-center md:gap-10 gap-0 w-full mx-auto rounded-lg lg:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300" use:reveal={{ transition: "fly", duration:200, y:60 }}>
                <div class="w-full lg:w-auto h-full lg:aspect-auto aspect-square relative lg:-mt-0 -mt-20 lg:-ml-20 -ml-0 rounded-lg bg-cover bg-no-repeat bg-center" style="background-image: url(aboutImg.webp);">
                    <div class="absolute top-0 left-0 h-full w-full z-10 opacity-70 rounded-2xl" style="background: url(noise.webp) repeat;background-blend-mode: overlay;"></div>
                </div>
                <div class="w-full flex flex-col gap-4">
                    <h4 class="text-primary-600 font-bold">ABOUT ME</h4>
                    <h4 class="font-bold">A dedicated Full-stack Developer based in Toulouse, France 📍</h4>
                    <p class="leading-6">As a Junior Full-Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, Tailwind, SvelteKit and MongoDB. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                    <a href="myCv.pdf" target="_blank" class="button-primary w-fit group">
                        My CV

                        <svg class="relative w-6 h-6 transition-all -mr-2 group-hover:translate-x-1.5 duration-300" viewBox="0 0 16 16" fill="none">
                            <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                            <path class="transition-all group-hover:[stroke-dashoffset:20] [stroke-dasharray:10] [stroke-dashoffset:10] duration-300" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
                        </svg>
                    </a>
                    <div class="flex flex-row flex-wrap gap-5">
                        {#each socials as social}
                            <a href="{social.link}" target="_blank" class="languageIcon duration-200">
                                <img src="/icons/{languages.filter(lang => lang.name == social.name)[0].icons[theme]}" class="md:h-14 h-10" alt="{social.name}">
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    <section id="Work" class="p-4 lg:p-20 sm:p-6">
        <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
            <h4 class="text-primary-600 font-extrabold">MY PROJECTS</h4>
    
            {#each projects as project, index}
                <div class="{index % 2 == 0 ? "row" : "row-reverse"} grid lg:grid-cols-5 grid-cols-1 lg:grid-flow-col rounded-2xl lg:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300 project" use:reveal={{ transition: "fly", duration:200, y:60 }}>
                    <div class="rounded-2xl border border-gray-300 lg:col-span-3 {index % 2 == 0 ? "lg:-mt-0 -mt-9 lg:-ml-20 -ml-9 lg:-mr-0 -mr-9 lg:col-start-1" : "lg:-mt-0 -mt-9 lg:-ml-0 -ml-9 lg:-mr-20 -mr-9 lg:col-start-3"}">
                        <img src="/{project.imgSrc}" alt="{project.title}" class="rounded-2xl w-full h-full">
                    </div>
                    
                    <div class="flex flex-col w-full gap-4 justify-between lg:col-span-2 {index % 2 == 0 ? "lg:pl-4 lg:col-start-4" :"lg:pr-4 lg:col-start-1"}">
                        <div class="flex flex-col w-full gap-4">
                            <a href="/project/{project.title}" class="w-fit link break-all">
                                <h4 class="font-bold">{project.title}</h4>
                            </a>

                            <a href="{project.link}" target="_blank" class="w-fit link">
                                {project.link}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 inline-block ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                            </a>

                            <p class="text-ellipsis line-clamp-4">{@html project.description}</p>

                            <!-- <a href="/project/{project.title}" class="button-primary-animation small group w-fit">
                                More info
                                <svg class="w-5 h-5 absolute right-0 flex items-center justify-start duration-300 transform translate-x-full group-hover:-translate-x-2 ease" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a> -->
                            <a href="/project/{project.title}" class="button-primary small group w-fit">
                                <span class="transition-all duration-200 group-hover:-translate-y-[110%]">
                                    More info
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all duration-200 group-hover:top-1/2 group-hover:-translate-y-1/2 absolute top-full left-1/2 -translate-x-1/2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                                </svg>
                            </a>
                        </div>
                        <div class="grid gap-2" style="grid-template-rows: min-content; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));">
                            {#each project.languages as language}
                                <img src="/icons/{languages.filter(lang => lang.name == language)[0].icons[theme]}" class="languageIcon" alt="{language}">
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>
    
    <section id="Experience" class="p-4 lg:p-10 sm:p-6">
    
        <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
            <h4 class="text-primary-600 font-extrabold">MY EXPERIENCES</h4>
            <div class="rounded-lg md:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300" use:reveal={{ transition: "fly", y:60, duration:300 }}>
                <ol class="relative border-l border-gray-300 dark:border-gray-700 ">
                    <li class="ml-4">
                        <div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">November 2021 - Today</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">McDonald's crew member</h3>
                        <!-- <p class="text-base font-normal text-gray-500 dark:text-gray-400">Description</p> -->
                    </li>
                </ol>
            </div>
        </div>
    </section>

    <section id="Contact" class="p-4 lg:p-10 sm:p-6">
    
        <div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10">
            <form on:submit|preventDefault={contact} class="rounded-lg md:p-10 p-6 items-start bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300 flex flex-col gap-5 w-full" use:reveal={{ transition: "fly", duration:200, y:60 }}>
                <h4 class="text-primary-600 font-extrabold">CONTACT ME</h4>
                <div class="w-full">
                    <label for="email" class="mb-2">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Your e-mail" class="border text-sm rounded-lg block w-full p-2.5 bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 placeholder-neutral-400 dark:text-white focus:ring-primary-500 focus:border-primary-500 focus:outline-none outline-none transition-all caret-primary-600 focus:ring-offset-white focus:ring-offset-2 focus:ring-2" bind:value={email}/>
                </div>
                <div class="w-full">
                    <label for="message" class="mb-2">Message</label>
                    <textarea id="message" placeholder="Your message" rows="8" name="message" class="border text-sm rounded-lg block w-full p-2.5 bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 placeholder-neutral-400 dark:text-white focus:ring-primary-500 focus:border-primary-500 focus:outline-none outline-none transition-all caret-primary-600 focus:ring-offset-white focus:ring-offset-2 focus:ring-2" bind:value={message}/>
                </div>
                <button type="submit" class="button-primary w-full" disabled="{isSendingForm}" bind:this={contactButton}>
                    Submit
                </button>
            </form>
        </div>
    
    </section>
</div>

{#if navBarToggle}
    <style>
        body {
            height: 100dvh;
            overflow-y: hidden;
        }
    </style>
{/if}
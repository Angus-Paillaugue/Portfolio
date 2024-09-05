<script>
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';

	const { data } = $props();
	const { projects } = data;
</script>

<svelte:head>
	<title>Home | Angus Paillaugue</title>
</svelte:head>

<Hero />

<hr />

<About />

<hr />

<Projects {projects} />

<hr />

<Contact />

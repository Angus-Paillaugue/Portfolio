<script>
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import { experience } from '$conf';

	const { data } = $props();
	const { projects } = data;
</script>

<svelte:head>
	<title>Home | Angus Paillaugue</title>
</svelte:head>

<Hero />

<hr />

<About {experience} />

<hr />

<Projects {projects} />

<hr />

<Contact />

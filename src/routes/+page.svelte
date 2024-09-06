<script>
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import { experience } from '$conf';
	import { _ } from 'svelte-i18n';
	import { sections } from '$lib/stores';

	const { data } = $props();

	const { projects } = data;

	$sections = [
		{ id: 'home', label: $_('homePage.hero') },
		{ id: 'about', label: $_('homePage.about') },
		{ id: 'projects', label: $_('homePage.projects') },
		{ id: 'contact', label: $_('homePage.contact') }
	];
</script>

<svelte:head>
	<title>{$_('homePage.title')} | Angus Paillaugue</title>
</svelte:head>

<Hero />

<hr />

<About {experience} />

<hr />

<Projects {projects} />

<hr />

<Contact />

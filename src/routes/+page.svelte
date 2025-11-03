<script>
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import { experience } from '$conf';
	import { t } from '$lib/i18n';
	import { sections } from '$lib/stores';

	const { data } = $props();

	const { projects } = data;

	$sections = [
		{ id: 'home', label: $t('sidebar.elements.hero') },
		{ id: 'about', label: $t('sidebar.elements.about') },
		{ id: 'projects', label: $t('sidebar.elements.projects') },
		{ id: 'contact', label: $t('sidebar.elements.contact') }
	];
</script>

<svelte:head>
	<title>{$t('home.title')} | Angus Paillaugue</title>
</svelte:head>

<Hero />

<hr />

<About {experience} />

<hr />

<Projects {projects} />

<hr />

<Contact />

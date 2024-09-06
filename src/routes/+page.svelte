<script>
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';

	const { data } = $props();
	const { projects } = data;
	const jobs = [
		{
			start: 'August 2024',
			end: 'Today',
			name: 'Trainer at McDonald\'s'
		},
		{
			start: 'November 2021',
			end: 'August 2024',
			name: 'Crew member McDonald\'s'
		}
	]
</script>

<svelte:head>
	<title>Home | Angus Paillaugue</title>
</svelte:head>

<Hero />

<hr />

<About {jobs} />

<hr />

<Projects {projects} />

<hr />

<Contact />

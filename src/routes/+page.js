import { projects } from '$conf';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const fetchedProjects = import.meta.glob('../lib/projects/**/*', { eager: true });

	const meta = {};

	for (const [path, project] of Object.entries(fetchedProjects)) {
		const locale = path.slice(16).split('/')[0];
		meta[locale] = meta[locale] || [];
		meta[locale].push(project.metadata);
	}

	for (const locale in meta) {
		meta[locale] = meta[locale].sort((a, b) => projects.indexOf(a.name) - projects.indexOf(b.name));
	}

	return { projects: meta };
}

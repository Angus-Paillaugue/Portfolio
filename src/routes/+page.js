import { projects } from "$conf";

/** @type {import('./$types').PageLoad} */
export async function load() {
	const fetchedProjects = import.meta.glob('../lib/projects/*', { eager: true });
	const meta = [];

	for (const project of projects) {
		const associatedProject = Object.values(fetchedProjects).find((projectPath) =>
			projectPath.metadata.name ===project
		)?.metadata;
		if(!associatedProject) {
			console.error(`No metadata found for project ${project}`);
			continue;
		}
		meta.push(associatedProject);
	}

	return { projects: meta };
}

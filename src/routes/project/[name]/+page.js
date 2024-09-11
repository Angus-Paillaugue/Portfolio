import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { name } = params;
	const pages = import.meta.glob(`../../../lib/projects/**/*`, { eager: true });

	let component = {};

	for (const [path, project] of Object.entries(pages)) {
		if (project.metadata.name === name) {
			const locale = path.slice(22).split('/')[0];
			component[locale] = project;
		}
	}

	if (!component) throw new error(404, "Oh no, that project doesn't exist!");
	return { component };
}

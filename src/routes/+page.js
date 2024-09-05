/** @type {import('./$types').PageLoad} */
export async function load() {
	const projects = import.meta.glob('../lib/projects/*', { eager: true });
	const meta = [];

	for (const [_path, data] of Object.entries(projects)) {
		meta.push(data.metadata);
	}
	meta.sort((a, b) => a.index - b.index);

	return { projects: meta };
}

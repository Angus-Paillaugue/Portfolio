import projects from "$lib/projects"
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { name } = params;

    const project = projects.filter(project => project.title == name)[0]

    if(!project) throw error(403, { message:`No project by the name of '${name}'`, link:`/`});
    return { project };
};
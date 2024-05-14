import projects from "$lib/projects"
import { error } from '@sveltejs/kit'

export async function load({ params }) {
    const { name } = params;

    const project = projects.find(project => project.title.split(' ').join('-').toLowerCase() === name);
    if(!project) throw error(403, { message:`No project by the name of '${name}'`, link:`/`});

    return { project };
};

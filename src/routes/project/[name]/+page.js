export async function load({ data }) {
    const component = await import(`../../../lib/projects/${data.project.slug}.md`);

    return { component: component.default, ...data }
};

export async function load({ params, data }) {
    const { name } = params;
    
    const component = await import(`../../../lib/projects/${name}.md`);
    console.log(component);
    
    return { component: component.default, ...data }
};
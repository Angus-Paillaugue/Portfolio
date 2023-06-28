import { p as projects } from "../../../../chunks/index2.js";
import { e as error } from "../../../../chunks/index.js";
async function load({ params }) {
  const { name } = params;
  const project = projects.filter((project2) => project2.title == name)[0];
  if (!project)
    throw error(403, { message: `No project by the name of '${name}'`, link: `/` });
  return { project };
}
export {
  load
};

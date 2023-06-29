import { p as projects } from './index2-f0bc490d.js';
import { e as error } from './index-78bfc04e.js';

const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load$1({ params, data }) {
  const { name } = params;
  const component = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/projects/Bionic reading.md": () => import('./Bionic reading-5e3ba6c7.js'), "../../../lib/projects/Kagépa app.md": () => import('./Kagépa app-8d49c0a4.js'), "../../../lib/projects/Tools.md": () => import('./Tools-da54f42d.js') }), `../../../lib/projects/${name}.md`);
  return { component: component.default, ...data };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

async function load({ params }) {
  const { name } = params;
  const project = projects.filter((project2) => project2.title == name)[0];
  if (!project)
    throw error(403, { message: `No project by the name of '${name}'`, link: `/` });
  return { project };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-6334d406.js')).default;
const universal_id = "src/routes/project/[name]/+page.js";
const server_id = "src/routes/project/[name]/+page.server.js";
const imports = ["_app/immutable/nodes/3.9f5beeea.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/scheduler.f7b53a95.js","_app/immutable/chunks/index.67511c5b.js","_app/immutable/chunks/Tooltip.106ca08c.js"];
const stylesheets = ["_app/immutable/assets/Tooltip.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-c293b825.js.map

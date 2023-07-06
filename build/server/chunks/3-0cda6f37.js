import { p as projects } from './index2-f0bc490d.js';
import { e as error } from './index-2b68e648.js';

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
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6334d406.js')).default;
const universal_id = "src/routes/project/[name]/+page.js";
const server_id = "src/routes/project/[name]/+page.server.js";
const imports = ["_app/immutable/nodes/3.b9bb70a3.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.0b304ea0.js","_app/immutable/chunks/index.c9e9b062.js","_app/immutable/chunks/Tooltip.868c04aa.js"];
const stylesheets = ["_app/immutable/assets/Tooltip.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-0cda6f37.js.map

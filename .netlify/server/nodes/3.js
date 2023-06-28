import * as server from '../entries/pages/project/_name_/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/project/_name_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/project/[name]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.8af0b3bf.js","_app/immutable/chunks/scheduler.c9bbcf4d.js","_app/immutable/chunks/index.01144595.js","_app/immutable/chunks/Tooltip.ae9b6c1e.js"];
export const stylesheets = ["_app/immutable/assets/Tooltip.1d121e74.css"];
export const fonts = [];

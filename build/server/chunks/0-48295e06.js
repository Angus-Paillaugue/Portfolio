function load({ url }) {
  return {
    url: url.pathname
  };
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-2be07c30.js')).default;
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/nodes/0.8fa8aad4.js","_app/immutable/chunks/scheduler.0b304ea0.js","_app/immutable/chunks/index.c9e9b062.js"];
const stylesheets = ["_app/immutable/assets/0.6c73ad1a.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-48295e06.js.map

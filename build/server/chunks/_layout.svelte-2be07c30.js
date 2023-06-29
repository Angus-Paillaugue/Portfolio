import { c as create_ssr_component } from './ssr-c35b495b.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-2be07c30.js.map

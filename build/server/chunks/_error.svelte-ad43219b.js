import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, g as getContext } from './ssr-c35b495b.js';

const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ccuw5n_START -->${$$result.title = `<title>${escape($page.status || "404")} Error</title>`, ""}<!-- HEAD_svelte-ccuw5n_END -->`, ""} <div class="mx-auto max-w-screen-md text-center py-8 px-4 lg:py-16 lg:px-6"><h1 class="mb-6 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">${escape($page.status || "404")}</h1> <p class="mb-6 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">${escape($page.error.message || "Page not found")}</p> <a${add_attribute("href", $page.error.link || "/", 0)} class="button-primary w-fit mx-auto hover:gap-4">${escape($page.error.buttonText || "Back to Homepage")} <i class="bi bi-arrow-right text-xl font-bold transition-all"></i></a></div>`;
});

export { Error$1 as default };
//# sourceMappingURL=_error.svelte-ad43219b.js.map

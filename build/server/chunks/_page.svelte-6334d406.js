import { c as create_ssr_component, e as escape, v as validate_component, f as each, m as missing_component, d as add_attribute } from './ssr-c35b495b.js';
import { l as languages, T as Tooltip } from './Tooltip-aa396bc0.js';
import { L as Link } from './Link-3b0975ea.js';
import '@popperjs/core';
import 'tailwind-merge';

const theme = "light";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const project = data.project;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<button onclick="history.back()" class="fixed top-6 left-6 flex flex-col justify-center items-center bg-gray-200 rounded-full w-10 h-10 hover:scale-110 transition-all" data-svelte-h="svelte-1916on"><i class="bi bi-arrow-left-short text-4xl"></i></button> <section id="work" class="p-4 lg:p-10 sm:p-6"><div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10"><div class="flex flex-col rounded-2xl lg:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300 gap-6"><div class="grid grid-cols-1 lg:grid-cols-7 lg:gap-20 gap-5"><div class="rounded-2xl border border-gray-300 lg:-mt-0 -mt-9 lg:-ml-20 -ml-9 lg:-mr-0 -mr-9 col-span-1 lg:col-span-4"><img src="${"/" + escape(project.imgSrc, true)}" alt="${escape(project.title, true) + " img"}" class="rounded-2xl w-full h-full"></div> <div class="flex flex-col w-full gap-4 col-span-1 lg:col-span-3"><h4 class="font-bold">${escape(project.title)}</h4> ${validate_component(Link, "Link").$$render($$result, { href: project.link, target: "_blank" }, {}, {
    default: () => {
      return `${escape(project.link)}<i class="bi bi-box-arrow-up-right ml-2"></i>`;
    }
  })} <div class="flex flex-row gap-2 flex-wrap">${each(project.languages, (language) => {
    return `<img src="${"/icons/" + escape(languages.filter((lang) => lang.name == language)[0].icons[theme], true)}" class="lg:h-14 h-10 cursor-pointer drop-shadow-md"${add_attribute("alt", language, 0)}> ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(language)}`;
      }
    })}`;
  })}</div></div></div> ${validate_component(data.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6334d406.js.map

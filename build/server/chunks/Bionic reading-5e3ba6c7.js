import { c as create_ssr_component, v as validate_component } from './ssr-c35b495b.js';
import { L as Link } from './Link-3b0975ea.js';
import 'tailwind-merge';

const Bionicu20reading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>This chrome extension is based on ${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: "https://bionic-reading.com/",
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `bionic reading`;
      }
    }
  )} (a method that helps reading faster). Downloading this extension will, on all webpages, highlight letters on the bionic reading principle.</p>`;
});

export { Bionicu20reading as default };
//# sourceMappingURL=Bionic reading-5e3ba6c7.js.map

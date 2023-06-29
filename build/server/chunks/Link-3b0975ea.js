import { c as create_ssr_component, h as compute_rest_props, i as spread, j as escape_object, k as escape_attribute_value } from './ssr-c35b495b.js';
import { twMerge } from 'tailwind-merge';

const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "linkClasses"]);
  let { href = "#" } = $$props;
  let { linkClasses = "link" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.linkClasses === void 0 && $$bindings.linkClasses && linkClasses !== void 0)
    $$bindings.linkClasses(linkClasses);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(linkClasses, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});

export { Link as L };
//# sourceMappingURL=Link-3b0975ea.js.map

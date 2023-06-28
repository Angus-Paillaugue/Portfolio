import { c as create_ssr_component, f as compute_rest_props, h as spread, i as escape_object, j as escape_attribute_value, d as add_attribute, g as getContext, v as validate_component, e as escape, k as compute_slots, l as each } from "../../chunks/ssr.js";
import { i as is_void, l as languages, T as Tooltip, L as Link } from "../../chunks/Tooltip.js";
import { p as projects } from "../../chunks/index2.js";
import { twMerge } from "tailwind-merge";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["colorType", "classes"]);
  let { colorType = "default" } = $$props;
  let { classes = colorType == "gray" ? "button-border-gray hover:gap-4 w-fit" : colorType == "red" ? "button-red hover:gap-4 w-fit" : "button-primary hover:gap-4 w-fit" } = $$props;
  if ($$props.colorType === void 0 && $$bindings.colorType && colorType !== void 0)
    $$bindings.colorType(colorType);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `${$$restProps.href ? `<a${spread(
    [
      escape_object($$restProps),
      {
        href: escape_attribute_value($$restProps.href)
      },
      {
        class: escape_attribute_value(twMerge(classes, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(classes, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);
  return `${show ? ` <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`} `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0)
    $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size] || inputPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-l-lg last:rounded-r-lg",
        group && "border-l-0 first:border-l last:border-r",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " right-0 pr-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "wrappedClass", "unWrappedClass"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = void 0 } = $$props;
  let { wrappedClass = "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0" } = $$props;
  let { unWrappedClass = "p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => twMerge(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.wrappedClass === void 0 && $$bindings.wrappedClass && wrappedClass !== void 0)
    $$bindings.wrappedClass(wrappedClass);
  if ($$props.unWrappedClass === void 0 && $$bindings.unWrappedClass && unWrappedClass !== void 0)
    $$bindings.unWrappedClass(unWrappedClass);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = twMerge(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass);
  innerWrapperClass = twMerge("py-2 px-4 bg-white dark:bg-gray-800", $$slots.footer ? "rounded-b-lg" : "", $$slots.header ? "rounded-t-lg" : "");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${escape(value || "")}</textarea>`;
        }
      })} ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })} `;
});
const theme = "light";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let message;
  let sendEmailButtonContent = "Submit";
  const techStack = ["HTML", "Javascript", "TailwindCSS", "Svelte", "MongoDB"];
  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/angus-paillaugue-573aa91a5/"
    },
    {
      name: "Github",
      link: "https://github.com/mere-patrie"
    },
    {
      name: "CodeWars",
      link: "https://www.codewars.com/users/mere-patrie"
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="p-4 lg:p-10 sm:p-6 min-h-screen flex flex-col md:justify-center items-center relative"><div class="absolute top-0 left-0 w-full h-full duration-[10s]" style="z-index: -20; background: url(https://astro.build/assets/noise.webp) repeat,linear-gradient(0deg,#FFBCAD 0%,#EF562F 100%); background-blend-mode: overlay;-webkit-mask-image: radial-gradient(rgba(0,0,0,.5),transparent 70%);"></div> <div class="flex flex-col w-full max-w-4xl mx-auto md:gap-20 gap-5 max-h-full md:max-h-3/4"> <div class="flex flex-col-reverse mx-auto md:gap-20 gap-5 md:flex-row justify-center items-start md:w-full max-w-sm md:max-w-none" data-svelte-h="svelte-atzhrl"><div class="block md:w-3/5 w-full text-start h-full"><h1 class="font-bold text-7xl text-center md:text-start">Full stack web dev</h1> <p class="mt-4 font-normal text-lg text-center md:text-start">Hi👋, I&#39;m Angus. A passionate full-stack web developer based in Toulouse, France</p></div> <div class="block md:w-2/5 w-full max-w-xs mx-auto"><div class="w-full aspect-square bg-no-repeat bg-cover bg-center border-2 border-primary-600 transition-all duration-1000 ease-in-out shadow-2xl" style="border-radius: 28% 72% 22% 78% / 39% 23% 77% 61%; transform: rotate(0deg); animation: morph 8s ease-in-out infinite; background-image: url('angus.jpg');"></div></div>  <style>@keyframes morph {
                    0% {
                        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                    }
                    50% {
                        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
                    }
                    100% {
                        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                    }
                }</style></div>  <div class="flex md:flex-row flex-col mx-auto gap-5 md:justify-start justify-center items-center md:w-full max-w-sm md:max-w-none flex-wrap"><p class="text-lg font-bold md:pr-5 md:border-r-2 md:border-b-0 border-b-2 border-text-main md:mr-4" data-svelte-h="svelte-ovfq3">Tech Stack</p> <div class="flex flex-row gap-5 flex-wrap md:justify-start justify-center">${each(techStack, (language) => {
      return `<div><img src="${"/icons/" + escape(languages.filter((lang) => lang.name == language)[0].icons[theme], true)}" class="md:h-20 h-14 cursor-pointer drop-shadow-xl"${add_attribute("alt", language, 0)}> ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(language)}`;
        }
      })} </div>`;
    })}</div></div></div></section> <div class="relative"><div class="absolute top-0 left-0 w-full h-full bg-top" style="z-index: -20;background-size: 20px 20px; background-image: linear-gradient(to right, rgb(209, 213, 219, .4) 1px, transparent 1px), linear-gradient(rgba(209, 213, 219, .4) 1px, transparent 1px);image-rendering: pixelated;"></div> <div class="absolute top-0 left-0 w-full h-64" style="z-index: -19;background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);"></div> <div class="absolute bottom-0 left-0 w-full h-64" style="z-index: -19;background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);"></div> <section id="about" class="p-4 lg:p-10 sm:p-6 flex flex-col lg:justify-center items-center"><div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10"><div class="grid lg:grid-cols-2 grid-cols-1 items-center md:gap-10 gap-0 w-full max-w-5xl mx-auto rounded-lg lg:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300"><div class="h-full relative lg:-mt-0 -mt-9 lg:-ml-20 -ml-9 lg:-mr-0 -mr-9" data-svelte-h="svelte-dm12es"><div class="absolute top-0 left-0 h-full w-full z-10 opacity-70 rounded-2xl" style="background: url(https://astro.build/assets/noise.webp) repeat;background-blend-mode: overlay;"></div> <img src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="Web developer" class="rounded-2xl w-full h-full"></div> <div class="w-full flex flex-col gap-3"><h4 class="text-primary-600 font-extrabold" data-svelte-h="svelte-xs3dk8">ABOUT ME</h4> <h4 class="font-bold" data-svelte-h="svelte-f4a6yh">A dedicated Full-stack Developer based in Toulouse, France 📍</h4> <p class="leading-6" data-svelte-h="svelte-l2alcg">As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p> ${validate_component(Button, "Button").$$render($$result, { href: "myCv.pdf", target: "_blank" }, {}, {
      default: () => {
        return `My CV`;
      }
    })} <div class="flex flex-row flex-wrap gap-5">${each(socials, (social) => {
      return `<a${add_attribute("href", social.link, 0)} target="_blank"><img src="${"/icons/" + escape(languages.filter((lang) => lang.name == social.name)[0].icons[theme], true)}" class="md:h-14 h-10 cursor-pointer drop-shadow-md"${add_attribute("alt", social.name, 0)}> </a>`;
    })}</div></div></div></div></section> <section id="work" class="p-4 lg:p-10 sm:p-6"><div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10"><h4 class="text-primary-600 font-extrabold" data-svelte-h="svelte-1z1ozd">MY PROJECTS</h4> ${each(projects, (project, index) => {
      return `<a href="${"/project/" + escape(project.title, true)}" class="${"flex md:flex-" + escape(index % 2 == 0 ? "row" : "row-reverse", true) + " flex-col md:gap-20 gap-5 rounded-2xl md:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300"}"><div class="${"rounded-2xl border border-gray-300 " + escape(
        index % 2 == 0 ? "lg:-mt-0 -mt-9 lg:-ml-20 -ml-9 lg:-mr-0 -mr-9" : "lg:-mt-0 -mt-9 lg:-ml-0 -ml-9 lg:-mr-20 -mr-9",
        true
      )}"><img src="${"/" + escape(project.imgSrc, true)}" alt="${escape(project.title, true) + " img"}" class="rounded-2xl w-full h-full"></div> <div class="flex flex-col w-full gap-4"><h4 class="font-bold">${escape(project.title)}</h4> ${validate_component(Link, "Link").$$render($$result, { href: project.link, target: "_blank" }, {}, {
        default: () => {
          return `${escape(project.link)}<i class="bi bi-box-arrow-up-right ml-2"></i>`;
        }
      })} <p><!-- HTML_TAG_START -->${project.description}<!-- HTML_TAG_END --></p> <div class="flex flex-row gap-2 flex-wrap">${each(project.languages, (language) => {
        return `<img src="${"/icons/" + escape(languages.filter((lang) => lang.name == language)[0].icons[theme], true)}" class="md:h-14 h-10 cursor-pointer drop-shadow-md"${add_attribute("alt", language, 0)}> ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(language)}`;
          }
        })}`;
      })} </div></div> </a>`;
    })}</div></section> <section id="experience" class="p-4 lg:p-10 sm:p-6" data-svelte-h="svelte-1mt5w1a"><div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10"><h4 class="text-primary-600 font-extrabold">MY EXPERIENCES</h4> <div class="rounded-lg md:p-10 p-6 bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300"><ol class="relative border-l border-gray-300 dark:border-gray-700 "><li class="ml-4"><div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">Novembre 2021 - Aujourd&#39;hui</time> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Équipier McDonald&#39;s</h3> <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Description</p></li> <li class="ml-4"><div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">Novembre 2021 - Aujourd&#39;hui</time> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Équipier McDonald&#39;s</h3> <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Description</p></li> <li class="ml-4"><div class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-text-main dark:text-gray-500">Novembre 2021 - Aujourd&#39;hui</time> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Équipier McDonald&#39;s</h3> <p class="text-base font-normal text-gray-500 dark:text-gray-400">Description</p></li></ol></div></div></section> <section id="contact" class="p-4 lg:p-10 sm:p-6"><div class="w-full max-w-4xl mx-auto py-24 flex flex-col gap-10"><form class="rounded-lg md:p-10 p-6 items-start bg-white dark:bg-gray-700 text-start transition-all border dark:border-gray-600 border-gray-300 flex flex-col gap-5 w-full"><h4 class="text-primary-600 font-extrabold" data-svelte-h="svelte-87kmi7">CONTACT ME</h4> <div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
      default: () => {
        return `E-mail`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "Your e-mail",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "message", class: "mb-2" }, {}, {
      default: () => {
        return `Message`;
      }
    })} ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        id: "message",
        placeholder: "Your message",
        rows: "8",
        name: "message",
        value: message
      },
      {
        value: ($$value) => {
          message = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${sendEmailButtonContent}<!-- HTML_TAG_END -->`;
      }
    })}</form></div></section></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

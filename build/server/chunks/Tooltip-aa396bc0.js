import { c as create_ssr_component, h as compute_rest_props, v as validate_component, d as add_attribute, s as setContext, i as spread, j as escape_object, k as escape_attribute_value, o as get_current_component, n as noop } from './ssr-c35b495b.js';
import { createPopper } from '@popperjs/core';
import { twMerge } from 'tailwind-merge';

const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const languages = [
  {
    name: "Ableton",
    icons: {
      light: "Ableton-Light.svg",
      dark: "Ableton-Dark.svg"
    }
  },
  {
    name: "ActivityPub",
    icons: {
      light: "ActivityPub-Light.svg",
      dark: "ActivityPub-Dark.svg"
    }
  },
  {
    name: "Actix",
    icons: {
      light: "Actix-Light.svg",
      dark: "Actix-Dark.svg"
    }
  },
  {
    name: "Adonis",
    icons: {
      light: "Adonis.svg",
      dark: "Adonis.svg"
    }
  },
  {
    name: "AfterEffects",
    icons: {
      light: "AfterEffects.svg",
      dark: "AfterEffects.svg"
    }
  },
  {
    name: "AiScript",
    icons: {
      light: "AiScript-Light.svg",
      dark: "AiScript-Dark.svg"
    }
  },
  {
    name: "AlpineJS",
    icons: {
      light: "AlpineJS-Light.svg",
      dark: "AlpineJS-Dark.svg"
    }
  },
  {
    name: "AndroidStudio",
    icons: {
      light: "AndroidStudio-Light.svg",
      dark: "AndroidStudio-Dark.svg"
    }
  },
  {
    name: "Angular",
    icons: {
      light: "Angular-Light.svg",
      dark: "Angular-Dark.svg"
    }
  },
  {
    name: "Ansible",
    icons: {
      light: "Ansible.svg",
      dark: "Ansible.svg"
    }
  },
  {
    name: "Apollo",
    icons: {
      light: "Apollo.svg",
      dark: "Apollo.svg"
    }
  },
  {
    name: "Appwrite",
    icons: {
      light: "Appwrite.svg",
      dark: "Appwrite.svg"
    }
  },
  {
    name: "Arduino",
    icons: {
      light: "Arduino.svg",
      dark: "Arduino.svg"
    }
  },
  {
    name: "Astro",
    icons: {
      light: "Astro.svg",
      dark: "Astro.svg"
    }
  },
  {
    name: "Atom",
    icons: {
      light: "Atom.svg",
      dark: "Atom.svg"
    }
  },
  {
    name: "Audition",
    icons: {
      light: "Audition.svg",
      dark: "Audition.svg"
    }
  },
  {
    name: "AutoCAD",
    icons: {
      light: "AutoCAD-Light.svg",
      dark: "AutoCAD-Dark.svg"
    }
  },
  {
    name: "AWS",
    icons: {
      light: "AWS-Light.svg",
      dark: "AWS-Dark.svg"
    }
  },
  {
    name: "Azul",
    icons: {
      light: "Azul.svg",
      dark: "Azul.svg"
    }
  },
  {
    name: "Azure",
    icons: {
      light: "Azure-Light.svg",
      dark: "Azure-Dark.svg"
    }
  },
  {
    name: "Babel",
    icons: {
      light: "Babel.svg",
      dark: "Babel.svg"
    }
  },
  {
    name: "Bash",
    icons: {
      light: "Bash-Light.svg",
      dark: "Bash-Dark.svg"
    }
  },
  {
    name: "Bevy",
    icons: {
      light: "Bevy-Light.svg",
      dark: "Bevy-Dark.svg"
    }
  },
  {
    name: "Blender",
    icons: {
      light: "Blender-Light.svg",
      dark: "Blender-Dark.svg"
    }
  },
  {
    name: "Bootstrap",
    icons: {
      light: "Bootstrap.svg",
      dark: "Bootstrap.svg"
    }
  },
  {
    name: "BSD",
    icons: {
      light: "BSD-Light.svg",
      dark: "BSD-Dark.svg"
    }
  },
  {
    name: "C",
    icons: {
      light: "C.svg",
      dark: "C.svg"
    }
  },
  {
    name: "Cassandra",
    icons: {
      light: "Cassandra-Light.svg",
      dark: "Cassandra-Dark.svg"
    }
  },
  {
    name: "Clojure",
    icons: {
      light: "Clojure-Light.svg",
      dark: "Clojure-Dark.svg"
    }
  },
  {
    name: "Cloudflare",
    icons: {
      light: "Cloudflare-Light.svg",
      dark: "Cloudflare-Dark.svg"
    }
  },
  {
    name: "CMake",
    icons: {
      light: "CMake-Light.svg",
      dark: "CMake-Dark.svg"
    }
  },
  {
    name: "CodePen",
    icons: {
      light: "CodePen-Light.svg",
      dark: "CodePen-Dark.svg"
    }
  },
  {
    name: "CodeWars",
    icons: {
      light: "CodeWars.svg",
      dark: "CodeWars.svg"
    }
  },
  {
    name: "CoffeeScript",
    icons: {
      light: "CoffeeScript-Light.svg",
      dark: "CoffeeScript-Dark.svg"
    }
  },
  {
    name: "C++",
    icons: {
      light: "C++.svg",
      dark: "C++.svg"
    }
  },
  {
    name: "Crystal",
    icons: {
      light: "Crystal-Light.svg",
      dark: "Crystal-Dark.svg"
    }
  },
  {
    name: "CS",
    icons: {
      light: "CS.svg",
      dark: "CS.svg"
    }
  },
  {
    name: "CSS",
    icons: {
      light: "CSS.svg",
      dark: "CSS.svg"
    }
  },
  {
    name: "D3",
    icons: {
      light: "D3-Light.svg",
      dark: "D3-Dark.svg"
    }
  },
  {
    name: "Dart",
    icons: {
      light: "Dart-Light.svg",
      dark: "Dart-Dark.svg"
    }
  },
  {
    name: "DENO",
    icons: {
      light: "DENO-Light.svg",
      dark: "DENO-Dark.svg"
    }
  },
  {
    name: "DevTo",
    icons: {
      light: "DevTo-Light.svg",
      dark: "DevTo-Dark.svg"
    }
  },
  {
    name: "Discord",
    icons: {
      light: "Discord.svg",
      dark: "Discord.svg"
    }
  },
  {
    name: "DiscordBots",
    icons: {
      light: "DiscordBots.svg",
      dark: "DiscordBots.svg"
    }
  },
  {
    name: "Django",
    icons: {
      light: "Django.svg",
      dark: "Django.svg"
    }
  },
  {
    name: "Docker",
    icons: {
      light: "Docker.svg",
      dark: "Docker.svg"
    }
  },
  {
    name: "DotNet",
    icons: {
      light: "DotNet.svg",
      dark: "DotNet.svg"
    }
  },
  {
    name: "DynamoDB",
    icons: {
      light: "DynamoDB-Light.svg",
      dark: "DynamoDB-Dark.svg"
    }
  },
  {
    name: "Eclipse",
    icons: {
      light: "Eclipse-Light.svg",
      dark: "Eclipse-Dark.svg"
    }
  },
  {
    name: "Electron",
    icons: {
      light: "Electron.svg",
      dark: "Electron.svg"
    }
  },
  {
    name: "Elixir",
    icons: {
      light: "Elixir-Light.svg",
      dark: "Elixir-Dark.svg"
    }
  },
  {
    name: "Emacs",
    icons: {
      light: "Emacs.svg",
      dark: "Emacs.svg"
    }
  },
  {
    name: "Ember",
    icons: {
      light: "Ember.svg",
      dark: "Ember.svg"
    }
  },
  {
    name: "Emotion",
    icons: {
      light: "Emotion-Light.svg",
      dark: "Emotion-Dark.svg"
    }
  },
  {
    name: "ExpressJS",
    icons: {
      light: "ExpressJS-Light.svg",
      dark: "ExpressJS-Dark.svg"
    }
  },
  {
    name: "FastAPI",
    icons: {
      light: "FastAPI.svg",
      dark: "FastAPI.svg"
    }
  },
  {
    name: "Fediverse",
    icons: {
      light: "Fediverse-Light.svg",
      dark: "Fediverse-Dark.svg"
    }
  },
  {
    name: "Figma",
    icons: {
      light: "Figma-Light.svg",
      dark: "Figma-Dark.svg"
    }
  },
  {
    name: "Firebase",
    icons: {
      light: "Firebase-Light.svg",
      dark: "Firebase-Dark.svg"
    }
  },
  {
    name: "Flask",
    icons: {
      light: "Flask-Light.svg",
      dark: "Flask-Dark.svg"
    }
  },
  {
    name: "Flutter",
    icons: {
      light: "Flutter-Light.svg",
      dark: "Flutter-Dark.svg"
    }
  },
  {
    name: "Forth",
    icons: {
      light: "Forth.svg",
      dark: "Forth.svg"
    }
  },
  {
    name: "Fortran",
    icons: {
      light: "Fortran.svg",
      dark: "Fortran.svg"
    }
  },
  {
    name: "GameMakerStudio",
    icons: {
      light: "GameMakerStudio.svg",
      dark: "GameMakerStudio.svg"
    }
  },
  {
    name: "Gatsby",
    icons: {
      light: "Gatsby.svg",
      dark: "Gatsby.svg"
    }
  },
  {
    name: "GCP",
    icons: {
      light: "GCP-Light.svg",
      dark: "GCP-Dark.svg"
    }
  },
  {
    name: "Gherkin",
    icons: {
      light: "Gherkin-Light.svg",
      dark: "Gherkin-Dark.svg"
    }
  },
  {
    name: "Git",
    icons: {
      light: "Git.svg",
      dark: "Git.svg"
    }
  },
  {
    name: "Github",
    icons: {
      light: "Github-Light.svg",
      dark: "Github-Dark.svg"
    }
  },
  {
    name: "GithubActions",
    icons: {
      light: "GithubActions-Light.svg",
      dark: "GithubActions-Dark.svg"
    }
  },
  {
    name: "GitLab",
    icons: {
      light: "GitLab-Light.svg",
      dark: "GitLab-Dark.svg"
    }
  },
  {
    name: "Godot",
    icons: {
      light: "Godot-Light.svg",
      dark: "Godot-Dark.svg"
    }
  },
  {
    name: "GoLang",
    icons: {
      light: "GoLang.svg",
      dark: "GoLang.svg"
    }
  },
  {
    name: "Gradle",
    icons: {
      light: "Gradle-Light.svg",
      dark: "Gradle-Dark.svg"
    }
  },
  {
    name: "Grafana",
    icons: {
      light: "Grafana-Light.svg",
      dark: "Grafana-Dark.svg"
    }
  },
  {
    name: "GraphQL",
    icons: {
      light: "GraphQL-Light.svg",
      dark: "GraphQL-Dark.svg"
    }
  },
  {
    name: "GTK",
    icons: {
      light: "GTK-Light.svg",
      dark: "GTK-Dark.svg"
    }
  },
  {
    name: "Gulp",
    icons: {
      light: "Gulp.svg",
      dark: "Gulp.svg"
    }
  },
  {
    name: "Haskell",
    icons: {
      light: "Haskell-Light.svg",
      dark: "Haskell-Dark.svg"
    }
  },
  {
    name: "Haxe",
    icons: {
      light: "Haxe-Light.svg",
      dark: "Haxe-Dark.svg"
    }
  },
  {
    name: "HaxeFlixel",
    icons: {
      light: "HaxeFlixel-Light.svg",
      dark: "HaxeFlixel-Dark.svg"
    }
  },
  {
    name: "Heroku",
    icons: {
      light: "Heroku.svg",
      dark: "Heroku.svg"
    }
  },
  {
    name: "Hibernate",
    icons: {
      light: "Hibernate-Light.svg",
      dark: "Hibernate-Dark.svg"
    }
  },
  {
    name: "HTML",
    icons: {
      light: "HTML.svg",
      dark: "HTML.svg"
    }
  },
  {
    name: "Idea",
    icons: {
      light: "Idea-Light.svg",
      dark: "Idea-Dark.svg"
    }
  },
  {
    name: "Illustrator",
    icons: {
      light: "Illustrator.svg",
      dark: "Illustrator.svg"
    }
  },
  {
    name: "Instagram",
    icons: {
      light: "Instagram.svg",
      dark: "Instagram.svg"
    }
  },
  {
    name: "IPFS",
    icons: {
      light: "IPFS-Light.svg",
      dark: "IPFS-Dark.svg"
    }
  },
  {
    name: "Java",
    icons: {
      light: "Java-Light.svg",
      dark: "Java-Dark.svg"
    }
  },
  {
    name: "Javascript",
    icons: {
      light: "Javascript.svg",
      dark: "Javascript.svg"
    }
  },
  {
    name: "Jenkins",
    icons: {
      light: "Jenkins-Light.svg",
      dark: "Jenkins-Dark.svg"
    }
  },
  {
    name: "Jest",
    icons: {
      light: "Jest.svg",
      dark: "Jest.svg"
    }
  },
  {
    name: "JQuery",
    icons: {
      light: "JQuery.svg",
      dark: "JQuery.svg"
    }
  },
  {
    name: "Julia",
    icons: {
      light: "Julia-Light.svg",
      dark: "Julia-Dark.svg"
    }
  },
  {
    name: "Kafka",
    icons: {
      light: "Kafka.svg",
      dark: "Kafka.svg"
    }
  },
  {
    name: "Kotlin",
    icons: {
      light: "Kotlin-Light.svg",
      dark: "Kotlin-Dark.svg"
    }
  },
  {
    name: "Ktor",
    icons: {
      light: "Ktor-Light.svg",
      dark: "Ktor-Dark.svg"
    }
  },
  {
    name: "Kubernetes",
    icons: {
      light: "Kubernetes.svg",
      dark: "Kubernetes.svg"
    }
  },
  {
    name: "Laravel",
    icons: {
      light: "Laravel-Light.svg",
      dark: "Laravel-Dark.svg"
    }
  },
  {
    name: "LaTeX",
    icons: {
      light: "LaTeX-Light.svg",
      dark: "LaTeX-Dark.svg"
    }
  },
  {
    name: "LinkedIn",
    icons: {
      light: "LinkedIn.svg",
      dark: "LinkedIn.svg"
    }
  },
  {
    name: "Linux",
    icons: {
      light: "Linux-Light.svg",
      dark: "Linux-Dark.svg"
    }
  },
  {
    name: "Lit",
    icons: {
      light: "Lit-Light.svg",
      dark: "Lit-Dark.svg"
    }
  },
  {
    name: "Lua",
    icons: {
      light: "Lua-Light.svg",
      dark: "Lua-Dark.svg"
    }
  },
  {
    name: "Markdown",
    icons: {
      light: "Markdown-Light.svg",
      dark: "Markdown-Dark.svg"
    }
  },
  {
    name: "Mastodon",
    icons: {
      light: "Mastodon-Light.svg",
      dark: "Mastodon-Dark.svg"
    }
  },
  {
    name: "MaterialUI",
    icons: {
      light: "MaterialUI-Light.svg",
      dark: "MaterialUI-Dark.svg"
    }
  },
  {
    name: "Matlab",
    icons: {
      light: "Matlab-Light.svg",
      dark: "Matlab-Dark.svg"
    }
  },
  {
    name: "Maven",
    icons: {
      light: "Maven-Light.svg",
      dark: "Maven-Dark.svg"
    }
  },
  {
    name: "Misskey",
    icons: {
      light: "Misskey-Light.svg",
      dark: "Misskey-Dark.svg"
    }
  },
  {
    name: "MongoDB",
    icons: {
      light: "MongoDB.svg",
      dark: "MongoDB.svg"
    }
  },
  {
    name: "MySQL",
    icons: {
      light: "MySQL-Light.svg",
      dark: "MySQL-Dark.svg"
    }
  },
  {
    name: "NeoVim",
    icons: {
      light: "NeoVim-Light.svg",
      dark: "NeoVim-Dark.svg"
    }
  },
  {
    name: "NestJS",
    icons: {
      light: "NestJS-Light.svg",
      dark: "NestJS-Dark.svg"
    }
  },
  {
    name: "Netlify",
    icons: {
      light: "Netlify-Light.svg",
      dark: "Netlify-Dark.svg"
    }
  },
  {
    name: "NextJS",
    icons: {
      light: "NextJS-Light.svg",
      dark: "NextJS-Dark.svg"
    }
  },
  {
    name: "Nginx",
    icons: {
      light: "Nginx.svg",
      dark: "Nginx.svg"
    }
  },
  {
    name: "Nim",
    icons: {
      light: "Nim-Light.svg",
      dark: "Nim-Dark.svg"
    }
  },
  {
    name: "NodeJS",
    icons: {
      light: "NodeJS-Light.svg",
      dark: "NodeJS-Dark.svg"
    }
  },
  {
    name: "NuxtJS",
    icons: {
      light: "NuxtJS-Light.svg",
      dark: "NuxtJS-Dark.svg"
    }
  },
  {
    name: "OCaml",
    icons: {
      light: "OCaml.svg",
      dark: "OCaml.svg"
    }
  },
  {
    name: "Octave",
    icons: {
      light: "Octave-Light.svg",
      dark: "Octave-Dark.svg"
    }
  },
  {
    name: "OpenShift",
    icons: {
      light: "OpenShift.svg",
      dark: "OpenShift.svg"
    }
  },
  {
    name: "OpenStack",
    icons: {
      light: "OpenStack-Light.svg",
      dark: "OpenStack-Dark.svg"
    }
  },
  {
    name: "Perl",
    icons: {
      light: "Perl.svg",
      dark: "Perl.svg"
    }
  },
  {
    name: "Photoshop",
    icons: {
      light: "Photoshop.svg",
      dark: "Photoshop.svg"
    }
  },
  {
    name: "PHP",
    icons: {
      light: "PHP-Light.svg",
      dark: "PHP-Dark.svg"
    }
  },
  {
    name: "Plan9",
    icons: {
      light: "Plan9-Light.svg",
      dark: "Plan9-Dark.svg"
    }
  },
  {
    name: "PlanetScale",
    icons: {
      light: "PlanetScale-Light.svg",
      dark: "PlanetScale-Dark.svg"
    }
  },
  {
    name: "PostgreSQL",
    icons: {
      light: "PostgreSQL-Light.svg",
      dark: "PostgreSQL-Dark.svg"
    }
  },
  {
    name: "Postman",
    icons: {
      light: "Postman.svg",
      dark: "Postman.svg"
    }
  },
  {
    name: "Powershell",
    icons: {
      light: "Powershell-Light.svg",
      dark: "Powershell-Dark.svg"
    }
  },
  {
    name: "Premiere",
    icons: {
      light: "Premiere.svg",
      dark: "Premiere.svg"
    }
  },
  {
    name: "Prisma",
    icons: {
      light: "Prisma.svg",
      dark: "Prisma.svg"
    }
  },
  {
    name: "Processing",
    icons: {
      light: "Processing-Light.svg",
      dark: "Processing-Dark.svg"
    }
  },
  {
    name: "Prometheus",
    icons: {
      light: "Prometheus.svg",
      dark: "Prometheus.svg"
    }
  },
  {
    name: "Pug",
    icons: {
      light: "Pug-Light.svg",
      dark: "Pug-Dark.svg"
    }
  },
  {
    name: "Python",
    icons: {
      light: "Python-Light.svg",
      dark: "Python-Dark.svg"
    }
  },
  {
    name: "PyTorch",
    icons: {
      light: "PyTorch-Light.svg",
      dark: "PyTorch-Dark.svg"
    }
  },
  {
    name: "QT",
    icons: {
      light: "QT-Light.svg",
      dark: "QT-Dark.svg"
    }
  },
  {
    name: "R",
    icons: {
      light: "R-Light.svg",
      dark: "R-Dark.svg"
    }
  },
  {
    name: "RabbitMQ",
    icons: {
      light: "RabbitMQ-Light.svg",
      dark: "RabbitMQ-Dark.svg"
    }
  },
  {
    name: "Rails",
    icons: {
      light: "Rails.svg",
      dark: "Rails.svg"
    }
  },
  {
    name: "RaspberryPi",
    icons: {
      light: "RaspberryPi-Light.svg",
      dark: "RaspberryPi-Dark.svg"
    }
  },
  {
    name: "React",
    icons: {
      light: "React-Light.svg",
      dark: "React-Dark.svg"
    }
  },
  {
    name: "ReactiveX",
    icons: {
      light: "ReactiveX-Light.svg",
      dark: "ReactiveX-Dark.svg"
    }
  },
  {
    name: "Redis",
    icons: {
      light: "Redis-Light.svg",
      dark: "Redis-Dark.svg"
    }
  },
  {
    name: "Redux",
    icons: {
      light: "Redux.svg",
      dark: "Redux.svg"
    }
  },
  {
    name: "Regex",
    icons: {
      light: "Regex-Light.svg",
      dark: "Regex-Dark.svg"
    }
  },
  {
    name: "Remix",
    icons: {
      light: "Remix-Light.svg",
      dark: "Remix-Dark.svg"
    }
  },
  {
    name: "Replit",
    icons: {
      light: "Replit-Light.svg",
      dark: "Replit-Dark.svg"
    }
  },
  {
    name: "Rocket",
    icons: {
      light: "Rocket.svg",
      dark: "Rocket.svg"
    }
  },
  {
    name: "RollupJS",
    icons: {
      light: "RollupJS-Light.svg",
      dark: "RollupJS-Dark.svg"
    }
  },
  {
    name: "ROS",
    icons: {
      light: "ROS-Light.svg",
      dark: "ROS-Dark.svg"
    }
  },
  {
    name: "Ruby",
    icons: {
      light: "Ruby.svg",
      dark: "Ruby.svg"
    }
  },
  {
    name: "Rust",
    icons: {
      light: "Rust.svg",
      dark: "Rust.svg"
    }
  },
  {
    name: "Sass",
    icons: {
      light: "Sass.svg",
      dark: "Sass.svg"
    }
  },
  {
    name: "Scala",
    icons: {
      light: "Scala-Light.svg",
      dark: "Scala-Dark.svg"
    }
  },
  {
    name: "Selenium",
    icons: {
      light: "Selenium.svg",
      dark: "Selenium.svg"
    }
  },
  {
    name: "Sentry",
    icons: {
      light: "Sentry.svg",
      dark: "Sentry.svg"
    }
  },
  {
    name: "Sequelize",
    icons: {
      light: "Sequelize-Light.svg",
      dark: "Sequelize-Dark.svg"
    }
  },
  {
    name: "Sketchup",
    icons: {
      light: "Sketchup-Light.svg",
      dark: "Sketchup-Dark.svg"
    }
  },
  {
    name: "Solidity",
    icons: {
      light: "Solidity.svg",
      dark: "Solidity.svg"
    }
  },
  {
    name: "SolidJS",
    icons: {
      light: "SolidJS-Light.svg",
      dark: "SolidJS-Dark.svg"
    }
  },
  {
    name: "Spring",
    icons: {
      light: "Spring-Light.svg",
      dark: "Spring-Dark.svg"
    }
  },
  {
    name: "SQLite",
    icons: {
      light: "SQLite.svg",
      dark: "SQLite.svg"
    }
  },
  {
    name: "StackOverflow",
    icons: {
      light: "StackOverflow-Light.svg",
      dark: "StackOverflow-Dark.svg"
    }
  },
  {
    name: "StyledComponents",
    icons: {
      light: "StyledComponents.svg",
      dark: "StyledComponents.svg"
    }
  },
  {
    name: "Supabase",
    icons: {
      light: "Supabase-Light.svg",
      dark: "Supabase-Dark.svg"
    }
  },
  {
    name: "Svelte",
    icons: {
      light: "Svelte.svg",
      dark: "Svelte.svg"
    }
  },
  {
    name: "SVG",
    icons: {
      light: "SVG-Light.svg",
      dark: "SVG-Dark.svg"
    }
  },
  {
    name: "Swift",
    icons: {
      light: "Swift.svg",
      dark: "Swift.svg"
    }
  },
  {
    name: "Symfony",
    icons: {
      light: "Symfony-Light.svg",
      dark: "Symfony-Dark.svg"
    }
  },
  {
    name: "TailwindCSS",
    icons: {
      light: "TailwindCSS-Light.svg",
      dark: "TailwindCSS-Dark.svg"
    }
  },
  {
    name: "Tauri",
    icons: {
      light: "Tauri-Light.svg",
      dark: "Tauri-Dark.svg"
    }
  },
  {
    name: "TensorFlow",
    icons: {
      light: "TensorFlow-Light.svg",
      dark: "TensorFlow-Dark.svg"
    }
  },
  {
    name: "ThreeJS",
    icons: {
      light: "ThreeJS-Light.svg",
      dark: "ThreeJS-Dark.svg"
    }
  },
  {
    name: "Twitter",
    icons: {
      light: "Twitter.svg",
      dark: "Twitter.svg"
    }
  },
  {
    name: "TypeScript",
    icons: {
      light: "TypeScript.svg",
      dark: "TypeScript.svg"
    }
  },
  {
    name: "Unity",
    icons: {
      light: "Unity-Light.svg",
      dark: "Unity-Dark.svg"
    }
  },
  {
    name: "UnrealEngine",
    icons: {
      light: "UnrealEngine.svg",
      dark: "UnrealEngine.svg"
    }
  },
  {
    name: "V",
    icons: {
      light: "V-Light.svg",
      dark: "V-Dark.svg"
    }
  },
  {
    name: "Vala",
    icons: {
      light: "Vala.svg",
      dark: "Vala.svg"
    }
  },
  {
    name: "Vercel",
    icons: {
      light: "Vercel-Light.svg",
      dark: "Vercel-Dark.svg"
    }
  },
  {
    name: "VIM",
    icons: {
      light: "VIM-Light.svg",
      dark: "VIM-Dark.svg"
    }
  },
  {
    name: "VisualStudio",
    icons: {
      light: "VisualStudio-Light.svg",
      dark: "VisualStudio-Dark.svg"
    }
  },
  {
    name: "Vite",
    icons: {
      light: "Vite-Light.svg",
      dark: "Vite-Dark.svg"
    }
  },
  {
    name: "VSCode",
    icons: {
      light: "VSCode-Light.svg",
      dark: "VSCode-Dark.svg"
    }
  },
  {
    name: "VueJS",
    icons: {
      light: "VueJS-Light.svg",
      dark: "VueJS-Dark.svg"
    }
  },
  {
    name: "WebAssembly",
    icons: {
      light: "WebAssembly.svg",
      dark: "WebAssembly.svg"
    }
  },
  {
    name: "Webflow",
    icons: {
      light: "Webflow.svg",
      dark: "Webflow.svg"
    }
  },
  {
    name: "Webpack",
    icons: {
      light: "Webpack-Light.svg",
      dark: "Webpack-Dark.svg"
    }
  },
  {
    name: "WindiCSS",
    icons: {
      light: "WindiCSS-Light.svg",
      dark: "WindiCSS-Dark.svg"
    }
  },
  {
    name: "Wordpress",
    icons: {
      light: "Wordpress.svg",
      dark: "Wordpress.svg"
    }
  },
  {
    name: "Workers",
    icons: {
      light: "Workers-Light.svg",
      dark: "Workers-Dark.svg"
    }
  },
  {
    name: "XD",
    icons: {
      light: "XD.svg",
      dark: "XD.svg"
    }
  },
  {
    name: "Zig",
    icons: {
      light: "Zig-Light.svg",
      dark: "Zig-Dark.svg"
    }
  }
];
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options"
  ]);
  setContext("background", true);
  let { tag = "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = void 0 } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800",
    red: "border-red-300 dark:border-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800",
    green: "border-green-300 dark:border-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800",
    purple: "border-purple-300 dark:border-purple-800",
    pink: "border-pink-300 dark:border-pink-800",
    blue: "border-blue-300 dark:border-blue-800",
    light: "border-gray-500",
    dark: "border-gray-500",
    default: "border-gray-200 dark:border-gray-700",
    dropdown: "border-gray-100 dark:border-gray-700",
    navbar: "border-gray-100 dark:border-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700",
    form: "border-gray-300 dark:border-gray-700",
    primary: "border-primary-500 dark:border-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && (color === "dropdown" ? "rounded" : "rounded-lg"), border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${transition ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`} `;
});
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const { Object: Object_1 } = globals;
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let triggerEl;
  let contentEl;
  let popper;
  function init(node, _triggerEl) {
    const arrowEl = arrow ? node.lastElementChild : void 0;
    popper = createPopper(_triggerEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: ({ reference, popper: popper2 }) => {
              return [
                yOnly ? popper2.width / 2 - reference.width / 2 - reference.x : 0,
                offset
              ];
            }
          }
        },
        { name: "eventListeners", enabled: open },
        { name: "flip", enabled: false },
        {
          name: "arrow",
          enabled: arrow,
          options: { element: arrowEl, padding: 10 }
        }
      ]
    });
    return {
      update(_triggerEl2) {
        popper.state.elements.reference = _triggerEl2;
        popper.update();
      },
      destroy() {
        popper.destroy();
      }
    };
  }
  let position = "bottom";
  let arrowClass;
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  {
    dispatch("show", triggerEl, open);
  }
  popper && popper.setOptions({ placement });
  position = placement.split("-", 1)[0];
  arrowClass = twMerge(
    "after:w-[9px] after:h-[9px] after:rotate-45 bg-inherit after:bg-inherit invisible after:visible after:block border-inherit after:border-inherit",
    position === "top" && ($$props.border ? "after:border-b after:border-r -bottom-[5px]" : "-bottom-[4px]"),
    position === "bottom" && ($$props.border ? "after:border-t after:border-l -top-[5px]" : "-top-[4px]"),
    position === "left" && ($$props.border ? "after:border-t after:border-r -right-[5px]" : "-right-[4px]"),
    position === "right" && ($$props.border ? "after:border-b after:border-l -left-[5px]" : "-left-[4px]")
  );
  return `${`<div${add_attribute("this", contentEl, 0)}></div>`} ${open && triggerEl ? `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object_1.assign({}, { use: init }, { options: triggerEl }, { role: "tooltip" }, { tabindex: activeContent ? -1 : void 0 }, $$restProps, {
      class: twMerge("outline-none", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``} ${arrow ? `<div${add_attribute("class", arrowClass, 0)}></div>` : ``}`;
      }
    }
  )}` : ``} `;
});
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "defaultClass"]);
  let { type = "dark" } = $$props;
  let { defaultClass = "py-2 px-3 text-sm font-medium" } = $$props;
  const types = {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border border-gray-200 bg-white text-gray-900",
    auto: " bg-white text-gray-900 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-0",
    custom: ""
  };
  let toolTipClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  {
    {
      if ($$restProps.color)
        type = "custom";
      else
        $$restProps.color = "none";
      toolTipClass = twMerge("tooltip", defaultClass, types[type], $$props.class);
    }
  }
  return `${validate_component(Popper, "Popper").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: toolTipClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} `;
});

export { Tooltip as T, is_void as i, languages as l };
//# sourceMappingURL=Tooltip-aa396bc0.js.map

const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["angus.jpg","bg.svg","bionicReading.png","favicon.png","GAY.jpg","icons/Ableton-Dark.svg","icons/Ableton-Light.svg","icons/ActivityPub-Dark.svg","icons/ActivityPub-Light.svg","icons/Actix-Dark.svg","icons/Actix-Light.svg","icons/Adonis.svg","icons/AfterEffects.svg","icons/AiScript-Dark.svg","icons/AiScript-Light.svg","icons/AlpineJS-Dark.svg","icons/AlpineJS-Light.svg","icons/AndroidStudio-Dark.svg","icons/AndroidStudio-Light.svg","icons/Angular-Dark.svg","icons/Angular-Light.svg","icons/Ansible.svg","icons/Apollo.svg","icons/Appwrite.svg","icons/Arduino.svg","icons/Astro.svg","icons/Atom.svg","icons/Audition.svg","icons/AutoCAD-Dark.svg","icons/AutoCAD-Light.svg","icons/AWS-Dark.svg","icons/AWS-Light.svg","icons/Azul.svg","icons/Azure-Dark.svg","icons/Azure-Light.svg","icons/Babel.svg","icons/Bash-Dark.svg","icons/Bash-Light.svg","icons/Bevy-Dark.svg","icons/Bevy-Light.svg","icons/Blender-Dark.svg","icons/Blender-Light.svg","icons/Bootstrap.svg","icons/BSD-Dark.svg","icons/BSD-Light.svg","icons/C++.svg","icons/C.svg","icons/Cassandra-Dark.svg","icons/Cassandra-Light.svg","icons/Clojure-Dark.svg","icons/Clojure-Light.svg","icons/Cloudflare-Dark.svg","icons/Cloudflare-Light.svg","icons/CMake-Dark.svg","icons/CMake-Light.svg","icons/CodePen-Dark.svg","icons/CodePen-Light.svg","icons/CodeWars.svg","icons/CoffeeScript-Dark.svg","icons/CoffeeScript-Light.svg","icons/Crystal-Dark.svg","icons/Crystal-Light.svg","icons/CS.svg","icons/CSS.svg","icons/D3-Dark.svg","icons/D3-Light.svg","icons/Dart-Dark.svg","icons/Dart-Light.svg","icons/DENO-Dark.svg","icons/DENO-Light.svg","icons/DevTo-Dark.svg","icons/DevTo-Light.svg","icons/Discord.svg","icons/DiscordBots.svg","icons/Django.svg","icons/Docker.svg","icons/DotNet.svg","icons/DynamoDB-Dark.svg","icons/DynamoDB-Light.svg","icons/Eclipse-Dark.svg","icons/Eclipse-Light.svg","icons/Electron.svg","icons/Elixir-Dark.svg","icons/Elixir-Light.svg","icons/Emacs.svg","icons/Ember.svg","icons/Emotion-Dark.svg","icons/Emotion-Light.svg","icons/ExpressJS-Dark.svg","icons/ExpressJS-Light.svg","icons/FastAPI.svg","icons/Fediverse-Dark.svg","icons/Fediverse-Light.svg","icons/Figma-Dark.svg","icons/Figma-Light.svg","icons/Firebase-Dark.svg","icons/Firebase-Light.svg","icons/Flask-Dark.svg","icons/Flask-Light.svg","icons/Flutter-Dark.svg","icons/Flutter-Light.svg","icons/Forth.svg","icons/Fortran.svg","icons/GameMakerStudio.svg","icons/Gatsby.svg","icons/GCP-Dark.svg","icons/GCP-Light.svg","icons/Gherkin-Dark.svg","icons/Gherkin-Light.svg","icons/Git.svg","icons/Github-Dark.svg","icons/Github-Light.svg","icons/GithubActions-Dark.svg","icons/GithubActions-Light.svg","icons/GitLab-Dark.svg","icons/GitLab-Light.svg","icons/Godot-Dark.svg","icons/Godot-Light.svg","icons/GoLang.svg","icons/Gradle-Dark.svg","icons/Gradle-Light.svg","icons/Grafana-Dark.svg","icons/Grafana-Light.svg","icons/GraphQL-Dark.svg","icons/GraphQL-Light.svg","icons/GTK-Dark.svg","icons/GTK-Light.svg","icons/Gulp.svg","icons/Haskell-Dark.svg","icons/Haskell-Light.svg","icons/Haxe-Dark.svg","icons/Haxe-Light.svg","icons/HaxeFlixel-Dark.svg","icons/HaxeFlixel-Light.svg","icons/Heroku.svg","icons/Hibernate-Dark.svg","icons/Hibernate-Light.svg","icons/HTML.svg","icons/Idea-Dark.svg","icons/Idea-Light.svg","icons/Illustrator.svg","icons/Instagram.svg","icons/IPFS-Dark.svg","icons/IPFS-Light.svg","icons/Java-Dark.svg","icons/Java-Light.svg","icons/Javascript.svg","icons/Jenkins-Dark.svg","icons/Jenkins-Light.svg","icons/Jest.svg","icons/JQuery.svg","icons/Julia-Dark.svg","icons/Julia-Light.svg","icons/Kafka.svg","icons/Kotlin-Dark.svg","icons/Kotlin-Light.svg","icons/Ktor-Dark.svg","icons/Ktor-Light.svg","icons/Kubernetes.svg","icons/Laravel-Dark.svg","icons/Laravel-Light.svg","icons/LaTeX-Dark.svg","icons/LaTeX-Light.svg","icons/LinkedIn.svg","icons/Linux-Dark.svg","icons/Linux-Light.svg","icons/Lit-Dark.svg","icons/Lit-Light.svg","icons/Lua-Dark.svg","icons/Lua-Light.svg","icons/Markdown-Dark.svg","icons/Markdown-Light.svg","icons/Mastodon-Dark.svg","icons/Mastodon-Light.svg","icons/MaterialUI-Dark.svg","icons/MaterialUI-Light.svg","icons/Matlab-Dark.svg","icons/Matlab-Light.svg","icons/Maven-Dark.svg","icons/Maven-Light.svg","icons/Misskey-Dark.svg","icons/Misskey-Light.svg","icons/MongoDB.svg","icons/MySQL-Dark.svg","icons/MySQL-Light.svg","icons/NeoVim-Dark.svg","icons/NeoVim-Light.svg","icons/NestJS-Dark.svg","icons/NestJS-Light.svg","icons/Netlify-Dark.svg","icons/Netlify-Light.svg","icons/NextJS-Dark.svg","icons/NextJS-Light.svg","icons/Nginx.svg","icons/Nim-Dark.svg","icons/Nim-Light.svg","icons/NodeJS-Dark.svg","icons/NodeJS-Light.svg","icons/NuxtJS-Dark.svg","icons/NuxtJS-Light.svg","icons/OCaml.svg","icons/Octave-Dark.svg","icons/Octave-Light.svg","icons/OpenShift.svg","icons/OpenStack-Dark.svg","icons/OpenStack-Light.svg","icons/Perl.svg","icons/Photoshop.svg","icons/PHP-Dark.svg","icons/PHP-Light.svg","icons/Plan9-Dark.svg","icons/Plan9-Light.svg","icons/PlanetScale-Dark.svg","icons/PlanetScale-Light.svg","icons/PostgreSQL-Dark.svg","icons/PostgreSQL-Light.svg","icons/Postman.svg","icons/Powershell-Dark.svg","icons/Powershell-Light.svg","icons/Premiere.svg","icons/Prisma.svg","icons/Processing-Dark.svg","icons/Processing-Light.svg","icons/Prometheus.svg","icons/Pug-Dark.svg","icons/Pug-Light.svg","icons/Python-Dark.svg","icons/Python-Light.svg","icons/PyTorch-Dark.svg","icons/PyTorch-Light.svg","icons/QT-Dark.svg","icons/QT-Light.svg","icons/R-Dark.svg","icons/R-Light.svg","icons/RabbitMQ-Dark.svg","icons/RabbitMQ-Light.svg","icons/Rails.svg","icons/RaspberryPi-Dark.svg","icons/RaspberryPi-Light.svg","icons/React-Dark.svg","icons/React-Light.svg","icons/ReactiveX-Dark.svg","icons/ReactiveX-Light.svg","icons/Redis-Dark.svg","icons/Redis-Light.svg","icons/Redux.svg","icons/Regex-Dark.svg","icons/Regex-Light.svg","icons/Remix-Dark.svg","icons/Remix-Light.svg","icons/Replit-Dark.svg","icons/Replit-Light.svg","icons/Rocket.svg","icons/RollupJS-Dark.svg","icons/RollupJS-Light.svg","icons/ROS-Dark.svg","icons/ROS-Light.svg","icons/Ruby.svg","icons/Rust.svg","icons/Sass.svg","icons/Scala-Dark.svg","icons/Scala-Light.svg","icons/Selenium.svg","icons/Sentry.svg","icons/Sequelize-Dark.svg","icons/Sequelize-Light.svg","icons/Sketchup-Dark.svg","icons/Sketchup-Light.svg","icons/Solidity.svg","icons/SolidJS-Dark.svg","icons/SolidJS-Light.svg","icons/Spring-Dark.svg","icons/Spring-Light.svg","icons/SQLite.svg","icons/StackOverflow-Dark.svg","icons/StackOverflow-Light.svg","icons/StyledComponents.svg","icons/Supabase-Dark.svg","icons/Supabase-Light.svg","icons/Svelte.svg","icons/SVG-Dark.svg","icons/SVG-Light.svg","icons/Swift.svg","icons/Symfony-Dark.svg","icons/Symfony-Light.svg","icons/TailwindCSS-Dark.svg","icons/TailwindCSS-Light.svg","icons/Tauri-Dark.svg","icons/Tauri-Light.svg","icons/TensorFlow-Dark.svg","icons/TensorFlow-Light.svg","icons/ThreeJS-Dark.svg","icons/ThreeJS-Light.svg","icons/Twitter.svg","icons/TypeScript.svg","icons/Unity-Dark.svg","icons/Unity-Light.svg","icons/UnrealEngine.svg","icons/V-Dark.svg","icons/V-Light.svg","icons/Vala.svg","icons/Vercel-Dark.svg","icons/Vercel-Light.svg","icons/VIM-Dark.svg","icons/VIM-Light.svg","icons/VisualStudio-Dark.svg","icons/VisualStudio-Light.svg","icons/Vite-Dark.svg","icons/Vite-Light.svg","icons/VSCode-Dark.svg","icons/VSCode-Light.svg","icons/VueJS-Dark.svg","icons/VueJS-Light.svg","icons/WebAssembly.svg","icons/Webflow.svg","icons/Webpack-Dark.svg","icons/Webpack-Light.svg","icons/WindiCSS-Dark.svg","icons/WindiCSS-Light.svg","icons/Wordpress.svg","icons/Workers-Dark.svg","icons/Workers-Light.svg","icons/XD.svg","icons/Zig-Dark.svg","icons/Zig-Light.svg","Kagepa.png","myCv.pdf","web-dev.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.648d0668.js","app":"_app/immutable/entry/app.18eecd70.js","imports":["_app/immutable/entry/start.648d0668.js","_app/immutable/chunks/scheduler.0b304ea0.js","_app/immutable/chunks/singletons.538fc4c0.js","_app/immutable/entry/app.18eecd70.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.0b304ea0.js","_app/immutable/chunks/index.c9e9b062.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-48295e06.js')),
			__memo(() => import('./chunks/1-37b7a539.js')),
			__memo(() => import('./chunks/2-651b6370.js')),
			__memo(() => import('./chunks/3-0cda6f37.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-33c1fa1e.js'))
			},
			{
				id: "/project/[name]",
				pattern: /^\/project\/([^/]+?)\/?$/,
				params: [{"name":"name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

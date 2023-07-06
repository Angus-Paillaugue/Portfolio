import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js'; 
import adapter from '@sveltejs/adapter-vercel';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [
        preprocess({ postcss: true }),
		mdsvex(mdsvexConfig),
    ],
	kit: {
		adapter: adapter({
			out: 'build',
            envPrefix: 'BUILD_',
            polyfill: true
		})
	},
	vitePlugin: {
		inspector: true,
	},	
};

export default config;
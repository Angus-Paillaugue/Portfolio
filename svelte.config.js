import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
    })
  },
  preprocess: vitePreprocess(),
  vitePlugin: {
		inspector: true,
	},	
};

export default config;
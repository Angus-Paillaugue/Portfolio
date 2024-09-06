import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import viteCompression from 'vite-plugin-compression';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), viteCompression()],
	  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
      ]
    }
  },
	resolve: {
		alias: {
			$conf: path.resolve(__dirname, './project.config.js')
		}
	}
});

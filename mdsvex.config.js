import highlighter from './src/lib/codeHighlighter.js';

const config = {
	extensions: ['.md', '.svx', '.mdx'],
	remarkPlugins: [],
	rehypePlugins: [],
	highlight: {
		highlighter
	},
	layout: 'src/lib/components/markdown/layout.svelte',
	smartypants: false
};

export default config;

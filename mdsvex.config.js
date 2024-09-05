import highlighter from './src/lib/codeHighlighter.js';

const config = {
	extensions: ['.md', '.svx', '.mdx'],
	remarkPlugins: [],
	rehypePlugins: [],
	highlight: {
		highlighter
	},
	smartypants: false
};

export default config;

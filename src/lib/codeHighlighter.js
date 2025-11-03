import { createHighlighter } from 'shiki';

import {
	transformerNotationDiff,
	transformerMetaHighlight,
	transformerNotationHighlight
} from '@shikijs/transformers'; /** @see https://shiki.style/packages/transformers  */

const transformers = [
	transformerNotationDiff(),
	transformerMetaHighlight(),
	transformerNotationHighlight()
];

function parseMeta(meta) {
	const metaArray = meta?.split(' ');
	let name = '';
	let lineNumbers = false;
	if (metaArray && metaArray.some((item) => item.startsWith('lineNumbers'))) {
		const match = metaArray.find((item) => item.startsWith('lineNumbers'));
		if (match.includes('=')) {
			lineNumbers = match.slice(11).replace(/=/g, '').replace(/"/g, '').replace(/'/g, '') == 'true';
		} else {
			lineNumbers = true;
		}
	}
	let copyCode = metaArray && !metaArray.some((item) => item.startsWith('noCopy'));
	const snippet = metaArray && metaArray.some((item) => item.startsWith('snippet'));
	if (metaArray && metaArray.some((item) => item.startsWith('name='))) {
		name = metaArray
			.find((item) => item.startsWith('name='))
			.slice(5)
			.replace(/"/g, '')
			.replace(/'/g, '');
	}
	return { name, lineNumbers, copyCode, snippet };
}

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {Promise<string>} - highlighted html
 */
async function highlighter(code, lang, meta) {
	const codeBlockTheme = 'github-light';
	const highlighter = await createHighlighter({
		langs: [lang],
		themes: [codeBlockTheme]
	});

	const { name, lineNumbers, copyCode, snippet } = parseMeta(meta);

	let html;
	if (!meta) {
		html = highlighter.codeToHtml(code, {
			lang,
			theme: codeBlockTheme,
			transformers: transformers
		});
	} else {
		html = highlighter.codeToHtml(code, {
			lang,
			theme: codeBlockTheme,
			transformers: transformers,
			meta: { __raw: meta }
		});
	}
	html = makeUnFocusable(html);
	highlighter.dispose();
	return escapeHtml(
		`<Components.pre name="${name}" lineNumbers=${lineNumbers} copyCode=${copyCode} snippet=${snippet}>` +
			html +
			`</Components.pre>`
	);
}

/**
 * Returns code with removed tabindex attribute.
 * @param {string} html - highlighted HTML
 * @returns {string} - modified HTML
 */
function makeUnFocusable(code) {
	return code.replace('tabindex="0"', '');
}

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
function escapeHtml(code) {
	return code.replace(
		/[{}`]/g,
		(character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' })[character]
	);
}

export default highlighter;

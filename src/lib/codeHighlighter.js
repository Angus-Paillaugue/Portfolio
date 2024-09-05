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
	return escapeHtml(html);
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

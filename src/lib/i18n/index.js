import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';
import { get } from 'svelte/store';

export const defaultLocale = 'en';
const translationFiles = [
	{
		filename: 'sidebar'
	},
	{
		filename: 'errors'
	},
	{
		filename: 'home',
		routes: ['/']
	},
	{
		filename: 'project',
		routes: [new RegExp('^/project/[^/]+$')]
	}
];

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	fallbackLocale: defaultLocale,
	log: {
		level: dev ? 'warn' : 'error'
	},
	translations: {
		en: { lang },
		fr: { lang }
	},
	loaders: Object.keys(lang)
		.map((locale) => {
			return translationFiles.map((file) => {
				return {
					locale,
					key: file.key || file.filename,
					routes: file.routes,
					loader: async () => (await import(`./locales/${locale}/${file.filename}.json`)).default
				};
			});
		})
		.flat()
};

export const {
	t,
	loading,
	locales,
	locale,
	translations,
	loadTranslations,
	addTranslations,
	setLocale,
	setRoute
} = new i18n(config);

import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins']
			},
			transitionTimingFunction: {
				'back-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
			}
		}
	},
	plugins: [
		plugin(({ addVariant }) => {
			// Add hocus utility variant
			addVariant('hocus', ['&:hover', '&:focus']);
		})
	]
};

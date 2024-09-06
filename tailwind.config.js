import plugin from 'tailwindcss/plugin';

const withOpacityValue = (variable) => {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variable}), ${opacityValue})`;
		}
		return `rgb(var(${variable}))`;
	};
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			colors: {
				primary: withOpacityValue('--color-primary')
			},
			fontFamily: {
				sans: ['Poppins'],
				mono: 'JetBrains Mono'
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
		}),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.ligatures-normal': {
					fontVariantLigatures: 'normal'
				},
				'.ligatures-none': {
					fontVariantLigatures: 'none'
				}
			});
		})
	]
};

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: { max: '759px' },
			md: { min: '760px', max: '1199px' },
			lg: { min: '1200px' },
		},
		colors: {
			white: '#FFFFFF',
			gray1: '#FAFAFA',
			gray2: '#EEEEEE',
			gray3: '#D9D9D9',
			gray4: '#9FA6B2',
			gray5: '#787486',
			black1: '#4B4B4B',
			black2: '#333236',
			black3: '#171717',
			black4: '#000000',
			violet1: '#F1EFFD',
			violet2: '#5534DA',
			red: '#D6173A',
			green: '#7AC555',
			purple: '#760DDE',
			orange: '#FFA500',
			blue: '#76A5EA',
			pink: '#E876EA',
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
export default config;

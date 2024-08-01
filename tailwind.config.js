/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			PK1920: { max: '1920.98px' },
			PK1366: { max: '1366.98px' },
			TABLET1024: { max: '1024.98px' },
			MOBILE768: { max: '768.98px' },
			MOBILE375: { max: '375.98px' },
		},

		extend: {
			colors: {
				color_one: 'var(--color_one)',
				color_two: 'var(--color_two)',
				color_three: 'var(--color_three)',
				color_four: 'var(--color_four)',
				color_five: 'var(--color_five)',
				color_six: 'var(--color_six)',
				color_seven: 'var(--color_seven)',
				color_eight: 'var(--color_eight)',
				color_nine: 'var(--color_nine)',
				color_ten: 'var(--color_ten)',
			},
			fontFamily: {
				sans: ['Satoshi_Regular', 'sans-serif'],
				bold: ['Satoshi_Bold', 'sans-serif'],
				medium: ['Satoshi_Medium', 'sans-serif'],
				black: ['Satoshi_Black', 'sans-serif'],
			},
			fontSize: {
				base: 'calc(var(--fz-standart) * 0.857)',
				base12: 'calc(var(--fz-standart) * 0.75)',
				base13: 'calc(var(--fz-standart) * 0.812)',
				base16: 'var(--fz-standart)',
				base18: 'calc(var(--fz-standart) * 1.125)',
				base20: 'calc(var(--fz-standart) * 1.25)',
				base24: 'calc(var(--fz-standart) * 1.5)',
				base36: 'calc(var(--fz-standart) * 2.25)',
				base52: 'calc(var(--fz-standart) * 3.25)',
				base72: 'calc(var(--fz-standart) * 4.5)',
				base160: 'calc(var(--fz-standart) * 10)',
			},
		},
	},
	plugins: [],
};

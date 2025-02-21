/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'fuente': ['League Spartan', 'serif'],	
			},
		},
		colors: {
			color1: '#EAD8C5',
			color2: '#F4E8DF',
			color3: '#F4F0ED',
			color4: '#EB585B',
			rosa: '#EF8BB8',
			azul: '#9BA8F6',
			verde: '#77BF82',
			morado: '#BEACD4',
			amarillo: '#FBF8CC',
		},
		

	},
	plugins: [],
}

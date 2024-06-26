/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-cards': 'repeat(auto-fit, minmax(300px, 1fr))',
				'auto-images': 'repeat(auto-fit, minmax(350px, 1fr))',
			}
		},
	},
	plugins: [],
}

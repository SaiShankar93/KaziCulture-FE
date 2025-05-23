/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	darkMode: ['selector', 'class'],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				backgroundImage: {
					'gradient-to-r': 'linear-gradient(to right, #6D00FB, #9747FF)',
					'conic-gradient': 'conic-gradient(from 90deg at 50% 50%, #6D00FB 0%, #6D00FB 50%, #6D00FB 100%)',
				},
				marquee: {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
				'tilt': {
					'0%, 50%, 100%': {
						transform: 'rotate(0deg)',
					},
					'25%': {
						transform: 'rotate(0.5deg)',
					},
					'75%': {
						transform: 'rotate(-0.5deg)',
					},
				},
				'twinkle': {
					'0%': {
						opacity: 0.1,
					},
					'100%': {
						opacity: 0.3,
					},
				},
			},
			animation: {
				marquee: 'marquee 10s linear infinite',
				spin: 'spin 2s linear infinite',
				'tilt': 'tilt 10s infinite linear',
				'twinkle': 'twinkle 4s infinite linear alternate',
			},
			fontFamily: {
				playfair: [
					'Playfair Display"',
					'serif'
				],
				robotoMono: [
					'Roboto Mono"',
					'monospace'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				primary: '#00FFB2',
				dark: {
					DEFAULT: '#0E0F13',
					lighter: '#1C1D24',
				}
			}
		}
	},

	plugins: [require("tailwindcss-animate"),
	function ({ addUtilities }) {
		addUtilities({
			'.scrollbar-hide': {
				'-ms-overflow-style': 'none', /* IE and Edge */
				'scrollbar-width': 'none', /* Firefox */
			},
			'.scrollbar-hide::-webkit-scrollbar': {
				display: 'none', /* Chrome, Safari, Opera */
			},
		});
	},

	],
});

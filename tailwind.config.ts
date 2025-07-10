

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// VibeStudio Color System
				violet: {
					50: 'hsl(253, 80%, 97%)',
					100: 'hsl(253, 80%, 93%)',
					200: 'hsl(253, 80%, 87%)',
					300: 'hsl(253, 80%, 75%)',
					400: 'hsl(253, 80%, 63%)',
					500: 'hsl(253, 80%, 55%)', // Primary - #8b5cf6
					600: 'hsl(253, 80%, 47%)',
					700: 'hsl(253, 80%, 39%)',
					800: 'hsl(253, 80%, 31%)',
					900: 'hsl(253, 80%, 23%)',
					950: 'hsl(253, 80%, 15%)'
				},
				mint: {
					50: 'hsl(158, 64%, 97%)',
					100: 'hsl(158, 64%, 93%)',
					200: 'hsl(158, 64%, 85%)',
					300: 'hsl(158, 64%, 73%)',
					400: 'hsl(158, 64%, 59%)',
					500: 'hsl(158, 64%, 51%)', // Secondary - #10b981
					600: 'hsl(158, 64%, 41%)',
					700: 'hsl(158, 64%, 33%)',
					800: 'hsl(158, 64%, 26%)',
					900: 'hsl(158, 64%, 22%)',
					950: 'hsl(158, 64%, 12%)'
				},
				flame: {
					50: 'hsl(20, 95%, 97%)',
					100: 'hsl(20, 95%, 93%)',
					200: 'hsl(20, 95%, 85%)',
					300: 'hsl(20, 95%, 73%)',
					400: 'hsl(20, 95%, 61%)',
					500: 'hsl(20, 95%, 55%)', // Accent - #f97316
					600: 'hsl(20, 95%, 47%)',
					700: 'hsl(20, 95%, 39%)',
					800: 'hsl(20, 95%, 31%)',
					900: 'hsl(20, 95%, 25%)',
					950: 'hsl(20, 95%, 15%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;


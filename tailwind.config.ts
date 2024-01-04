import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './variants/**/*.{ts,js}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/portfolio-bg.jpg')",
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(150px, 1fr))',
        'auto-slide': 'repeat(auto-fit, minmax(60px, 1fr))',
      },
      colors: {
        'muted-1': 'var(--muted-1)',
        'muted-2': 'var(--muted-2)',
        'muted-3': 'var(--muted-3)',
        'muted-4': 'var(--muted-4)',
        'muted-5': 'var(--muted-5)',
        'muted-6': 'var(--muted-6)',
        'muted-7': 'var(--muted-7)',
        'muted-8': 'var(--muted-8)',
        'muted-9': 'var(--muted-9)',
        'muted-10': 'var(--muted-10)',
        'muted-11': 'var(--muted-11)',
        'muted-12': 'var(--muted-12)',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config

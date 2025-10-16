/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // stone-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // sage-600
        background: 'var(--color-background)', // stone-50
        foreground: 'var(--color-foreground)', // sage-900
        primary: {
          DEFAULT: 'var(--color-primary)', // sage-600
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // sage-400
          foreground: 'var(--color-secondary-foreground)', // sage-900
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // stone-100
          foreground: 'var(--color-muted-foreground)', // sage-700
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // amber-300
          foreground: 'var(--color-accent-foreground)', // sage-900
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // sage-900
        },
        card: {
          DEFAULT: 'var(--color-card)', // stone-100
          foreground: 'var(--color-card-foreground)', // sage-900
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-600
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // orange-300
          foreground: 'var(--color-warning-foreground)', // sage-900
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)', // white
        },
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
        'accent': ['Crimson Text', 'serif'],
        'sans': ['Source Sans 3', 'sans-serif'],
        'serif': ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'residential': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'residential': '0 4px 12px rgba(45, 51, 25, 0.08)',
        'residential-lg': '0 8px 24px rgba(45, 51, 25, 0.12)',
        'residential-xl': '0 16px 32px rgba(45, 51, 25, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-gentle': 'pulseGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      transitionTimingFunction: {
        'residential': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}
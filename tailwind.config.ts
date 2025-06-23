// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Our custom colors from your config:
        darkColor: "#151515",     // Very dark grey/black
        lightColor: "#52525b",    // Medium grey
        lightOrange: "#fca99b",   // Pale, soft orange - **This seems to be the page's dominant orange**
        lightBlue: "#7688DB",     // Medium, slightly muted blue
        darkBlue: "#6c7fd8",      // Darker blue
        darkText: "#686e7d",      // Dark, desaturated grey for text
        lightBg: "#F8F8FB",       // Very light, almost white background color

        // Let's ensure standard Tailwind oranges are available if needed,
        // but prioritize your custom `lightOrange` and `orange` from the image
        // Tailwind's default orange palette is extensive: orange-50 to orange-950

        // Custom shades derived from your `lightOrange` or existing brand colors
        'hts-orange-light': '#FFEFE5', // Even lighter shade, almost white-orange
        'hts-orange-soft': '#FEE8D8',  // Soft background for the section
        'hts-orange-main': '#FF7F50', // A vibrant, core orange for accents (if needed, or use lightOrange)
        'hts-orange-dark': '#E66F40', // A darker version for text/icons

        // Shadcn/UI default colors (if you are using it)
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
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-192px * 8))" },
        },
        // Kept for general utility, but likely not used in this section now
        'soft-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        // Keep these animations for the cards and section entrance
        'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'border-glow': {
            '0%, 100%': { 'box-shadow': '0 0 0px rgba(0, 0, 0, 0)' }, // Changed to dark shadow for light background
            '50%': { 'box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)' }, // Lighter glow
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        scroll: "scroll 30s linear infinite",
        'soft-glow': 'soft-glow 5s infinite alternate ease-in-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'border-glow': 'border-glow 1.5s ease-in-out infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Removed abstract-pattern-bg as it might be too much for the new look
      },
      textShadow: {
        // Text shadow for dark text on light background might be different, or removed
        DEFAULT: '0px 1px 2px rgba(0, 0, 0, 0.1)', // Softer shadow
        md: '0px 2px 4px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
  ],
} satisfies Config;

export default config;
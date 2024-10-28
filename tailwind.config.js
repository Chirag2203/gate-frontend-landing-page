/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Defining custom blue shades
        blue: {
          dark: '#080C40',   // Darker blue
          DEFAULT: '#1520A6', // Main blue
          light: '#0479FD',   // Lighter blue
        },
        // Adjusting main theme colors
        background: '#ffffff',  // Background is set to white
        foreground: '#000000',  // Main text color is primary blue
        card: {
          DEFAULT: '#ffffff',   // Card background white
          foreground: '#000000' // Card text color as primary blue
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#000000'
        },
        primary: {
          DEFAULT: '#1520A6',   // Main blue for primary
          foreground: '#ffffff' // White text on primary
        },
        secondary: {
          DEFAULT: '#0479FD',   // Lighter blue for secondary accents
          foreground: '#080C40' // Darker blue text on secondary
        },
        muted: {
          DEFAULT: '#f0f4ff',   // Light blue background for muted areas
          foreground: '#1520A6' // Text on muted areas
        },
        accent: {
          DEFAULT: '#0479FD',   // Accent color (lighter blue)
          foreground: '#080C40' // Text on accent areas
        },
        destructive: {
          DEFAULT: '#e53e3e',   // Example red for destructive actions
          foreground: '#ffffff' // White text on destructive
        },
        border: '#d1d5db',  // Neutral border shade
        input: '#d1d5db',   // Neutral input background shade
        ring: '#0479FD',    // Accent blue for focus rings
        chart: {
          '1': '#1520A6',
          '2': '#0479FD',
          '3': '#080C40',
          '4': '#E53E3E',
          '5': '#D53F8C'    // Purple or additional color
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}

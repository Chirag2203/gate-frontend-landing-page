/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        blue: {
          dark: "#080C40",
          DEFAULT: "#1520A6",
          light: "#0479FD",
        },
        background: "#ffffff",
        foreground: "#000000",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        primary: {
          DEFAULT: "#1520A6",
          foreground: "#ffffff",
          dark: "#080C40",
        },
        secondary: {
          DEFAULT: "#0479FD",
          foreground: "#080C40",
        },
        muted: {
          DEFAULT: "#f0f4ff",
          foreground: "#1520A6",
        },
        accent: {
          DEFAULT: "#0479FD",
          foreground: "#080C40",
        },
        destructive: {
          DEFAULT: "#e53e3e",
          foreground: "#ffffff",
        },
        border: "#d1d5db",
        input: "#d1d5db",
        ring: "#0479FD",
        chart: {
          1: "#1520A6",
          2: "#0479FD",
          3: "#080C40",
          4: "#E53E3E",
          5: "#D53F8C",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

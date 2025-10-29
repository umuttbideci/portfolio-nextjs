import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        front: "#333446",
        accent: "#B8CFCE",
        theme: "#7F8CAA",
        light_theme: "#EAEFEF",
        light_blue: "#B8CFCE",
        title: "#333446",
        primary: {
          50: "#EAEFEF",
          100: "#E5EBEB",
          200: "#D8E3E3",
          300: "#B8CFCE",
          400: "#9BB5B4",
          500: "#7F8CAA",
          600: "#6A7791",
          700: "#556278",
          800: "#333446",
          900: "#2B2D3C",
        },
        neutral: {
          50: "#EAEFEF",
          100: "#E5EBEB",
          200: "#D8E3E3",
          300: "#B8CFCE",
          400: "#9BA5B5",
          500: "#7F8CAA",
          600: "#6A7791",
          700: "#556278",
          800: "#333446",
          900: "#2B2D3C",
        },
      },
      fontFamily: {
        poppins: ["Funnel Display", "sans-serif"],
        inter: ["SUSE Mono", "monospace"],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'section': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'soft': '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(104, 211, 145, 0.3)',
      },
    },
  },
} satisfies Config;

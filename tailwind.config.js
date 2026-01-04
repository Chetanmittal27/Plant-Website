/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateY(0)" },   // start & end at normal position
          "50%": { transform: "translateY(-1rem)" },    // move up in the middle
        },

        rotate: {
          "0%" : {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(360deg)"},
        },

        scaleUp: {
          "0%" : {transform: "scale(0.8)"},
          "50%" : {transform: "scale(0.8)"},
          "0%" : {transform: "scale(0.8)"},
        }
      },

      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 15s linear infinite",
      },

      
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
      },
    },
  },
  plugins: [],
}
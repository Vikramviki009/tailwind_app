/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-13deg)" },
          "50%": { transform: "rotate(13deg)" },
        },
      },
      animation: {
        spin: "spin 0.5s linear forwards",
        pulse: "pulse 0.5s ease-in forwards",
        wiggle: "wiggle 1s linear forwards",
        ping: "ping 0.5s ease-in-out forwards",
        bounce: "bounce 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};

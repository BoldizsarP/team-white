/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // prefix: "tw-",
  theme: {
    extend: {
      colors: {
        "icon-blue": "#182939",
        "bottom-blue": "#6F8CA8",
      },
    },
  },
  variant: {
    extend: {
      backgroundColor: ["odd", "even"],
    },
  },
  plugins: [],
};

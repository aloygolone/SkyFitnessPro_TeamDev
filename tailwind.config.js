/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      defaultFont: ["Roboto", "sans-serif"],
      uniqueFont: ["StratosSkyeng", "sans-serif"],
    },
    extend: {
      colors: {
        mainColor: "#BCEC30",
        mainHover: "#C6FF00",
        yogaColor: "#FFC700",
        stretchingColor: "#2491D2",
        zumbaColor: "#F7A012",
        stepAerobicColor: "#FF7E65",
        bodyFlexColor: "#7D458C",
        errorColor: "#DB0030",
        progressColor: "#00C1FF",
        bgColor: "#F7F7F7",
        blackout: "#FAFAFA",
      },
      borderRadius: {
        inputRadius: "8px",
        blockRadius: "30px",
        buttonRadius: "46px",
        progressRadius: "50px",
      },
      padding: {
        inptY: "16px",
        inptX: "18px",
        btnY: "16px",
        btnX: "26px",
        s: "10px",
        m: "20px",
        l: "30px",
        xl: "40px",
      },
    },
  },
  plugins: [],
};

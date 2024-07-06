/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
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
      spacing: {
        cardWidth: "22.5rem",
        cardHeight: "40.5rem",
        cardBlockWidth: "72.5rem",
        cardHeightUser: "31rem",
        cardBlockHeight: "46rem",
        heightWorkoutComponent: "38rem",
        widthWorkoutComponent: "28.75rem",
        radiusBtn: "40rem",
        heightCursFirst: "23.75rem",
        heightCursSecond: "22.75rem",
        widthMyProgress: "26.6rem",
        widthBlockExercises: "72.5rem",
        heightBlockExercises: "23.4rem",
        widthSelectorExercises: "67.5rem",
        heightSelectorExercises: "18.4rem",
    },
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
        colorBorderBtn: "#C4C4C4"
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

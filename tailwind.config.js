/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [ // Вот здесь укажи все возможные классы
    'bg-yogaColor',
    'bg-stretchingColor',
    'bg-zumbaColor',
    'bg-stepAerobicColor',
    'bg-bodyFlexColor',
  ],
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
      sizes: {
        cardTextW: "300px",
        mobileW: "343px",
        cardW: "360px",
        signFormW: "360px",
        modalExW: "460px",
        modalMyPrW: "426px",
        largeW: "1160px",
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
        inputColor: "#D0CECE",
        underLineColor: "#C4C4C4",
      },
      borderRadius: {
        inputRadius: "8px",
        blockRadiusMin: "28px",
        blockRadiusMax: "30px",
        buttonRadius: "46px",
        progressRadius: "50px",
      },
      padding: {
        btnYsm: "8px",
        btnXsm: "16px",
        inptY: "16px",
        inptX: "18px",
        btnY: "16px",
        btnX: "26px",
        pS: "10px",
        pM: "20px",
        pL: "30px",
        pXL: "40px",
      },
      boxShadow: {
        blockShadow: "0 0px 150px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

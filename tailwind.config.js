/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                baby: "url('./public/image.png')",
            },
            spacing: {
                wCard: "22.5rem",
                hCard: "40.5rem",
                selectorBlockW: "72.5rem",
                selectorBlockMainH: "31rem",
                selectorBlockH: "46rem",
                workoutH: "38rem",
                workoutW: "28.75rem",
                radiusBtn: "40rem",
                heightCursArr: "23.75rem",
                heightCursArr2: "22.75rem",
                widthMyProgress: "26.6rem",
                ExercisesW: "72.5rem",
                ExercisesH: "23.4rem",
                ExercisesW2: "67.5rem",
                ExercisesH2: "18.4rem",
            },
            colors: {
                colorProgress: "#f7f7f7",
                colorGreen: "#BCEC30",
                colorBorderBtn: "#C4C4C4",
            },
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
    },
    plugins: [],
};

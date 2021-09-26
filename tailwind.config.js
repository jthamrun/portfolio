module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                quicksand: ["Quicksand"],
                montserrat: ["Montserrat"],
                karla: ["karla"],
                merriweather: ["Merriweather"],
                inter: ["inter"],
                source: ["source"]
            },
            backgroundImage: (theme) => ({
                "hero-image":
                    "url('https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1467&q=80')",
            }),
            spacing: {
                "1/4": "25%",
                "1/3": "33/333333%",
                "2/5": "40%",
                45: "45%",
                "1/2": "50%",
                55: "55%",
                "2/3": "66.666667%",
                "3/4": "75%",
                "4/5": "80%",
                85: "85%",
                "9/10": "90%",
            },
            colors: {
                gray: {
                    basic: "#262525",
                    silver: "#CED4DA",
                    light: "#DEE2E6",
                    lighter: "#E9ECEF",
                    lightest: "#F8F9FA",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

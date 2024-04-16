const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    prefix: '',
    theme: {
        extend: {
            width: {
                container: '97%',
            },
            colors: {
                customColor: '#0F75BC',
            },

            backgroundColor: {
                customColor: '#0F75BC',
                BtnBg: '#371343',
            },
            borderColor: {
                btnColor: '#3C5FB3',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/aspect-ratio'), nextui()],
};

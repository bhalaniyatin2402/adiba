import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            container: {
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1170px',
                    '2xl': '1170px',
                },
            },
            colors: {
                bgc: {
                    DEFAULT: "#FFFFFF",
                },
                fgc: {
                    DEFAULT: "#293754",
                },
                text: {
                    DEFAULT: "#293754",
                },
                textSecondary: {
                    DEFAULT: "#677287",
                },
                textActive: {
                    DEFAULT: "#000041",
                },
                primary: {
                    DEFAULT: "#FFB11B",
                },
                border: {
                    DEFAULT: "#cccccc",
                }, // dark - border color (opacity: 10%, stroke width: 0.75)
                disable: {
                    DEFAULT: "#e5e8f3",
                    dark: "#475569",
                },
                bgHeader: {
                    DEFAULT: "#2d3040",
                    dark: "#1E293B",
                },
                menubg: {
                    DEFAULT: "#3E4C76",
                }
                ,
                green: "#16A34A",
            },
            maxWidth: {
                '3xl': '50%',
            },
            padding: {
                "18": "72px",
            },
            gap: {
                "18": "72px",
            },
            fontSize: {
                "42": "42px",
                "32": "32px",
            },


            backgroundImage: (theme: any) => ({
                'gradient-primary': `linear-gradient(105deg, ${theme('colors.blue.700/15%')}, ${theme('colors.blue.700/0%')})`,
                'gradient-secondary': `linear-gradient(105deg, ${theme('colors.blue.700/85%')}, ${theme('colors.blue.700/0%')})`,
            }),
            /* backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            }, */
        },
    },
    plugins: [],
}
export default config

module.exports = {
    content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
    theme: {
        extend: {
            colors: {
                // Primary Colors - Deep Workshop Blue
                primary: {
                    DEFAULT: "#1E3A5F", // deep-blue-800
                    50: "#EBF4FF", // blue-50
                    100: "#DBEAFE", // blue-100
                    200: "#BFDBFE", // blue-200
                    300: "#93C5FD", // blue-300
                    400: "#60A5FA", // blue-400
                    500: "#3B82F6", // blue-500
                    600: "#2563EB", // blue-600
                    700: "#1D4ED8", // blue-700
                    800: "#1E3A5F", // custom deep workshop blue
                    900: "#1E3A8A", // blue-900
                },
                // Secondary Colors - Charcoal Gray
                secondary: {
                    DEFAULT: "#4A5568", // gray-600
                    50: "#F7FAFC", // gray-50
                    100: "#EDF2F7", // gray-100
                    200: "#E2E8F0", // gray-200
                    300: "#CBD5E0", // gray-300
                    400: "#A0AEC0", // gray-400
                    500: "#718096", // gray-500
                    600: "#4A5568", // gray-600
                    700: "#2D3748", // gray-700
                    800: "#1A202C", // gray-800
                    900: "#171923", // gray-900
                },
                // Accent Colors - Safety Orange
                accent: {
                    DEFAULT: "#F56500", // custom safety orange
                    50: "#FFFAF0", // orange-50
                    100: "#FEEBC8", // orange-100
                    200: "#FBD38D", // orange-200
                    300: "#F6AD55", // orange-300
                    400: "#ED8936", // orange-400
                    500: "#DD6B20", // orange-500
                    600: "#F56500", // custom safety orange
                    700: "#C05621", // orange-700
                    800: "#9C4221", // orange-800
                    900: "#7B341E", // orange-900
                },
                // Background Colors
                background: "#FFFFFF", // white
                surface: "#F7FAFC", // gray-50
                // Text Colors
                text: {
                    primary: "#2D3748", // gray-700
                    secondary: "#718096", // gray-500
                },
                // Status Colors
                success: {
                    DEFAULT: "#38A169", // green-600
                    50: "#F0FFF4", // green-50
                    100: "#C6F6D5", // green-100
                    500: "#48BB78", // green-500
                    600: "#38A169", // green-600
                },
                warning: {
                    DEFAULT: "#D69E2E", // yellow-600
                    50: "#FFFFF0", // yellow-50
                    100: "#FEFCBF", // yellow-100
                    500: "#ECC94B", // yellow-500
                    600: "#D69E2E", // yellow-600
                },
                error: {
                    DEFAULT: "#E53E3E", // red-600
                    50: "#FED7D7", // red-50
                    100: "#FED7D7", // red-100
                    500: "#F56565", // red-500
                    600: "#E53E3E", // red-600
                },
                // Border Colors
                border: {
                    light: "#E2E8F0", // gray-200
                    medium: "#CBD5E0", // gray-300
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                jetbrains: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'workshop': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            },
            borderRadius: {
                'sm': '0.125rem',
                'md': '0.375rem',
                'lg': '0.5rem',
                'xl': '0.75rem',
                '2xl': '1rem',
            },
            transitionDuration: {
                '300': '300ms',
            },
            transitionTimingFunction: {
                'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
        },
    },
    plugins: [],
}
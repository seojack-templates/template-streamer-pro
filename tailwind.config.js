/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  ...({
            theme: {
                extend: {
                    colors: {
                        dark: '#09090b',
                        accent: {
                            purple: '#8b5cf6',
                            red: '#ef4444'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        head: ['Orbitron', 'sans-serif'],
                    }
                }
            }
        }),
};

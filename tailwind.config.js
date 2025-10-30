module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure this matches your folder structure
  ],
  theme: {
    extend: {
      colors: {
        brightRed: '#ff3e3e',
        darkRed: '#b71b22',
        darkGreen: '#034c59',
        buttonSuccessBg: '#c0973f',
        buttonPrimaryBg: '#035772',
        footerBg: '#d4ae54',
        footerFg: '#ffffff',
        headerBg: '#add149',
        navButton: '#55070b',
        successBg: '#c0973f',
        goldenGradientStart: '#fceabb',
        goldenGradientMiddle: '#f8b500',
        goldenGradientEnd: '#ffdd00',
        gold: '#d4af37',
        goldenHover: '#ffe066',
        brightRed: '#e63946',
        darkRed: '#8d0801',
        darkGreen: '#004d40',
      },
      backgroundImage: {
        'golden-gradient': 'linear-gradient(135deg, rgba(250, 250, 210, 0.5) 0%, rgba(255, 215, 0, 0.5) 30%, rgba(218, 165, 32, 0.5) 60%, rgba(189, 183, 107, 0.5) 100%)',
      },

        keyframes: {
          'custom-pulse': {
            '0%': { boxShadow: '0 0 0 0 rgba(183, 27, 34, 0.4)' },
            '70%': { boxShadow: '0 0 0 15px rgba(183, 27, 34, 0)' },
            '100%': { boxShadow: '0 0 0 0 rgba(183, 27, 34, 0)' },
          },
        },
        animation: {
          'custom-pulse': 'custom-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },

      textColor: {
        DEFAULT: '#b71b22', // Set the default text color to darkRed
      },
    },
  },
  plugins: [],
};
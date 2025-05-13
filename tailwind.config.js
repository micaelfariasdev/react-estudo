// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          slideRight: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideLeft: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
        },
        animation: {
          slideRight: 'slideRight 0.5s ease-out forwards',
          slideLeft: 'slideLeft 0.5s ease-out forwards',
        },
      },
    },
  }
  
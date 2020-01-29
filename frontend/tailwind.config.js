module.exports = {
  theme: {
      extend: {
          container: {
              padding: '1rem',
              center: true,
          },
          colors: {
              background: {
                // 'primary': 'white',
                // 'secondary': '#F7FAFC',
                // 'ternary': '#E2E8F0',
                // dark mode 
                // 'primary': '#0D2438',
                // 'secondary': '#102C44',
                // 'ternary': '#1E3951',
                primary: 'var(--bg-background-primary)',
                secondary: 'var(--bg-background-secondary)',
                ternary: 'var(--bg-background-ternary)',
              },
  
              copy: {
                  primary: 'var(--text-copy-primary)',
                  secondary: 'var(--text-copy-secondary)',
                  ternary: 'var(--text-copy-ternary)'
              },
              transparent: 'transparent',
          },
      },
      fontFamily: {
          halo: [
            'Halo',
        ],
        haloSans: [
            'ArameNumbersHeavy',
        ],
        sans: [
            'Montserrat',
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
            'Menlo',
            'Monaco',
            'Consolas',
            '"Liberation Mono"',
            '"Courier New"',
            'monospace',
        ],
    },
  },
  variants: {},
  plugins: [],
}

// brand colors: 
// /* Coolors Exported Palette - coolors.co/677055-aaa776-9f6a25-efe9e6-2a2d22 */

/* HSL */
// $color1: hsla(80%, 14%, 39%, 1);
// $color2: hsla(57%, 23%, 56%, 1);
// $color3: hsla(34%, 62%, 38%, 1);
// $color4: hsla(20%, 22%, 92%, 1);
// $color5: hsla(76%, 14%, 15%, 1);

// /* RGB */
// $color1: rgba(103, 112, 85, 1);
// $color2: rgba(170, 167, 118, 1);
// $color3: rgba(159, 106, 37, 1);
// $color4: rgba(239, 233, 230, 1);
// $color5: rgba(42, 45, 34, 1);

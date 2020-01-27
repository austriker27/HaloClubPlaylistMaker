module.exports = {
  theme: {
    extend: {
        container: {
            padding: '1rem'
        }
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
        },

        transparent: 'transparent',
    }
  },
  variants: {},
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: [
    // Your CSS will rebuild any time *any* file in `src` changes
    './src/**/*.{html,ts}',
  ],
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    maxWidth: {
      '1/2': '67px',
    },
    maxHeight: {
      '1/2': '67px',
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
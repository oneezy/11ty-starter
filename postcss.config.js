// module.exports = (ctx) => ({
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     cssnano: ctx.env === 'production' ? {} : false,
//   },
// });


module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/*.html"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss,
    require("cssnano")({
      preset: "default"
    })
  ]
};

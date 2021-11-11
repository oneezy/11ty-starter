// const Image = require("@11ty/eleventy-img");  // Uncomment if you need image optimisation. Istall '@11ty/eleventy-img' as dev
// require("dotenv").config;  // Uncomment if you need .env variables. Install 'dotenv' package as dev
const socialImages = require("@11tyrocks/eleventy-plugin-social-images");

const markdownIt = require("markdown-it");

const metagen = require('eleventy-plugin-metagen');


module.exports = (config) => {
  const mdLibrary = markdownIt({ html: true }).disable("code");

  config.addPassthroughCopy({ "src/static/images": "assets/images" });
  config.addPassthroughCopy({ "src/static/fonts": "assets/fonts" });
  config.setLibrary("md", mdLibrary);
  config.addShortcode("year", () => `${new Date().getFullYear()}`);

  config.addPlugin(socialImages);
  config.addPlugin(metagen);

  // Uncomment if you need image optimisation
  // config.addAsyncShortcode("image", async (src, alt, sizes) => {
  //   let metadata = await Image(src, {
  //     widths: [320, 640, 960, 1280, 1600, 2400],
  //     formats: ["webp", "avif", "jpeg"],
  //     outputDir: "./dist/images",
  //     urlPath: "/images/"
  //   }),

  //   return Image.generateHTML(metadata, {
  //     alt,
  //     sizes,
  //     loading: "lazy",
  //     decoding: "async"
  //   })
  // })

  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
      includes: "_includes",
    },
  };
};

module.exports = function (eleventyConfig) {
  // Copy images and CSS to `_site/`
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles.css");

  // Copy the menu PDF to `_site/`
  eleventyConfig.addPassthroughCopy("src/menu.pdf");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["html", "css"],
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};

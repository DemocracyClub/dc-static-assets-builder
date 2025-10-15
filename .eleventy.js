module.exports = function (eleventyConfig) {
    // Copy static assets
    eleventyConfig.addPassthroughCopy("src/assets");

    if (process.env.S3_BUCKET) {
        var baseUrl = `https://${process.env.S3_BUCKET}.s3.eu-west-2.amazonaws.com/`;
    } else {
        var baseUrl = '/';
    }

    eleventyConfig.addGlobalData('baseUrl', baseUrl);


    // Set input and output directories
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            layouts: "_layouts"
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};

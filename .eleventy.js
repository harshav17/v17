module.exports = function(eleventyConfig) {
    // Copy the `assets` directory to the output
    eleventyConfig.addPassthroughCopy("assets");
    
    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            layouts: "_includes/layouts"
        }
    };
}; 
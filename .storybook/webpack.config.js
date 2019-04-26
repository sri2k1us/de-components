const path = require("path");
module.exports = function({ config }) {
    config.module.rules.push({
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "../stories"),
        loaders: [
            {
                loader: require.resolve("@storybook/addon-storysource/loader"),
                options: {
                    prettierConfig: {
                        printWidth: 80,
                        singleQuote: false,
                        tabWidth: 4,
                    },
                },
            },
        ],
        enforce: "pre",
    });

    return config;
};

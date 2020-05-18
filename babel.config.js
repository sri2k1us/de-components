module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: ["esm"].includes(process.env.BABEL_ENV)
                    ? false
                    : "commonjs",
            },
        ],
        "@babel/preset-react",
    ],
    plugins: ["@babel/plugin-proposal-class-properties"],
};

module.exports = {
    entry: "./app.ts",
    output: {
        filename: "./bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },

    module: {
        loaders: [
            // ts -> ES6 -> babel -> ES5
            { test: /\.tsx?$/, loaders: ["babel-loader", "ts-loader"] }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};
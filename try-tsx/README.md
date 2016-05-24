#### [TypeScript/React/Webpack Quick Start](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/tutorials/React%20%26%20Webpack.md)

```shell
npm init
tsc --init
typings init
```

```shell
npm install -g typescript typings webpack
```

```shell
npm install --save react react-dom
```

```shell
npm install --save-dev ts-loader source-map-loader
npm link typescript
```

```shell
typings install --ambient --save react
typings install --ambient --save react-dom
```

**tsconfig.json**

```json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react"
    },
    "files": [
        "./typings/main.d.ts",
        "./src/components/Hello.tsx",
        "./src/index.tsx"
    ]
}
```

**webpack.config.js**

```js
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
```

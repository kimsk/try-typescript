# Quick start

    yarn init -y

## TypeScript

    yarn add typescript awesome-typescript-loader source-map-loader --dev

    tsc --init

### tsconfig.json

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": true,
        "jsx": "react"
    }
}
```

## React

    yarn add react react-dom

    yarn add @types/react @types/react-dom --dev 

## React Storybook

### [Slow Start Guide](https://getstorybook.io/docs/react-storybook/basics/slow-start-guide)

    yarn add @kadira/storybook --dev

    mkdir .storybook
    touch .storybook/config.js

### config.js

```JavaScript
    import { configure } from '@kadira/storybook';

    function loadStories() {
        require('../stories/hello.js');
        // You can require as many stories as you need.
    }
    configure(loadStories, module);
```

    touch .storybook/webpack.config.js

### webpack.config.js

```JavaScript
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ],
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
}
```

## Redux

   
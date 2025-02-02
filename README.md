![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


﻿## Task: Environment configuration

The task is to configure the working environment for ES6. Our test project will be the code in the `01_Day_1/01_Basic_environment_configuration/1_Configuration` folder.

> **Execute all the commands in the main repository**

### Project initialization

To properly configure the environment to work with ES6+ you need to create a `package.json` file.

The file will contain the information about the whole project and all of its dependencies necessary for it to work/compile correctly.

To create it in the **root directory of the repository** type:

```shell script
npm init -y
```

The `-y` flag following the `init` causes the file to be created with default settings.  In this case this will be enough.

### Webpack

Because in this module we are going to use ES6+ and later: React **we need an appropriate tool that can compile the code to the format understood by most browsers**. Luckily, this task can be done by Webpack with Babel.

First, install Webpack:

```shell script
npm i webpack@5.72.1 webpack-cli@4.10.0 process@0.11.10 -D
```

**All three packages are necessary**, in the correct versions (webpack in version 5.72.1 and webpack-cli in version 4.10.0 as well as process in version 0.11.10).

### Babel

We will use one (for now) preset for Babel: `@babel/preset-env` we've discussed earlier.

The dependencies will be added to the `package.json` file:

```shell script
npm i babel-loader @babel/core @babel/preset-env -D
```

To sum up: you need to install:

- `babel-loader` – a loader for Webpack tools
- `@babel/core` – the compiler
- `@babel/preset-env ` – a collection of plugins for ES6

### webpack-dev-server

`webpack-dev-server` is a very useful tool in the development process.

It allows to quickly create a local server to run our project and additionally to refresh the browser tab the moment you introduce changes to the files.

That's why we will attach this tool to the project:

```shell script
npm i webpack-dev-server -D
```

### Webpack configuration

All the dependencies are installed so now in the root directory of the repository we need to create two files: `webpack.config.js` and `.babelrc` (the dot in the name of "`.babelrc`" is very important). As you know these files will be used to set the appropriate compilation of the project.

The `.babelrc` file needs to contain the following structure:

```json
{
  "presets": ["@babel/preset-env"]
}
```

The `webpack.config.js` needs to look like this:

```js
const path = require("path");
const webpack = require("webpack");

const entryPath = "01_Day_1/01_Basic_environment_configuration/1_Configuration";

module.exports = {
  mode: "none",
  entry: `./${entryPath}/js/app.js`,
  devtool: "inline-source-map",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
    clean: true,
  },
  devServer: {
    open: true,
    hot: true,
    static: [
      {
        directory: path.join(__dirname, entryPath),
        publicPath: "/",
        serveIndex: true,
      },
    ],
    devMiddleware: {
      writeToDisk: true,
    },
    compress: true,
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
```

Let's now focus on its most important part

```js
const entryPath = "01_Day_1/01_Basic_environment_configuration/1_Configuration";
```

In the third line you'll see the `entryPath` variable. It defines the path to the folder with the current task. You need to set the appropriate folder: the one you're currently working on!

E.g., `01_Day_1/01_Basic_environment_configuration/1_Configuration`, `01_Day_1/02_Arrow_functions00/01_Task_1` etc.

Our Webpack configuration always refers in a given folder to the `js/app.js` file.

**After every update of the `webpack.config.js` file, the script needs to be stopped and restarted.**

### package.json file

Now that we have most dependencies installed we can come back to the `package.json` file. To be able to run Webpack easier both in the development (`webpack-dev-server`), and in the production (`webpack`) version, modify the `scripts` file slightly.

In this key you can set commands that npm is going to run. Modify the `package.json` file so that the `scripts` key looks like this:

```json
{
  "start": "webpack serve",
  "build": "webpack"
}
```

- `start` – the command used most frequently. It starts the development server. To use it type in the terminal/console:

  ```shell script
  npm start
  ```

- `build` – the command building the production version of the application. This means that a build folder containing an `out.js` file will appear. To use it type in the terminal/console:

  ```shell script
  npm run build
  ```

### Result

If all the commands were executed correctly, after running `npm start` in the console and opening `http://localhost:3001` in the browser, a compiled test page should be displayed.

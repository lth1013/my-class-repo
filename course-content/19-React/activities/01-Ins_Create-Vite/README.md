# What Is Vite?

Vite is a build tool that has gained popularity for its fast development server and optimized build process. Vite provides an optimized development experience out of the box, with native ES module support and rapid hot module replacement (HMR).


## What Are the Benefits?

* Fast Development Server: Vite utilizes an extremely fast development server powered by native ES modules. It leverages browser native ESM (ECMAScript Modules) to deliver quick and efficient hot module replacement (HMR), resulting in faster development and near-instantaneous reloading.

* Lightning-Fast Cold Start: Vite optimizes the cold start performance of your application by leveraging ES module imports. This means that the initial load time of your application is significantly reduced, allowing for quicker user interactions.

* On-Demand Compilation: Vite adopts an on-demand compilation approach, which means that it only compiles the modules that are actually being requested by the browser. This leads to faster bundling and more efficient use of system resources.

* ESBuild Integration: Vite uses the ESBuild bundler under the hood, which is known for its exceptional speed and efficiency. This integration further contributes to the overall fast build process.

* Built-in Preprocessors: Vite supports various preprocessors out of the box, such as TypeScript, JSX, CSS, and SCSS. These preprocessors are seamlessly integrated, eliminating the need for additional configuration or setup.

* Plugin Ecosystem: Vite provides a rich ecosystem of plugins that can extend its functionality. These plugins can be used to integrate with various tools, frameworks, and libraries to enhance the development experience further.

* Optimized Production Builds: When building for production, Vite optimizes the generated output by leveraging advanced techniques such as code splitting and dynamic imports. This results in smaller bundle sizes and improved performance for your deployed application.

## Before We Begin

Initializing a React application using `npm create vite@latest` is fast and simple. Like the `webpack` & `webpack-dev-server` tools we covered last unit, Vite is a tool that supports a development server which includes ES Module syntax and Hot Module Replacement (HMR), as well as a build tool which bundles your application into a production-ready setup using Rollup (a Webpack-like tool).

When this process is done, you will see a near-boilerplate application in the demo-app directory, with the following file structure (excluding node_modules):



├── package.json
├── .gitignore
├── .eslintrc.cjs
├── index.html
├── public
│   └── vite.svg
├── src
│   ├── components
│   │   └── Hello.jsx
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js

### When you would like to scaffold a new `vite` application on your own, follow these steps

1. In the command line, navigate to the desired parent folder and run `npm create vite@latest`.

    * 🔑 *Note*: This command will automatically create a sub-folder which will house your React application; you do not need to perform a `mkdir` command to create one manually.

2. Enter the desired name of your new project folder: demo-app

3. From the first list of options, select your framework; for our activities in class, we'll be using `React`.

4. From the second list of options, select your variant; for our activities in class, we'll be using `JavaScript`.

5. `cd` into your newly created project folder and run `npm install`.

    * In later activities we'll add additional NPM packages to our `vite` apps such as 'bootstrap', 'dotenv', and 'axios'.

6. Run `npm dev`/`npm run dev` and navigate to the prompted URL to see your app.

### Further customization (Recommended)

1. Navigate to your `package.json` and modify the `scripts` object so that it looks like this example:

```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

* Note the addition of the `"start": "vite"` script.

2. Navigate to the `vite.config.js` file and edit the export object so that it looks like this example:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```
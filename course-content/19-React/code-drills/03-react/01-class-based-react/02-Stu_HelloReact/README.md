# Hello React

In this activity, we will dissect a simple React application.

## Instructions

* Run `npm i` to download all the required node modules.

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

### HelloReact.jsx

* Then go into the `src` folder and try to answer the following questions:

  * What's happening inside of `src/components/HelloReact.jsx`? How does it relate to the content being rendered to the browser?

### App.jsx

* Open the `src/App.jsx` file, what's going on in this file? Try to answer the following questions:

  * What does the `App` function return?

### main.jsx

* Open the `src/main.jsx` file and go over the code. Notice that we're importing the `ReactDOM` library. Try to answer the following questions:

  * Do you remember what the purpose of `ReactDOM.render` is? What is it doing?

  * Is this where our components are rendered to the DOM?

  * Instead of splitting our files up into `App`, `components/HelloReact` and `main`, is it possible to just write our entire Hello World app in the `main.jsx` file?

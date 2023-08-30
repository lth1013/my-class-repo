# Hello React

## HelloReact.jsx

* **Q** What's happening inside of `src/components/HelloReact.jsx`? How does it relate to the content being rendered to the browser?

  * **A** The `HelloReact` function returns some JSX describing the UI we eventually want this particular component to be able to render to the document. If we were to change the JSX being returned by this function, and we were running our React app in dev mode (when we run `npm start`), the document would auto update inside of our web browser without us having to refresh. Create React App uses a Webpack development server that auto updates the view as the content changes.

## App.jsx

* **Q** What's going on inside `src/App.jsx`?

  * **A** In this file we define another component named `App`. It's common to have multiple components that fit together inside of a React application. We'll typically compose all of the top level components inside of our `App` component.

* **Q** What does the `App` function return?

  * **A** For now, the `App` function or component just returns our `HelloReact` component.


## main.jsx

* **Q** Do you remember what the purpose of `ReactDOM.render` is? What is it doing?

  * **A** We use `ReactDOM.render` to render a single component or tree of components to the DOM. In our case, `App` is the root of our component tree (it renders all of our other components inside).

* **Q** Instead of splitting our files up into `App`, `components/HelloReact` and `main`, is it possible to just write our entire Hello World app in the `main.jsx` file?

  * **A** Definitely! This code would work:

    ```js
    import ReactDOM from "react-dom";

    function HelloReact() {
      return (
        <p>Hello World!</p>;
      );
    }

    ReactDOM.render(<HelloReact />, document.getElementById("root"));
    ```

    * React is fairly unopinionated, so we can accomplish the same thing in a variety of ways. There are more conventions and best practices than there are right and wrong ways to do things.

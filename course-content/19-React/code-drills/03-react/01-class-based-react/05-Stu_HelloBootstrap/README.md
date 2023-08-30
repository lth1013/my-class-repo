# Hello Bootstrap

In this activity, we will utilize Bootstrap CSS and render components utilizing Bootstrap classes.

## Instructions

* Run `npm i` to download all the required node modules.

* Add a Bootstrap CDN to the head of your React application's `index.html` file inside `index.html`.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
```

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

* Inside of the `src/components` folder, create a brand new file named `HelloBootstrap.jsx`. Add code to this file to accomplish the following:

  * It should render a [Bootstrap Navbar](https://getbootstrap.com/docs/4.0/components/navbar/), followed by a [Bootstrap Jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/), and lastly a [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/).

  * Set the default export of this file to be your `HelloBootstrap` component.

* Update the `src/App.jsx` file so that it imports the `src/components/HelloBootstrap.jsx` file. Render the `HelloBootstrap` component instead of the paragraph that is currently being rendered.

### Hints

* In order to return separate JSX elements from a function, all of the higher level elements need a single parent, e.g., usually a `div`.

* All JSX tags must either have an adjacent tag or else have a self-closing forward slash.

* `className` must be used to describe an element's `class` property since `class` is a reserved word in JavaScript.

* Remember to import the `react` library in any file where JSX is utilized. Inspect some of the other files provided with the starter code if you're having difficulty remembering the syntax for this.

### Bonus

* Instead of having all of your Bootstrap code inside of a single component, create three separate components for the Navbar, Jumbotron, and Card. Render these components inside of the App component.

`<span className="navbar-toggler-icon" />`

`<a className="nav-link" href="#">Link</a>`

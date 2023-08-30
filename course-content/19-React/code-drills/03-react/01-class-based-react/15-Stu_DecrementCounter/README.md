# Decrement Counter

In this activity we will add a "Decrement" button and click handler to the Click Counter application.

## Instructions

* Run `npm i` to download all the required node modules.

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

* This example uses Bootstrap. Be sure to add the Bootstrap CDN to your `index.html` file.

  ```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
  ```

* Add code to the `Counter` component to add a `Decrement` button which _decreases_ the value of `this.state.count` by one each time it is clicked.

### Hints

* Use the `Increment` button and event handler as a reference for creating the new button.

### Bonus

* Inside of `Counter.js`, separate the `card-body` element and its children into a new component named `cardBody`. Render `cardBody` inside of the `Counter` component and pass the `count` state and click handlers to the new component as props. The completed bonus should still increment or decrement the counter when the buttons are clicked.

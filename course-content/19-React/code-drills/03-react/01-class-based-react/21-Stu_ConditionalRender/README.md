# Conditional Render

In this activity we will render one of four different components based upon our component's state.

## Instructions

* Run `npm i` to download all the required node modules.

* This application uses Bootstrap, so make sure you're including the Bootstrap CSS CDN.
  
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
  ```

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

  * At the top of the page there's a Bootstrap NavTabs component. Whenever a nav element is clicked, the nav element goes into an "active" state. Whenever a nav item is clicked, it sets `this.state.currentPage` inside of `PortfolioContainer` to the selected navigation item.

* Now add code to `PortfolioContainer` so that depending on the currently selected page, a different component is rendered underneath the `NavTabs` component. Example:

  * Render the `About` component when `this.state.currentPage === "About"`
  
  * Render the `Blog` component when `this.state.currentPage === "Blog"`

  * Render the `Contact` component when `this.state.currentPage === "Contact"`

  * Render the `Home` component when `this.state.currentPage === "Home"`

### Bonus

* Inside of `src/components/NavTabs.jsx`, add code so that the `a` tag for the `currentPage` has the "active" class. This component receives the `currentPage` via props.

### Hints

* Refer to [React's Documentation on Conditional Rendering](https://facebook.github.io/react/docs/conditional-rendering.html) if you get stuck.

* Consider defining a method which returns a different component based on the value of `this.state.currentPage`.

# AJAX

In this activity we will create a simple React application with which users can query the OMDB API and display information about the movie searched for.

## Instructions

* Run `npm i` to download all the required node modules.

* Be sure to install the axios library by running `npm install axios` in your terminal.

* This example uses Bootstrap, so be sure to add the Bootstrap CDN to your application's `index.html` file. You may use the following snippet below:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
```

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

* This application is supposed to allow users to search for the name of a movie via the form on the right of the page, and display information from the OMDB API on the left side. Currently the application isn't fully functional.

* Open the `src/OmdbContainer.jsx` and add the following code:

  * Add a `componentDidMount` method which should utilize the `API.jsx` module to query the OMDB API for the movie "The Matrix" when the component mounts. Then update this component's `result` state with the result of the AJAX request. You can verify you completed this step correctly by refreshing the page in your web browser. If successful, the application should display information about the movie "The Matrix" when the page first loads.

  * Add a `handleInputChange` method which should be called whenever the user types into the input field. Inside of this method, set `this.state.search` equal to the new value of the input field. You can verify you've completed this step correctly if you can now type into the input field.

  * Add a `handleFormSubmit` method which should be called when the form is submitted. Inside of this method, utilize the `API` module to search the OMDB API for the value of `this.state.search`. Then update this component's `result` state with the result. You can verify you completed this step correctly by searching for the name of a movie. If successful, you should see the movie poster and some information about the movie appear in the left card.

### Bonus

* After you get the rest of the application code working, add code so that if no movie results are found, a message is displayed indicating this in place of the `MovieDetail` component. Otherwise display the `MovieDetail` component. You can verify you completed this step correctly by searching for an empty string. If successful, you should see your message being displayed instead of any movie information.

### Hints

* Don't forget to call `event.preventDefault()` inside of any event handlers called in response to an HTML form being submitted.

* The only code you need to modify is inside of `OmdbContainer.jsx`.

* If you make it to the bonus, check out [React's Documentation on Conditional Rendering](https://facebook.github.io/react/docs/conditional-rendering.html). Use any of the techniques described to complete the bonus.


## Instructions

* Run `npm i` to download all the required node modules.

* This activity uses Bootstrap, so make sure you have the CDN added to your `index.html` file.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
```

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

* Open `src/components/JSXVariables.jsx` and notice the values being requested inside of the component:

  * Your name

  * The number of letters in your name

  * What you think about React

* Render each value inside of JSX curly braces. You will need to create JavaScript variables in order to accomplish this.

## Bonus

* Add another heading that says "My name without any vowels is: <insert name without vowels here>". Create a function that takes a string as a parameter and returns the string with the vowels removed. Run this function inside of JSX curly braces to complete the statement.

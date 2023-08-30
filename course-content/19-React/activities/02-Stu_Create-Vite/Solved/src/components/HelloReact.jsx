// TODO: Add a comment explaining what a react component is
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.

const name = 'Farley';
const num1 = 1;
const num2 = 2;

// function HelloReact() {
//   const text = 'some text';

//   // TODO: Add a comment explaining what JSX is and the significance of the curly braces
//   // JSX is a syntax extension to JavaScript that looks like HTML.
//   // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
//   // The curly braces allow us to pass values and expressions into our view.
//   console.log("text: ", text);
//   return <h2>Hello World! Here is {text}</h2>;
// }

function HelloReact() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* JavaScript expressions can be escaped inside of curly braces */}
          
          <h2>My cat's name is {name}. But you can call me...</h2>
          <h1>The JSX Boss!</h1>
          <hr />
          <h2>I can do math: {num1 + num2}.</h2>
          <h2>
            I can generate random numbers:
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1}.
          </h2>
          <h2>I can even reverse my name: {name.split('').reverse()}</h2>
        </div>
      </div>
    </div>
  );
}

export default HelloReact;

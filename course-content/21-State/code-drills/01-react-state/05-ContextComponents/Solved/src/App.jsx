// imports creatContext from react
import { createContext } from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";
import "./App.css";

// Create a context for managing the theme
const ThemeContext = createContext("light");

const App = () => {
  return (
    // Provide the "green" theme value to components within the ThemeContext
    // Here we are overwriting the context to be "green" using the Provider
    <ThemeContext.Provider value={"green"}>
      {/* Use the Layout component */}
      <Layout>
        {/* Consume the theme value from the ThemeContext */}
        <ThemeContext.Consumer>
          {/* Render the Card component with the theme */}
          {theme => <Card theme={theme} />}
        </ThemeContext.Consumer>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;
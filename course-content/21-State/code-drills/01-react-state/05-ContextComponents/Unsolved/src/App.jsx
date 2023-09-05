// TODO: add comments
import { createContext } from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";
import "./App.css"; // Set the theme of the page to default to "light"

// TODO: add comments
const ThemeContext = createContext("light");

const App = () => {
  return (
      // TODO: add comments
    <ThemeContext.Provider value={"green"}>
      <Layout>
      // TODO: add comments
        <ThemeContext.Consumer>{theme => <Card theme={theme} />}</ThemeContext.Consumer>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;

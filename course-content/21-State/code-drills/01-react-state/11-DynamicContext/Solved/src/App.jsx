import { useState } from "react";
import Home from "./pages/Home";
import AlertContext from "./utils/AlertContext";

function App() {

  const [pageState, setPageState] = useState({
    display: false,
    theme: "success",
    onClick: (theme, display) => {
      // TODO: add comments
      setPageState({ ...pageState, theme, display });
    }
  });
  // TODO: add comments
  return (
    <AlertContext.Provider value={pageState}>
      <Home />
    </AlertContext.Provider>
  );
}


export default App;

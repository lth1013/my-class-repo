import { useState } from "react";
import Home from "./pages/Home";
import ThemeContext from "./utils/ThemeContext";
import UserContext from "./utils/UserContext";
import AlertContext from "./utils/AlertContext";

function App() {

  const [user, setUser] = useState({
    name: "Bob",
    getUserToken: getUserToken
  })
  
  const [alert, setAlert] = useState({
    display: false,
    theme: "success",
    onClick: (theme, display) => setAlert({...alert, theme, display})
  })

  function getUserToken() {
    return "SampleToken123";
  }

  // TODO: add comments
    return (
      <AlertContext.Provider value={alert}>
        <UserContext.Provider value={user}>
          <ThemeContext.Provider value={"dark"}>
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </AlertContext.Provider>
    );
  }

export default App;

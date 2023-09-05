// imports the useEffect hook from react
import { useState, useEffect } from "react";
import * as API from "./utils/API";
import "./App.css";

function App() {
  const [developerState, setDeveloperState] = useState({
    excitementLevel: 0,
    lifeLongLearner: true,
    mood: "",
    name: ""
  });

   // Use the useEffect hook to perform an action after the component has rendered
   useEffect(() => {
    // Fetch developer data from the API (assuming API is an asynchronous function)
    // and update the developerState with the fetched data
    API.getDeveloper.then((res) => {
      setDeveloperState(res);
    });

    // The empty dependency array [] means this effect runs once, similar to componentDidMount
  }, []);

  return (
    <div className="card">
      <div>
        Name: {developerState.name}
      </div>
      <div>
        Status: {developerState.mood}
      </div>
      <div>
        Lifelong learner: {developerState.lifeLongLearner.toString()}
      </div>
      <div>
        Excitement Level: {developerState.excitementLevel}
      </div>
      <div className="btn-group">
        <button onClick={() => setDeveloperState({ ...developerState, mood: "lazy" })} className="btn btn-danger">
          Encourage Laziness
        </button>
        <button onClick={() => setDeveloperState({ ...developerState, mood: "determined" })} className="btn btn-success">
          Fill with Determination
        </button>
      </div>
    </div>
  );
}

export default App;

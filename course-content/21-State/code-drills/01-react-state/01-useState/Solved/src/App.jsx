// imports useState from react
import { useState } from "react";
import "./App.css";

function App() {
  // Initialize developerState using the useState hook
  const [developerState, setDeveloperState] = useState({
    excitementLevel: 10000,
    lifeLongLearner: true,
    mood: "excited",
    name: "Farley"
  });

  return (
    <div className="card">
      <div>
        {/* Display the developer's name */}
        Name: {developerState.name}
      </div>
      <div>
        {/* Display the developer's mood */}
        Status: {developerState.mood}
      </div>
      <div>
        {/* Display whether the developer is a lifelong learner */}
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
import { useContext } from "react";
import DeveloperContext from "../utils/DeveloperContext";

function DeveloperInfo() {
  // Use the useContext hook to access multiple properties from the DeveloperContext
  const { name, mood, excitementLevel } = useContext(DeveloperContext);

  return (
    <div className="card">
      <div>
        Name: {name}
      </div>
      <div>
        Status: {mood}
      </div>
      <div>
        Excitement Level: {excitementLevel}
      </div>
    </div>
  );
}

export default DeveloperInfo;

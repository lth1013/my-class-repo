// Import the createContext function from the React library
import { createContext } from 'react';

// Create a developer context with default values for developer-related data
const DeveloperContext = createContext({
  name: "",
  mood: "",
  lifeLongLearner: false,
  excitementLevel: 0
});

// Export the DeveloperContext for use in other parts of the application
export default DeveloperContext;
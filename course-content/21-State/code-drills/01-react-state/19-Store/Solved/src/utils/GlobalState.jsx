import { createContext, useReducer, useContext } from 'react';

// Create a new context for managing count-related state
const CountContext = createContext();

// Destructure the 'Provider' component from the CountContext
const { Provider } = CountContext;

// Define a reducer function to manage state changes
const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return { count: state.count + 1 };
		case 'subtract':
			return { count: state.count - 1 };
		default:
			throw new Error(`Invalid action type: ${action.type}`);
	}
};

// Create a 'CountProvider' component to provide count-related state to its children
const CountProvider = ({ value = 0, ...props }) => {
	// Use the 'useReducer' hook to manage state with the 'reducer' function
	const [state, dispatch] = useReducer(reducer, { count: value });
	// Render the 'Provider' component with 'value' and 'props'
	return <Provider value={[state, dispatch]} {...props} />;
};

// Create a custom hook 'useCountContext' to access the count-related context
const useCountContext = () => {
	return useContext(CountContext);
};

// Export the 'CountProvider' and 'useCountContext' for use in other components
export { CountProvider, useCountContext };

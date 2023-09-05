import { createContext, useReducer, useContext } from 'react';

// TODO: add comments
const CountContext = createContext();
// TODO: add comments
const { Provider } = CountContext;

// TODO: add comments
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

// TODO: add comments
const CountProvider = ({ value = 0, ...props }) => {
	// TODO: add comments
	const [state, dispatch] = useReducer(reducer, { count: value });
	// TODO: add comments
	return <Provider value={[state, dispatch]} {...props} />;
};

// TODO: add comments
const useCountContext = () => {
	return useContext(CountContext);
};

// TODO: add comments
export { CountProvider, useCountContext };

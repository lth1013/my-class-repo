import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 🔑 The react-dom module provides access to DOM-specific methods:

// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// 🔑 ReactDOM.createRoot().render() takes a React component or tree of React components and eventually renders them to the DOM.

// The argument given to .createRoot() is the target DOM element to render to (#root), and argument given to .render() is the component we want to render (<App />):

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

function Greeting() {
  // welcomeStudent is a helper function which takes in a studentName parameter and uses it to alert a string
  const welcomeStudent = (studentName) => {
    alert(`Welcome, ${studentName}!`)
  }

  return (
    <div className="container text-center">
      <h2>Welcome the Students!</h2>
      <div className="list-group">
        {/* TODO: Open the browser console and identify the error. */}
        {/* TODO: Resolve the error so that the welcomeStudent function properly alerts the name of the selected student. */}
        <button 
          onClick={welcomeStudent('Farley')} 
          className="list-group-item list-group-item-action"
        >
            Farley 
        </button>
        <button 
          onClick={welcomeStudent('Asher')} 
          className="list-group-item list-group-item-action"
        >
            Asher
        </button>
        <button 
          onClick={welcomeStudent('Sage')} 
          className="list-group-item list-group-item-action"
        >
            Sage
        </button>
      </div>
    </div>
  );
}

export default Greeting;

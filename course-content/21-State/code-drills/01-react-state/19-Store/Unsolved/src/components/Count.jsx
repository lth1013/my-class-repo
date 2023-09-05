import { useCountContext } from "../utils/GlobalState";

function Count() {
  // TODO: add comments
  const [state, dispatch] = useCountContext();

  return (
    <div className="App">
       {/* TODO: add comments */}
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch({ type: "add" })}>
        Add
      </button>
      <div>{state.count}</div>
      <button className="btn btn-danger mt-5" onClick={() => dispatch({ type: "subtract" })}>
        Subtract
      </button>
    </div>
  );
}

export default Count;

function Button({handleFormSubmit, type}) {
  return (
    <button onClick={handleFormSubmit} className={`btn btn-lg input-lg btn-${type}`}>
      search
    </button>
  );
}

export default Button;

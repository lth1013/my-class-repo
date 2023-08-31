
function Input({ name, value, handleInputChange, placeholder}) {
  return (
    <div className="input-group input-group-lg">
      <input name = {name} value= {value} className="form-control" onChange={handleInputChange} type= "text" placeholder={placeholder} />
    </div>
  );
}

export default Input;

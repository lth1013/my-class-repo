import { useState } from 'react';
import './style.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  // const [formInfo, setformInfo] = useState({
  //   firstName: "",
  //   lastName: ""
  // });

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  // const orThisWayForBoth = e => {
  //     setformInfo({...formInfo, [e.target.name]: e.target.value});
  // }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');

    // alert(`Hello ${formInfo.firstName} ${formInfo.lastName}`);

    // setformInfo({ 
    //   firstName: "",
    //   lastName: ""
    // })
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {firstName} {lastName}
        {/* Hello {formInfo.firstName} {formInfo.lastName} */}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          // value={formInfo.firstName}
          name="firstName"
          onChange={handleInputChange}
          // onChange={orThisWayForBoth}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          // value={formInfo.lastName}
          name="lastName"
          onChange={handleInputChange}
          // onChange={orThisWayForBoth}
          type="text"
          placeholder="Last Name"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

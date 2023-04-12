import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function useAddContact(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const checkNumber = (num) => {
    
    if (num.length !== 9 && num.length !== 11) return false;

    for (let c in num) 
        if (!(c >= '0' && c <= '9'))
            return false;
    
    return true;
  }

  const addContactHandler = (e) => {
    e.preventDefault();
    if (name === "" || number === "") {
      alert("All input fields are mandatory!");
      return;
    }
    
    if (!checkNumber(number)) {
        alert("Invalid number!");
        return;
    }
    props.addContactHandler({name, number});
    // add the contact logic
    setName("");
    setNumber("");
    navigate('/');
  };

  return [name, number, setName, setNumber, addContactHandler];
}

function AddContact(props) {

  const [name, number, setName, setNumber, addContactHandler] = useAddContact(props);

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={addContactHandler}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Number</label>
          <input
            type="text"
            name="number"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="ui button blue">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default AddContact;

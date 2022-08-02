import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo.js';

const GeneralForm = () => {
  const [currentName, setCurrentName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [hidden, setHidden] = useState(false);

  const onSubmitGeneral = (e) => {
    e.preventDefault();
    setInfo({
      name: currentName,
      email: currentEmail,
      phone: currentPhone
    });
    setCurrentName('');
    setCurrentEmail('');
    setCurrentPhone('');
    setHidden(true);
  }

  const editGeneral = (e) => {
    return(
      setHidden(false),
      setCurrentName(info.name),
      setCurrentEmail(info.email),
      setCurrentPhone(info.phone),
      setInfo({
        name: '',
        email: '',
        phone: ''
      })
    )
  };


  const nameChange = (e) => {
    console.log(e.target.value);
    setCurrentName(e.target.value);
  };

  const emailChange = (e) => {
    setCurrentEmail(e.target.value);
  };

  const phoneChange = (e) => {
    setCurrentPhone(e.target.value);
  };



  if (hidden) {
    return (
      <div className="generalContHidden">
        {<GeneralInfo info={info}/>}
        <button onClick={editGeneral}>Edit</button>
      </div>
    )
  } else {
    return (
      <div className="generalCont">
        <div id="generalTitle">Enter General Personal Information Below:</div>
        <form onSubmit={onSubmitGeneral} id="generalForm">
          <label htmlFor="nameInput">Name:</label>
          <input
            type="text"
            id="nameInput"
            value={currentName}
            onChange={nameChange}
          />
          <label htmlFor="emailInput">Email:</label>
          <input
            type="text"
            id="emailInput"
            value={currentEmail}
            onChange={emailChange}
          />
          <label htmlFor="phoneInput">Phone:</label>
          <input
            type="text"
            id="phoneInput"
            value={currentPhone}
            onChange={phoneChange}
          />
          <button type="submit">
            Submit
          </button>
        </form>
        {<GeneralInfo info={info}/>}

      </div>
    )
  }
}

export default GeneralForm;
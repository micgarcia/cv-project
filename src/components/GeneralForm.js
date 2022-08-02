import React from 'react';
import GeneralInfo from './GeneralInfo.js';

class GeneralForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentName: '',
      currentEmail: '',
      currentPhone: '',
      info: {
        name: '',
        email: '',
        phone: ''
      },
      hidden: false,
    }
  }

  nameChange = (e) => {
    this.setState({
      currentName : e.target.value
    });
  };

  emailChange = (e) => {
    this.setState({
      currentEmail : e.target.value
    });
  };

  phoneChange = (e) => {
    this.setState({
      currentPhone : e.target.value
    });
  };

  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState({
      info: {
        name: this.state.currentName,
        email: this.state.currentEmail,
        phone: this.state.currentPhone
      },
      currentName: '',
      currentEmail: '',
      currentPhone: '',
      hidden: true,
    });

  };

  editGeneral = (e) => {
    this.setState({
      hidden: false,
      currentName: this.state.info.name,
      currentEmail: this.state.info.email,
      currentPhone: this.state.info.phone,
      info: {
        name: '',
        email: '',
        phone: ''
      }
    });
  };

  render() {
    const { currentName, currentEmail, currentPhone, info, hidden} = this.state;

    if (hidden) {
      return (
        <div>
          {console.log(hidden)}
          {<GeneralInfo info={info}/>}
          <button onClick={this.editGeneral}>Edit General Information</button>
        </div>
      )
    } else {
      return (
        <div className="generalCont">
          <div id="generalTitle">Enter General Personal Information Below:</div>
          <form onSubmit={this.onSubmitGeneral} id="generalForm">
            <label htmlFor="nameInput">Name:</label>
            <input
              type="text"
              id="nameInput"
              value={currentName}
              onChange={this.nameChange}
            />
            <label htmlFor="emailInput">Email:</label>
            <input
              type="text"
              id="emailInput"
              value={currentEmail}
              onChange={this.emailChange}
            />
            <label htmlFor="phoneInput">Phone:</label>
            <input
              type="text"
              id="phoneInput"
              value={currentPhone}
              onChange={this.phoneChange}
            />
            <button type="submit">
              Submit General Information
            </button>
          </form>
          {<GeneralInfo info={info}/>}

        </div>
      )
    }
  }
}

export default GeneralForm;
import React from 'react';
import EduInfo from './EduInfo.js';

class EduForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSchool: '',
      currentMajor: '',
      currentDate: '',
      info: {
        school: '',
        major: '',
        date: ''
      },
      hidden: false
    };
  };

  schoolChange = (e) => {
    this.setState({
      currentSchool : e.target.value
    });
  };

  majorChange = (e) => {
    this.setState({
      currentMajor : e.target.value
    });
  };

  dateChange = (e) => {
    this.setState({
      currentDate : e.target.value
    });
  };

  onSubmitEdu = (e) => {
    e.preventDefault();
    this.setState({
      info: {
        school: this.state.currentSchool,
        major: this.state.currentMajor,
        date: this.state.currentDate
      },
      currentSchool: '',
      currentMajor: '',
      currentDate: '',
      hidden: true,
    });
  };

  editEdu = (e) => {
    this.setState({
      hidden: false,
      currentSchool: this.state.info.school,
      currentMajor: this.state.info.major,
      currentDate: this.state.info.date,
      info: {
        school: '',
        major: '',
        date: '',
      }
    });
  };

  render() {
    const { currentSchool, currentMajor, currentDate, info, hidden } = this.state;

    if (hidden) {
      return (
        <div>
          {console.log(hidden)}
          {<EduInfo info={info}/>}
          <button onClick={this.editEdu}>Edit Education Information</button>
        </div>
      )
    } else {
      return (
        <div className="eduCont">
          <div id="eduTitle">Enter Education Information Below</div>
          <form onSubmit={this.onSubmitEdu} id="eduForm">
            <label htmlFor="schoolInput">School:</label>
            <input
             type="text"
             id="schoolInput"
             value={currentSchool}
             onChange={this.schoolChange}
             />
            <label htmlFor="majorInput">Major:</label>
            <input
             type="text"
             id="majorInput"
             value={currentMajor}
             onChange={this.majorChange}
             />
            <label htmlFor="dateInput">Graduation Year:</label>
            <input
             type="text"
             id="dateInput"
             value={currentDate}
             onChange={this.dateChange}
             />
             <button type="submit">
              Submit Education Information
             </button>
          </form>
          {<EduInfo info={info}/>}
        </div>
      )
    }
  }


}

export default EduForm;
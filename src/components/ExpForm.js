import React from 'react';
import ExpInfo from './ExpInfo.js';

class ExpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCompany: '',
      currentPosition: '',
      currentTasks: '',
      currentStart: '',
      currentEnd: '',
      info: {
        company: '',
        position: '',
        tasks: '',
        start: '',
        end: '',
      },
      hidden: false,
    }
  }

  companyChange = (e) => {
    this.setState({
      currentCompany : e.target.value
    });
  };

  positionChange = (e) => {
    this.setState({
      currentPosition : e.target.value
    });
  };

  tasksChange = (e) => {
    this.setState({
      currentTasks : e.target.value
    });
  };

  startChange = (e) => {
    this.setState({
      currentStart : e.target.value
    });
  };

  endChange = (e) => {
    this.setState({
      currentEnd : e.target.value
    });
  };

  onSubmitExp = (e) => {
    e.preventDefault();
    this.setState({
      info: {
        company: this.state.currentCompany,
        position: this.state.currentPosition,
        tasks: this.state.currentTasks,
        start: this.state.currentStart,
        end: this.state.currentEnd
      },
      currentCompany: '',
      currentPosition: '',
      currentTasks: '',
      currentStart: '',
      currentEnd: '',
      hidden: true,
    });

  };

  editExp = (e) => {
    this.setState({
      hidden: false,
      currentCompany: this.state.info.company,
      currentPosition: this.state.info.position,
      currentTasks: this.state.info.tasks,
      currentStart: this.state.info.start,
      currentEnd: this.state.info.end,
      info: {
        company: '',
        position: '',
        tasks: '',
        start: '',
        end: '',
      }
    });
  };

  render() {
    const { currentCompany, currentPosition, currentTasks, currentStart, currentEnd, info, hidden} = this.state;

    if (hidden) {
      return (
        <div className='expContHidden'>
          {<ExpInfo info={info}/>}
          <button onClick={this.editExp}>Edit</button>
        </div>
      )
    } else {
      return (
        <div className="expCont">
          <div id="expTitle">Enter Practical Experience Information Below:</div>
          <form onSubmit={this.onSubmitExp} id="expForm">
            <label htmlFor="companyInput">Company:</label>
            <input
              type="text"
              id="companyInput"
              value={currentCompany}
              onChange={this.companyChange}
            />
            <label htmlFor="positionInput">Position:</label>
            <input
              type="text"
              id="positionInput"
              value={currentPosition}
              onChange={this.positionChange}
            />
            <label htmlFor="tasksInput">Tasks/Responsibilities:</label>
            <input
              type="text"
              id="tasksInput"
              value={currentTasks}
              onChange={this.tasksChange}
            />
            <label htmlFor="startInput">Start Date:</label>
            <input
              type="text"
              id="startInput"
              value={currentStart}
              onChange={this.startChange}
            />
            <label htmlFor="endInput">End Date:</label>
            <input
              type="text"
              id="endInput"
              value={currentEnd}
              onChange={this.endChange}
            />
            <button type="submit">
              Submit
            </button>
          </form>
          {<ExpInfo info={info}/>}

        </div>
      )
    }
  }
}

export default ExpForm;
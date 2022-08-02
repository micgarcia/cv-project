import React from 'react';

class ExpInfo extends React.Component {
  constructor(props) {
    super();
  };

  render() {
    return (
      <div id="expInfo">
        <div>Company: {this.props.info.company}</div>
        <div>Position: {this.props.info.position}</div>
        <div>Tasks: {this.props.info.tasks}</div>
        <div>Start Date: {this.props.info.start}</div>
        <div>End Date: {this.props.info.end}</div>
      </div>
    );
  };
};

export default ExpInfo;
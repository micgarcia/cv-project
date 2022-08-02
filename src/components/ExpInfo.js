import React from 'react';

class ExpInfo extends React.Component {
  constructor(props) {
    super();
  };

  render() {
    return (
      <div id="expInfo">
        <div>{this.props.info.company}</div>
        <div>{this.props.info.position}</div>
        <div>{this.props.info.tasks}</div>
        <div>{this.props.info.start}</div>
        <div>{this.props.info.end}</div>
      </div>
    );
  };
};

export default ExpInfo;
import React from 'react';

class GeneralInfo extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    return (
      <div id="generalInfo">
        <div>{this.props.info.name}</div>
        <div>{this.props.info.email}</div>
        <div>{this.props.info.phone}</div>
      </div>
    );
  };
};

export default GeneralInfo;
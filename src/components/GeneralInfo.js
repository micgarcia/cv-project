import React from 'react';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      props
    }

  };


  render() {

    return (
      <div id="generalInfo">
        <div>Name: {this.props.info.name}</div>
        <div>Email: {this.props.info.email}</div>
        <div>Phone: {this.props.info.phone}</div>
      </div>
    );
  };
};

export default GeneralInfo;
import React from 'react';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    console.log(props)

    this.state = {
      props
    }

    console.log(this.state);
  };

  /*
  prepInfo = () => {
    this.setState({
      info : {
        name : 'Name: ' + this.state.name,
      }
    })
  }*/

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
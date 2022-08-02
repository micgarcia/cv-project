import React from 'react';

class EduInfo extends React.Component {
  constructor(props) {
    super();
  };

  render() {
    return (
      <div id="eduInfo">
        <div>School: {this.props.info.school}</div>
        <div>Major: {this.props.info.major}</div>
        <div>Graduation Year: {this.props.info.date}</div>
      </div>
    );
  };
};

export default EduInfo;
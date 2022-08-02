import React from 'react';

class EduInfo extends React.Component {
  constructor(props) {
    super();
  };

  render() {
    return (
      <div id="eduInfo">
        <div>{this.props.info.school}</div>
        <div>{this.props.info.major}</div>
        <div>{this.props.info.date}</div>
      </div>
    );
  };
};

export default EduInfo;
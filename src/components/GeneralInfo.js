import React from 'react';

const GeneralInfo = (props) => {
  return (
    <div id="generalInfo">
        <div>Name: {props.info.name}</div>
        <div>Email: {props.info.email}</div>
        <div>Phone: {props.info.phone}</div>
    </div>
  )
}

export default GeneralInfo;
import React, { useState, useEffect } from 'react';
import GeneralForm from './components/GeneralForm.js';
import EduForm from './components/EduForm.js';
import ExpForm from './components/ExpForm.js';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <div className="cvCont">
        <div className="title">CV Builder</div>
         <GeneralForm/>
         <EduForm/>
         <ExpForm/>
       </div>
    </div>
  )
}

export default App;


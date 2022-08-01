import React from 'react';
import GeneralForm from './components/GeneralForm.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: '',
        email: '',
        phone:'',
      }
    }
  }


  render() {

    return (
      <div className="App">
        <div className="cvCont">
          <GeneralForm handler = {this.handler}/>
        </div>

      </div>
    );
  }
}

export default App;
/*
{
    include a component for each section (maybe one for form and
      one for the displayed content)
      should look like: <General name={(this.state.name.bind(this))} phone=(...)/>
      should have state object that contains all of the relevant info
        e.g. name, phone, education (more complex info branches into futher objects)
      Look at task-app to see how to handle tracking input change/submitting
        and setting/changing the state object
        }
        */
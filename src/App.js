import React, { Component } from "react";
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import Pass from './schemas/Pass';
import './App.css';

class App extends Component{
  render() {
    return(
      <div className="App">
        <h1>Enter Pass</h1>
        <AutoForm schema={Pass} />
      </div>
    );
  }
}

export default App;

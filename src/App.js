import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import Pass from './schemas/Pass';
import './App.css';

const PassForm = () => (
  <div>
    <h1>Enter Pass</h1>
    <AutoForm schema={Pass} />
  </div>
);

const Index = () => (
  <h1>Passes</h1>
);

const App = () => (
  <Router>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">Talbot Racing ET Predictor</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/pass">Enter Pass</Link>
          </li>
        </ul>
      </div>
    </nav>
    <main role="main" className="container">
      <Route path="/" exact component={Index} />
      <Route path="/pass" component={PassForm} />
    </main>
  </Router>




);

export default App;

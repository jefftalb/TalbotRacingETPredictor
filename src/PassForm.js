import React from 'react';
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import { Redirect } from 'react-router-dom';
import { fetch } from 'whatwg-fetch';
import Pass from './schemas/Pass';

class PassForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(pass) {
    fetch('/api/passes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pass),
    })
    .then(() => {
      this.setState({ submitted: true });
    });
  }

  render() {
    const { submitted } = this.state;
    if (submitted) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Enter Pass</h1>
        <AutoForm
          schema={Pass}
          onSubmit={(pass) => {
            this.handleSubmit(pass);
          }}
        />
      </div>
    );
  }
}

export default PassForm;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  SimpleForm,
  TextField,
} from 'example-component-lib';

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitting!');
  }

  return (
    <div>
      <SimpleForm
        headerText="Login"
        onSubmit={handleSubmit}
      >
        <Label>email</Label>
        <TextField
        />
        <Label>password</Label>
        <TextField
          type="password"
        />
      </SimpleForm>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;

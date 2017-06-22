import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Header,
  Label,
  TextField,
  TextWrapper,
} from 'example-component-lib';

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <Card>
        <Header>Login</Header>
        <Label>email</Label>
        <TextField
          activeColor="purple"
        />
        <Label>password</Label>
        <TextField
          activeColor="purple"
          type="password"
        />
        <TextWrapper textAlign="right">
        <Button
          bgColor="white"
          fontColor="purple"
        >
          Cancel
        </Button>
        <Button
          bgColor="purple"
        >
          Submit
        </Button>
      </TextWrapper>
    </Card>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;

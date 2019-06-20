import React from 'react';
import { connect } from 'react-redux';
import Register from '../views/Register';
import { registerUser } from '../apiRequests/register';

class RegisterContainer extends React.Component {
  handleSignUp = async e => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const user = {
      username,
      email,
      password,
    };

    const data = await registerUser(user);
    console.log(data);
  };

  render() {
    return <Register signup={this.handleSignUp} />;
  }
}

export default RegisterContainer;

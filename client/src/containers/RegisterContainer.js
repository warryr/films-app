import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Register from '../views/Register';
import validate from '../util/validation/validateRegister';
import { setRegisterValidation, registerUserRequested } from '../actions/actionCreators';

class RegisterContainer extends React.Component {
  handleSignUp = e => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const user = {
      username,
      email,
      password,
    };

    const valid = validate({ ...user, confirmPassword }, this.props.setValidation);

    if (valid) {
      this.props.registerUser(user);
    }
  };

  render() {
    return this.props.registerCode === 200 ? (
      <Redirect to='/login' />
    ) : (
      <Register
        signup={this.handleSignUp}
        usernameError={this.props.validationErrors.username}
        emailError={this.props.validationErrors.email}
        passwordError={this.props.validationErrors.password}
        confirmError={this.props.validationErrors.confirmPassword}
        registerErrors={this.props.registerErrors}
      />
    );
  }
}

const mapStateToProps = state => ({
  validationErrors: state.validation.registerValidation.errors || {},
  registerCode: state.register.code,
  registerErrors: state.register.errors,
});

const mapDispatchToProps = dispatch => ({
  setValidation: validation => dispatch(setRegisterValidation(validation)),
  registerUser: user => dispatch(registerUserRequested(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);

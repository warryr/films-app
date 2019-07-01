import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../views/Register';
import validate from '../util/validation/validateRegister';
import { setRegisterValidation, registerUserRequested } from '../actions/actions';

class RegisterContainer extends React.Component {
  handleSignUp = values => {
    const username = values.username;
    const email = values.email;
    const password = values.password;
    const confirmPassword = values.confirmPassword;

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

  render = () => (
    <RegisterForm
      onSubmit={this.handleSignUp}
      usernameError={this.props.validationErrors.username}
      emailError={this.props.validationErrors.email}
      passwordError={this.props.validationErrors.password}
      confirmError={this.props.validationErrors.confirmPassword}
      registerErrors={this.props.registerErrors}
    />
  );
}

const mapStateToProps = state => ({
  validationErrors: state.validation.registerValidation.errors || {},
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

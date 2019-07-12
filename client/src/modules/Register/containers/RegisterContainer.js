import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../views';
import { registerUserRequested } from '../actions';
import validate from '../util/validate';

class RegisterContainer extends PureComponent {
  state = {
    validation: {
      valid: false,
      errors: {},
    },
  };

  handleSignUp = values => {
    const user = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    const confirmPassword = values.confirmPassword;

    this.setState(
      {
        validation: validate({ ...user, confirmPassword }),
      },
      () => {
        if (this.state.validation.valid) {
          this.props.registerUser();
        }
      }
    );
  };

  render = () => (
    <RegisterForm
      onSubmit={this.handleSignUp}
      usernameError={this.state.validation.errors.username}
      emailError={this.state.validation.errors.email}
      passwordError={this.state.validation.errors.password}
      confirmError={this.state.validation.errors.confirmPassword}
      registerErrors={this.props.registerErrors}
    />
  );
}

const mapStateToProps = state => ({
  registerErrors: state.register.errors,
});

const mapDispatchToProps = dispatch => ({
  registerUser: () => dispatch(registerUserRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);

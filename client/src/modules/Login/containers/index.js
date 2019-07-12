import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../view';
import { loginUserRequested } from '../actions';
import validate from '../util/validate';

class LoginContainer extends React.Component {
  state = {
    validation: {
      valid: false,
      errors: {},
    },
  };

  handleLogIn = values => {
    const user = {
      username: values.username,
      password: values.password,
    };

    this.setState(
      {
        validation: validate(user),
      },
      () => {
        if (this.state.validation.valid) {
          this.props.loginUser();
        }
      }
    );
  };

  render = () => (
    <LoginForm
      onSubmit={this.handleLogIn}
      usernameError={this.state.validation.errors.username}
      passwordError={this.state.validation.errors.password}
      loginErrors={this.props.loginErrors}
    />
  );
}

const mapStateToProps = state => ({
  loginErrors: state.login.errors,
});

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUserRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

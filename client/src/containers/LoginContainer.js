import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../views/Login';
import validate from '../util/validation/validateLogin';
import { setLoginValidation, loginUserRequested } from '../actions/actions';

class LoginContainer extends React.Component {
  handleLogIn = values => {
    const username = values.username;
    const password = values.password;

    const user = {
      username,
      password,
    };

    const valid = validate(user, this.props.setValidation);

    if (valid) {
      this.props.loginUser(user);
    }
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.handleLogIn}
        usernameError={this.props.validationErrors.username}
        passwordError={this.props.validationErrors.password}
        loginErrors={this.props.loginErrors}
      />
    );
  }
}

const mapStateToProps = state => ({
  validationErrors: state.validation.loginValidation.errors || {},
  loginErrors: state.login.errors,
});

const mapDispatchToProps = dispatch => ({
  setValidation: validation => dispatch(setLoginValidation(validation)),
  loginUser: user => dispatch(loginUserRequested(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

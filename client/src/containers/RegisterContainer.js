import React from 'react';
import { connect } from 'react-redux';
import Register from '../views/Register';
import validate from '../util/validation/validateRegister';
import { registerUser } from '../apiRequests/register';
import { setRegisterValidation } from '../actions/actionCreators';

class RegisterContainer extends React.Component {
  handleSignUp = async e => {
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

    if (!valid) {
      console.log(this.props.errors);
    }

    if (valid) {
      const data = await registerUser(user);
      console.log(data);
      // redirect
    }
  };

  render() {
    return (
      <Register
        signup={this.handleSignUp}
        usernameError={this.props.errors.username}
        emailError={this.props.errors.email}
        passwordError={this.props.errors.password}
        confirmError={this.props.errors.confirmPassword}
      />
    );
  }
}

const mapStateToProps = state => ({
  errors: state.user.registerValidation.errors || {},
});

const mapDispatchToProps = dispatch => ({
  setValidation: validation => dispatch(setRegisterValidation(validation)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);

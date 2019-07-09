import React from 'react';
import { connect } from 'react-redux';
import Header from '../views/Header';
import { unsetCurrentUser } from '../actions/actions';
import { history } from '../reducers/store';

class HeaderContainer extends React.Component {
  handleLogOut = () => {
    this.props.logoutUser();
    history.push('/login');
  };

  render = () => {
    return <Header username={this.props.username} logOut={this.handleLogOut} />;
  };
}

const mapStateToProps = state => ({
  username: state.currentUser.username,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(unsetCurrentUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);

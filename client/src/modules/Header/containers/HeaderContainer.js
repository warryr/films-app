import React from 'react';
import { connect } from 'react-redux';

import Header from '../views';
import { unsetCurrentUser } from '../../Account/actions';
import { history } from '../../../redux/store';

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
  username: state.account.username,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(unsetCurrentUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);

import React from 'react';
import { connect } from 'react-redux';
import Error from '../views/Error';

class HeaderContainer extends React.Component {
  render = () => {
    return <Error message={this.props.loadingError} />;
  };
}

const mapStateToProps = state => ({
  loadingError: state.catalog.error,
});

export default connect(mapStateToProps)(HeaderContainer);

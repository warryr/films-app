import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Error from '../views';

class HeaderContainer extends PureComponent {
  render = () => {
    return <Error message={this.props.loadingError} />;
  };
}

const mapStateToProps = state => ({
  loadingError: state.catalog.categories.error || state.catalog.films.error,
});

export default connect(mapStateToProps)(HeaderContainer);

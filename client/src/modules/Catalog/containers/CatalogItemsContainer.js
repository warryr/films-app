import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatalogItems from '../views/CatalogItems';

class CatalogItemsContainer extends PureComponent {
  render = () => {
    return (
      <CatalogItems
        films={this.props.films.items}
        loading={this.props.films.loading}
        hasMore={this.props.films.hasMore}
        handleNextPage={this.props.handleNextPage}
      />
    );
  };
}

const mapStateToProps = state => ({
  films: state.catalog.films,
});

CatalogItemsContainer.propTypes = {
  handleNextPage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CatalogItemsContainer);

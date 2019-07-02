import React from 'react';
import { connect } from 'react-redux';
import Catalog from '../views/Catalog';
import { getCatalogRequested } from '../actions/actions';

class CatalogContainer extends React.Component {
  render = () => <Catalog items={this.props.films} loading={this.props.loading} />;

  componentDidMount = () => {
    //this.props.getFilms();
  };
}

const mapStateToProps = state => ({
  loading: state.catalog.loading,
  films: state.catalog.films || [],
});

const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(getCatalogRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContainer);

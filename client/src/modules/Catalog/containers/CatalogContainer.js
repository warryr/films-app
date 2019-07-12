import React from 'react';
import { connect } from 'react-redux';

import Catalog from '../views/Catalog';
import { getCategoriesRequested, getFilmsRequested, cleanFilms, updateCatalogSettings } from '../actions';

class CatalogContainer extends React.Component {
  state = {
    currentPage: 1,
  };

  handleNextPage = () => {
    const currentPage = this.state.currentPage;

    this.setState({ currentPage: currentPage + 1 });
    this.props.updateSettings({ page: currentPage + 1 });
  };

  handleSettings = newSettings => {
    this.setState({ currentPage: 1 });
    this.props.updateSettings({ page: 1, ...newSettings });
    this.props.cleanFilms();
  };

  componentDidMount = () => {
    this.props.getCategories();
    this.props.getFilms();
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.settings !== this.props.settings) {
      this.props.getFilms();
    }
  };

  render = () => (
    <Catalog
      error={this.props.categoriesError || this.props.filmsError}
      handleSettings={this.handleSettings}
      handleNextPage={this.handleNextPage}
    />
  );
}

const mapStateToProps = state => ({
  settings: state.catalog.settings,
  categoriesError: state.catalog.categories.error,
  filmsError: state.catalog.films.error,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesRequested()),
  getFilms: () => dispatch(getFilmsRequested()),
  updateSettings: settings => dispatch(updateCatalogSettings(settings)),
  cleanFilms: () => dispatch(cleanFilms()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContainer);

import React from 'react';
import { connect } from 'react-redux';
import Catalog from '../views/Catalog';
import { getFilmsRequested, getCategoriesRequested, updateCatalogSettings } from '../actions/actions';

class CatalogContainer extends React.Component {
  handleSettings = newSettings => {
    this.props.updateSettings(newSettings);
  };

  componentDidMount = () => {
    this.props.getCategories();
    this.props.getFilms(this.props.settings);
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.settings !== this.props.settings) {
      this.props.getFilms(this.props.settings);
    }
  };

  render = () => (
    <Catalog
      films={this.props.films}
      categories={this.props.categories}
      filmsLoading={this.props.filmsLoading}
      filmsError={this.props.filmsError}
      categoriesLoading={this.props.categoriesLoading}
      categoriesError={this.props.categoriesError}
      handleSettings={this.handleSettings}
    />
  );
}

const mapStateToProps = state => ({
  settings: state.catalog.settings,
  categories: state.catalog.categories.items,
  films: state.catalog.films.items,
  categoriesLoading: state.catalog.categories.loading,
  filmsLoading: state.catalog.films.loading,
  categoriesError: state.catalog.categories.error,
  filmsError: state.catalog.films.error,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesRequested()),
  getFilms: settings => dispatch(getFilmsRequested(settings)),
  updateSettings: settings => dispatch(updateCatalogSettings(settings)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContainer);

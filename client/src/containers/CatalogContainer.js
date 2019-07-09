import React from 'react';
import { connect } from 'react-redux';
import Catalog from '../views/Catalog';
import { getFilmsRequested, getCategoriesRequested, updateCatalogSettings, updateHasMore } from '../actions/actions';

class CatalogContainer extends React.Component {
  handleSettings = newSettings => {
    this.props.updateSettings(newSettings);
    this.props.updateHasMore(true);
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
      films={this.props.films}
      categories={this.props.categories}
      filmsLoading={this.props.filmsLoading}
      filmsError={this.props.filmsError}
      categoriesLoading={this.props.categoriesLoading}
      categoriesError={this.props.categoriesError}
      passSettings={this.handleSettings}
      hasMore={this.props.hasMore}
    />
  );
}

const mapStateToProps = state => ({
  hasMore: state.catalog.hasMore,
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
  getFilms: () => dispatch(getFilmsRequested()),
  updateSettings: settings => dispatch(updateCatalogSettings(settings)),
  updateHasMore: hasMore => dispatch(updateHasMore(hasMore)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContainer);

import React from 'react';
import { connect } from 'react-redux';
import Catalog from '../views/Catalog';
import { getFilmsRequested, getCategoriesRequested } from '../actions/actions';

class CatalogContainer extends React.Component {
  getFilmsByCategory = categoryId => {
    if (!categoryId) {
      this.props.history.push('catalog');
      this.props.getFilms();
    } else {
      this.props.history.push(`?category=${categoryId}`);
      this.props.getFilms(`?category=${categoryId}`);
    }
  };

  componentDidMount = () => {
    this.props.getCategories();
    this.props.getFilms();
  };

  render = () => (
    <Catalog
      films={this.props.films}
      categories={this.props.categories}
      filmsLoading={this.props.filmsLoading}
      filmsError={this.props.filmsError}
      categoriesLoading={this.props.categoriesLoading}
      categoriesError={this.props.categoriesError}
      getByCategory={this.getFilmsByCategory}
    />
  );
}

const mapStateToProps = state => ({
  categories: state.catalog.categories.items,
  films: state.catalog.films.items,
  categoriesLoading: state.catalog.categories.loading,
  filmsLoading: state.catalog.films.loading,
  categoriesError: state.catalog.categories.error,
  filmsError: state.catalog.films.error,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesRequested()),
  getFilms: query => dispatch(getFilmsRequested(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContainer);

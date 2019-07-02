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
      items={this.props.films}
      categories={this.props.categories}
      iLoading={this.props.filmsLoading}
      cLoading={this.props.categoriesLoading}
      getByCategory={this.getFilmsByCategory}
    />
  );
}

const mapStateToProps = state => ({
  categories: state.catalog.categories.items,
  films: state.catalog.films.items,
  categoriesLoading: state.catalog.categories.loading,
  filmsLoading: state.catalog.films.loading,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesRequested()),
  getFilms: arg => dispatch(getFilmsRequested(arg)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContainer);

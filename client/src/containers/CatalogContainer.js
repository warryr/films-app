import React from 'react';
import { connect } from 'react-redux';
import CatalogItem from '../views/CatalogItem';
import { getCatalogRequested } from '../actions/actions';

class CatalogContainer extends React.Component {
  render = () => {
    return this.props.loading
      ? 'Loading...'
      : this.props.films.map((film, index) => (
          <CatalogItem
            key={index}
            title={film.title}
            description={film.description}
            category={film.category}
            avatar={film.avatar}
          />
        ));
  };

  componentDidMount = () => {
    this.props.getFilms(this.props.token);
  };
}

const mapStateToProps = state => ({
  loading: state.catalog.loading,
  token: state.currentUser.token,
  films: state.catalog.films,
});

const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(getCatalogRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContainer);

import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CatalogMenu from '../CatalogMenu';
import CatalogItems from '../CatalogItems';

const Catalog = props => {
  const classes = useStyles();
  return (
    <Container className={classes.paper}>
      <CssBaseline />
      <Container className={classes.container}>
        <CatalogMenu
          categories={props.categories}
          loading={props.categoriesLoading}
          error={props.categoriesError}
          getByCategory={props.getByCategory}
        />
        <CatalogItems films={props.films} loading={props.filmsLoading} error={props.filmsError} />
      </Container>
    </Container>
  );
};

Catalog.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  films: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
  categoriesLoading: PropTypes.bool.isRequired,
  categoriesError: PropTypes.string.isRequired,
  filmsLoading: PropTypes.bool.isRequired,
  filmsError: PropTypes.string.isRequired,
  getByCategory: PropTypes.func.isRequired,
};

export default Catalog;

import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CatalogMenu from '../CatalogMenu';
import CatalogItems from '../CatalogItems';

const Catalog = props => {
  const classes = useStyles();
  return props.categoriesError || props.filmsError ? (
    <Container className={classes.paper}>
      <Typography className={classes.error}>{props.categoriesError || props.filmsError}</Typography>
      <Typography className={classes.error}>
        <Link href='/login'>Login</Link> properly to get valid token
      </Typography>
    </Container>
  ) : (
    <Container className={classes.paper}>
      <CssBaseline />
      <Container className={classes.container}>
        <CatalogMenu
          categories={props.categories}
          loading={props.categoriesLoading}
          getByCategory={props.getByCategory}
        />
        <CatalogItems films={props.films} loading={props.filmsLoading} />
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

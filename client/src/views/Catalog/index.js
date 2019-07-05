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
        <Link href='/login'>Log in</Link> properly to get valid token
      </Typography>
    </Container>
  ) : (
    <Container className={classes.paper}>
      <CssBaseline />
      <Container className={classes.container}>
        <CatalogMenu
          categories={props.categories}
          loading={props.categoriesLoading}
          handleSettings={props.handleSettings}
        />
        <CatalogItems
          films={props.films}
          loading={props.filmsLoading}
          handleNextPage={props.handleNextPage}
          hasMore={props.hasMore}
        />
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
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      rating: PropTypes.number,
      category: PropTypes.object.isRequired,
    })
  ),
  categoriesLoading: PropTypes.bool.isRequired,
  categoriesError: PropTypes.string,
  filmsLoading: PropTypes.bool.isRequired,
  filmsError: PropTypes.string,
  handleSettings: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Catalog;

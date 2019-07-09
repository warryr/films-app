import React, { useState } from 'react';
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

  const [currentPage, setPage] = useState(1);
  const [currentSearchInput, setSearchInput] = useState('');
  const [currentCategory, setCategory] = useState('');
  const [pressedButton, setPressedButton] = useState();
  const [sortValues, setSortValues] = useState({
    sort: 'title',
    order: 1,
  });

  const handleNextPage = () => {
    setPage(currentPage + 1);
    props.passSettings({ page: currentPage + 1 });
  };

  const handleInput = event => {
    const value = event.target.value;

    if (value !== currentSearchInput) {
      handleSettings({ search: value });
    }

    setSearchInput(value);
  };

  const handleChange = event => {
    setSortValues(otherValues => ({
      ...otherValues,
      [event.target.name]: event.target.value,
    }));
    handleSettings({ [event.target.name]: event.target.value });
  };

  const handleClick = (nextCategory, index) => {
    pressedButton === index ? setPressedButton() : setPressedButton(index);
    setCategory(nextCategory);

    currentCategory === nextCategory && pressedButton === index
      ? handleSettings({ category: '' })
      : handleSettings({ category: nextCategory });
  };

  const handleSettings = newSettings => {
    setPage(1);
    props.passSettings({ page: 1, ...newSettings });
  };

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
          sortValues={sortValues}
          pressedButton={pressedButton}
          handleClick={handleClick}
          handleChange={handleChange}
          handleInput={handleInput}
        />
        <CatalogItems
          films={props.films}
          loading={props.filmsLoading}
          handleNextPage={handleNextPage}
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
  passSettings: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Catalog;

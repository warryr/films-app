import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useStyles } from './styles';
import CatalogMenuContainer from '../../CatalogMenu/containers';
import CatalogItemsContainer from '../../CatalogItems/containers';

const Catalog = props => {
  const classes = useStyles();

  return props.error ? (
    <Redirect to='/error' />
  ) : (
    <Container className={classes.paper}>
      <CssBaseline />
      <Container className={classes.container}>
        <CatalogMenuContainer handleSettings={props.handleSettings} />
        <CatalogItemsContainer handleNextPage={props.handleNextPage} />
      </Container>
    </Container>
  );
};

Catalog.propTypes = {
  error: PropTypes.string,
  handleSettings: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
};

export default Catalog;

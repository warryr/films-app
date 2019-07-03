import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const handleClick = (chosen, setCategory, categoryId, getByCategory) => {
  setCategory(categoryId);
  if (chosen === categoryId) {
    getByCategory();
  } else {
    getByCategory(categoryId);
  }
};

const CatalogMenu = props => {
  const [chosen, setCategory] = useState('');
  const classes = useStyles();

  return props.loading ? (
    <Typography className={classes.loading}>Loading...</Typography>
  ) : (
    <Container className={classes.menuContainer}>
      <Box className={classes.menu}>
        <Typography className={classes.title}>Categories</Typography>
        {props.categories.map((category, index) => (
          <Button
            key={index}
            className={classes.category}
            active
            onClick={() => handleClick(chosen, setCategory, category._id, props.getByCategory)}>
            {category.title}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

CatalogMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool.isRequired,
  getByCategory: PropTypes.func.isRequired,
};

export default CatalogMenu;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CatalogMenu = props => {
  const [currentCategory, setCategory] = useState('');
  const [pressedButton, setPressedButton] = useState('');
  const classes = useStyles();

  const handleClick = (nextCategory, index) => {
    pressedButton === index ? setPressedButton('') : setPressedButton(index);
    setCategory(nextCategory);

    currentCategory === nextCategory && pressedButton === index
      ? props.getByCategory()
      : props.getByCategory(nextCategory);
  };

  return props.loading || props.error ? (
    <Typography className={classes.loading}>{props.error || 'Loading...'}</Typography>
  ) : (
    <Container className={classes.menuContainer}>
      <Box className={classes.menu}>
        <Typography className={classes.title}>Categories</Typography>
        {props.categories.map((category, index) => (
          <Button
            key={index}
            className={`${classes.category} ${parseInt(pressedButton) === index ? classes.active : ''}`}
            onClick={() => handleClick(category._id, index)}>
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
  error: PropTypes.string.isRequired,
  getByCategory: PropTypes.func.isRequired,
};

export default CatalogMenu;

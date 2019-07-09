import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const CatalogMenu = props => {
  const classes = useStyles();

  return props.loading ? (
    <Typography className={classes.loading}>Loading...</Typography>
  ) : (
    <Container className={classes.menuContainer}>
      <Container className={classes.menuSort}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='sort'>Sort by</InputLabel>
          <Select
            value={props.sortValues.sort}
            onChange={props.handleChange}
            inputProps={{
              name: 'sort',
              id: 'sort',
            }}>
            <MenuItem value={'title'}>Title</MenuItem>
            <MenuItem value={'year'}>Year</MenuItem>
            <MenuItem value={'rating'}>Rating</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='order'>Order</InputLabel>
          <Select
            value={props.sortValues.order}
            onChange={props.handleChange}
            inputProps={{
              name: 'order',
              id: 'order',
            }}>
            <MenuItem value={1}>Ascending</MenuItem>
            <MenuItem value={-1}>Descending</MenuItem>
          </Select>
        </FormControl>
      </Container>

      <Box className={classes.menuCategories}>
        <Typography className={classes.title}>Categories</Typography>
        {props.categories.map((category, index) => (
          <Button
            key={index}
            className={`${classes.category} ${props.pressedButton === index ? classes.active : ''}`}
            onClick={() => props.handleClick(category._id, index)}>
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
  sortValues: PropTypes.shape({
    sort: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  pressedButton: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CatalogMenu;

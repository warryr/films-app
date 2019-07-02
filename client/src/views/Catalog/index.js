import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const Catalog = props => {
  const classes = useStyles();
  return (
    <Container className={classes.paper}>
      <CssBaseline />
      {props.iLoading || props.cLoading ? (
        <Typography className={classes.title}>Loading...</Typography>
      ) : (
        <Container className={classes.container}>
          <Container className={classes.menuContainer}>
            <Box className={classes.menu}>
              <Typography className={classes.title}>Categories</Typography>
              <Button className={classes.category} onClick={() => props.getByCategory(0)}>
                All
              </Button>
              {props.categories.map((category, index) => (
                <Button key={index} className={classes.category} onClick={() => props.getByCategory(category._id)}>
                  {category.title}
                </Button>
              ))}
            </Box>
          </Container>
          <Container className={classes.cardsContainer}>
            {props.items.map((item, index) => (
              <Card className={classes.card} key={index}>
                <CardMedia className={classes.media} image={item.avatar} />
                <CardContent className={classes.content}>
                  <Typography className={classes.title}>{item.title}</Typography>
                  <Typography className={classes.text}>{item.description}</Typography>
                  <Divider className={classes.divider} light />
                  <Typography className={classes.subtitle}>{item.category.title}</Typography>
                </CardContent>
              </Card>
            ))}
          </Container>
        </Container>
      )}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
  iLoading: PropTypes.bool.isRequired,
  cLoading: PropTypes.bool.isRequired,
  getByCategory: PropTypes.func.isRequired,
};

export default Catalog;

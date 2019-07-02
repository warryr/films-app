import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
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
      {props.loading ? (
        <Typography className={classes.title}>Loading...</Typography>
      ) : (
        props.items.map((item, index) => (
          <Card className={classes.card} key={index}>
            <CardMedia className={classes.media} image={item.avatar} />
            <CardContent className={classes.content}>
              <Typography className={classes.title}>{item.title}</Typography>
              <Typography className={classes.text}>{item.description}</Typography>
              <Divider className={classes.divider} light />
              <Typography className={classes.subtitle}>Category: {item.category}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

Catalog.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Catalog;

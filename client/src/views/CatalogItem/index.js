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

const CatalogItem = props => {
  const classes = useStyles();
  return (
    <Container className={classes.paper}>
      <CssBaseline />
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={props.avatar} />
        <CardContent className={classes.content}>
          <Typography className={classes.title}>{props.title}</Typography>
          <Typography className={classes.text}>{props.description}</Typography>
          <Divider className={classes.divider} light />
          <Typography className={classes.subtitle}>Category: {props.category}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

CatalogItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,
};

export default CatalogItem;

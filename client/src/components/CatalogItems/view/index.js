import React from 'react';
import PropTypes from 'prop-types';
import InfiniteLoader from 'react-infinite-loader';
import Card from '@material-ui/core/Card/index';
import CardContent from '@material-ui/core/CardContent/index';
import CardMedia from '@material-ui/core/CardMedia/index';
import Container from '@material-ui/core/Container/index';
import Divider from '@material-ui/core/Divider/index';
import Typography from '@material-ui/core/Typography/index';

import { useStyles } from './styles';
import { ReactComponent as Star } from '../../Catalog/images/star-solid.svg';

const CatalogItems = props => {
  const classes = useStyles();

  return props.loading && !props.films ? (
    <Typography className={classes.loading}>Loading...</Typography>
  ) : (
    <Container className={classes.cardsContainer}>
      {props.films.map((film, index) => (
        <Card className={classes.card} key={index}>
          <CardMedia className={classes.media} image={'http://localhost:3333/images/avatars/' + film._id + '.jpg'} />
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{film.title}</Typography>
            <Typography className={classes.subtitle1}>{film.year}</Typography>
            <Typography className={classes.text}>{film.description}</Typography>
            <Divider className={classes.divider} light />
            {film.rating ? (
              <Typography className={classes.subtitle2}>
                <Star className={classes.star} />
                {film.rating}
              </Typography>
            ) : null}
            <Typography className={classes.subtitle1}>{film.category.title}</Typography>
          </CardContent>
        </Card>
      ))}
      {props.hasMore ? <InfiniteLoader onVisited={props.handleNextPage} /> : null}
    </Container>
  );
};

CatalogItems.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      rating: PropTypes.number,
      category: PropTypes.object.isRequired,
    })
  ),
  loading: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  handleNextPage: PropTypes.func.isRequired,
};

export default CatalogItems;

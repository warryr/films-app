import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

const Error = props => {
  const classes = useStyles();

  return (
    <Container className={classes.paper}>
      <Typography className={classes.error}>{props.message}</Typography>
      {props.message === 'Invalid token' ? (
        <Typography className={classes.error}>
          <Link href='/login'>Log in</Link> properly to get valid token
        </Typography>
      ) : null}
    </Container>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;

import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ReactComponent as Avatar } from '../../images/user-solid.svg';

const Header = props => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>
          <Avatar className={classes.avatar} />
          {props.username}
        </Typography>
        <Button className={classes.button} onClick={props.logOut}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
};

export default Header;

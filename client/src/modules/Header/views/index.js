import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar/index';
import Button from '@material-ui/core/Button/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';

import { useStyles } from './styles';
import { ReactComponent as Avatar } from '../../../static/images/user-solid.svg';

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

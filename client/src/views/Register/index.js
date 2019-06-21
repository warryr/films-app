import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Register = props => {
  const classes = useStyles();
  return (
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form id='registerForm' className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            id='registerUsername'
            name='username'
            label='Username'
            fullWidth
            required
          />
          <TextField
            type='email'
            variant='outlined'
            margin='normal'
            id='registerEmail'
            name='email'
            label='Email'
            fullWidth
            required
          />
          <TextField
            type='password'
            variant='outlined'
            margin='normal'
            id='registerPassword'
            name='password'
            label='Password'
            fullWidth
            required
          />
          <TextField
            type='password'
            variant='outlined'
            margin='normal'
            id='confirmPassword'
            name='password'
            label='Confirm password'
            fullWidth
            required
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            className={classes.submit}
            onClick={props.signup}>
            Sign up
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/register' variant='body2' className={classes.link}>
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Register.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default Register;

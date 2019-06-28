import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
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

const renderTextField = ({ input, ...custom }) => {
  return <TextField variant='outlined' margin='normal' {...input} {...custom} required fullWidth />;
};

const Login = props => {
  const classes = useStyles();
  return (
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Log in
        </Typography>
        <form id='loginForm' className={classes.form} onSubmit={props.handleSubmit} noValidate>
          <Field
            id='registerUsername'
            name='username'
            label='Username'
            error={!!props.usernameError}
            component={renderTextField}
          />
          {props.usernameError ? <Typography className={classes.fieldHint}>{props.usernameError}</Typography> : null}

          <Field
            type='password'
            id='registerPassword'
            name='password'
            label='Password'
            error={!!props.passwordError}
            component={renderTextField}
          />
          {props.passwordError ? <Typography className={classes.fieldHint}>{props.passwordError}</Typography> : null}

          {props.loginErrors
            ? props.loginErrors.map((error, index) => (
                <Typography key={index} className={classes.formHint}>
                  {error}
                </Typography>
              ))
            : null}

          <Button type='submit' variant='contained' color='primary' fullWidth className={classes.submit}>
            Log in
          </Button>

          <Grid container>
            <Grid item>
              <Link href='/register' variant='body2' className={classes.link}>
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const LoginForm = reduxForm({
  form: 'loginForm',
})(Login);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  usernameError: PropTypes.string,
  passwordError: PropTypes.string,
  loginErrors: PropTypes.array,
};

export default LoginForm;

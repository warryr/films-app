import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar/index';
import Button from '@material-ui/core/Button/index';
import Container from '@material-ui/core/Container/index';
import Grid from '@material-ui/core/Grid/index';
import Link from '@material-ui/core/Link/index';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField/index';
import Typography from '@material-ui/core/Typography/index';

import { useStyles } from './styles';
import { PublicLayout } from '../../../layouts';

const renderTextField = ({ input, ...custom }) => {
  return <TextField variant='outlined' margin='normal' {...input} {...custom} required fullWidth />;
};

const Register = props => {
  const classes = useStyles();
  return (
    <PublicLayout>
      <Container className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form id='registerForm' className={classes.form} onSubmit={props.handleSubmit} noValidate>
          <Field
            id='registerUsername'
            name='username'
            label='Username'
            error={!!props.usernameError}
            component={renderTextField}
          />
          {props.usernameError ? <Typography className={classes.fieldHint}>{props.usernameError}</Typography> : null}

          <Field
            type='email'
            id='registerEmail'
            name='email'
            label='Email'
            error={!!props.emailError}
            component={renderTextField}
          />
          {props.emailError ? <Typography className={classes.fieldHint}>{props.emailError}</Typography> : null}

          <Field
            type='password'
            id='registerPassword'
            name='password'
            label='Password'
            error={!!props.passwordError}
            component={renderTextField}
          />
          {props.passwordError ? <Typography className={classes.fieldHint}>{props.passwordError}</Typography> : null}

          <Field
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            label='Confirm password'
            error={!!props.confirmError}
            component={renderTextField}
          />
          {props.confirmError ? <Typography className={classes.fieldHint}>{props.confirmError}</Typography> : null}

          {props.registerErrors
            ? props.registerErrors.map((error, index) => (
                <Typography key={index} className={classes.formHint}>
                  {error}
                </Typography>
              ))
            : null}

          <Button type='submit' variant='contained' color='primary' fullWidth className={classes.submit}>
            Sign up
          </Button>

          <Grid container>
            <Grid item>
              <Link href='/login' variant='body2' className={classes.link}>
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </PublicLayout>
  );
};

const RegisterForm = reduxForm({
  form: 'registerForm',
})(Register);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  usernameError: PropTypes.string,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  confirmError: PropTypes.string,
  registerErrors: PropTypes.array,
};

export default RegisterForm;

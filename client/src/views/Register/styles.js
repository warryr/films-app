import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.grey,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0),
  },
  hint: {
    textAlign: 'left',
    fontSize: '14px',
    color: theme.palette.error.main,
  },
  link: {
    color: theme.palette.primary.dark,
  },
}));

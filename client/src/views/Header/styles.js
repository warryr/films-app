import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  title: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '18px',
  },
  avatar: {
    display: 'inline-block',
    width: '14px',
    height: '14px',
    margin: `0 6px`,
  },
  button: {
    color: 'inherit',
  },
}));

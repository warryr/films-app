import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
  },
  container: {
    display: 'flex',
    gridGap: theme.spacing(2),
  },
  error: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
}));

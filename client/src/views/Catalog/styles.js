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
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridGap: theme.spacing(2),
  }
}));

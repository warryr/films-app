import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  menuContainer: {
    width: '100%',
    height: 'auto',
    margin: theme.spacing(3),
  },
  menuSort: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuCategories: {
    height: 'auto',
    padding: theme.spacing(2),
    boxShadow: '0 8px 30px 0 rgba(0,0,0,0.1)',
  },
  title: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '20px',
    fontWeight: 'bold',
  },
  loading: {
    margin: theme.spacing(5),
    fontSize: '20px',
    fontWeight: 'bold',
  },
  category: {
    display: 'block',
    width: '100%',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    textAlign: 'left',
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textTransform: 'none',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#eeeeee',
    },
  },
  active: {
    color: '#ffffff',
    backgroundColor: '#9575cd',
    '&:hover': {
      backgroundColor: '#b39ddb',
    },
  },
}));
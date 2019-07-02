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
    gridTemplateColumns: '1fr 3fr',
    gridGap: theme.spacing(2),
  },
  menuContainer: {
    width: '100%',
    height: 'auto',
    margin: theme.spacing(3),
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%',
    height: 'auto',
  },
  menu: {
    height: 'auto',
    textAlign: 'center',
    padding: theme.spacing(2),
    boxShadow: '0 8px 30px 0 rgba(0,0,0,0.2)',
  },
  card: {
    maxWidth: '25%',
    margin: theme.spacing(3),
    transition: '0.5s',
    boxShadow: '0 8px 30px 0 rgba(0,0,0,0.2)',
    '&:hover': {
      boxShadow: '0 16px 50px 5px rgba(0,0,0,0.2)',
    },
  },
  media: {
    height: '200px',
  },
  content: {
    padding: theme.spacing(3),
    textAlign: 'left',
  },
  title: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '20px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '16px',
    color: theme.palette.secondary.dark,
  },
  text: {
    fontSize: '14px',
  },
  category: {
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#EEEEEE',
    },
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
}));

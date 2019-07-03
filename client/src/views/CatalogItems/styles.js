import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%',
    height: 'auto',
  },
  card: {
    maxWidth: '27%',
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
  loading: {
    margin: theme.spacing(5),
    fontSize: '20px',
    fontWeight: 'bold',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
}));

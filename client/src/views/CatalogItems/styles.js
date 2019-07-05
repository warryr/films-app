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
    maxHeight: '50%',
    margin: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
    transition: '0.5s',
    boxShadow: '0 8px 30px 0 rgba(0,0,0,0.1)',
    '&:hover': {
      boxShadow: '0 16px 50px 5px rgba(0,0,0,0.15)',
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
  subtitle1: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
  },
  subtitle2: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.common.black,
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
  star: {
    display: 'inline-block',
    width: '14px',
    height: '14px',
    margin: `0 4px`,
  },
}));

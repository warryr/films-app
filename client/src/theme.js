import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    common: {
      white: '#ffffff',
      grey: '#9e9e9e',
      black: '#000000',
    },
    primary: {
      light: '#aa90d7',
      main: '#9575cd', //deepPurple.300
      dark: '#68518f',
    },
    secondary: {
      light: '#66cfff',
      main: '#40c4ff', //lightBlue.A200
      dark: '#2c89b2',
    },
    error: {
      main: '#c62828', //red.800
    },
    background: {
      paper: '#eeeeee', //grey.200
      default: '#fafafa', //grey.50
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

import { unstable_createMuiStrictModeTheme as createMuiTheme, Theme } from '@material-ui/core';

export interface AppTheme extends Theme {
    size: {
        icons: {
            md: string;
        }
    }
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#3798FA'
    }
  }
});

export const variables = {
  size: {
    icons: {
      md: 35
    }
  }
};

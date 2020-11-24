import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { indigo, purple } from '@material-ui/core/colors';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core';
import { Provider, useDispatch } from "react-redux";
import store from './redux/store/store';
import MainRouter from './components/Routers/MainRouter';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider<Theme> theme={theme}>
        <StyledThemeProvider theme={theme}>
          <MainRouter />
        </StyledThemeProvider>
      </ThemeProvider>
    </Provider >
  );
}

export default App;

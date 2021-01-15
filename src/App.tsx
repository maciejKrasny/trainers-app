import React, { useEffect } from 'react';
import './App.css';
import {DefaultTheme, ThemeProvider as StyledThemeProvider} from 'styled-components';
import {green, indigo, purple} from '@material-ui/core/colors';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core';
import { Provider, useDispatch } from "react-redux";
import store from './redux/store/store';
import MainRouter from './components/home/Routers/MainRouter';
import colors from "./utils/styles/colors";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: green[900],
    },
  },
});


const styledTheme: DefaultTheme = {
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: green[900],
    },
  },
  transition: '0.3s ease-in-out',
  colors,
};


function App() {

  return (
    <Provider store={store}>
      <ThemeProvider<Theme> theme={theme}>
        <StyledThemeProvider theme={styledTheme}>
          <MainRouter />
        </StyledThemeProvider>
      </ThemeProvider>
    </Provider >
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ListPage from './pages/List.page';
import TrainerPage from './pages/Trainer.page';
import { indigo, purple } from '@material-ui/core/colors';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core';
import { Provider } from "react-redux";
import store from './redux/store/store';

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
          <Router>
            <Switch>
              <Route path="/:id" component={TrainerPage} />
              <Route path="/" component={ListPage} />
            </Switch>
          </Router>
        </StyledThemeProvider>
      </ThemeProvider>
    </Provider >
  );
}

export default App;

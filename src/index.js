import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import TopBar from './components/Navigation/TopBar';
import Detail from './views/Detail';
import Home from './views/Home';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({ palette: { primary: blue } })

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter basename="/pwa-app-store">
      <div>
        <TopBar></TopBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/category/:category" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'));

registerServiceWorker();

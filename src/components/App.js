import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import TopBar from './TopBar';
import CategoryList from './CategoryList';
import Detail from './Detail';
import Home from './Home';
import '../styles/App.css';

const theme = createMuiTheme({ palette: { primary: blue } })

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <TopBar></TopBar>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/category/:id" component={CategoryList}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;

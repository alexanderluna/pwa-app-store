import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'

class TopBar extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" style={{ position: "static" }}>
          <Toolbar>
            <Link
              to='/'
              style={{textDecoration: 'none', fontSize: '1.5rem', color: 'white'}}>
              PWA APP STORE
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar

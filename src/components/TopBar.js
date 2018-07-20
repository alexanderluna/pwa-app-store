import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class TopBar extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" style={{ position: "static" }}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                PWA App Store
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar

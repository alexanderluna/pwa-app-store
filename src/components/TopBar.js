import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TopBar extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" style={{ position: "static" }}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              <Button
                style={{fontSize: '1.5rem', color: 'white'}}
                href="/pwa-app-store/"
                size="large"
                variant="flat">
                PWA App Store
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar

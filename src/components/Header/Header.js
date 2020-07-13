import React from 'react';
import { Link } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Header.css'); // eslint-disable-line global-require
}


const Header = () => (
  <AppBar position="static" className="header" color="inherit">
    <Toolbar variant="dense" className="toolbar">
      <img src="../../img/logo.png" className="logo" />
    </Toolbar>
  </AppBar>
);

export default Header;

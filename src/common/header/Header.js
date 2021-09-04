import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import AppBarComponent from '../../components/appBar/AppBar';
import AppBarLogin from '../../components/appBarLogin/AppBarLogin';
import NewNavBar from '../../components/NewNavBar';
import './Header.scss';
const Header = () => {
  return (
    <React.Fragment>
      {localStorage.getItem('user') ? <AppBarLogin /> : <AppBarComponent />}

      {/* <NewNavBar /> */}
      <CssBaseline />
    </React.Fragment>
  );
};

export default Header;

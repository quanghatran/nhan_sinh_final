import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CloseIcon from '@material-ui/icons/Close';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { default as React } from 'react';
import { useSelector } from 'react-redux';
import logo_footer from '../../images/logo_footer.png';
import UserAccountMenu from '../appBar/UserAccountMenu';
import rotateLogo from '../../images/logorotate3.png';
import textLogo from '../../images/logo1.png';
import { Theme } from '@material-ui/core';
import './AppBarLogin.scss';

const useStyles = makeStyles((theme) => ({
  '@keyframes logo': {
    '100%': {
      transform: 'rotate(1800deg)',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  img: {
    height: '35px',
    width: '35px',
    margin: '5px 0',
    animation: '$logo 50s linear infinite',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0px 0 0',
      height: '50px',
      width: '50px',
    },
    [theme.breakpoints.down('480')]: {
      margin: '0 0px 0 0',
      height: '40px',
      width: '40px',
    },
  },
  textLogo: {
    height: 'auto',
    width: '60px',
    [theme.breakpoints.down('sm')]: {
      height: '50px',
      width: 'auto',
      marginRight: '10px',
    },
    [theme.breakpoints.down('480')]: {
      height: '35px',
      width: 'auto',
      marginRight: '10px',
    },
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftAppBar: {
    width: '45%',
  },
  rightAppBar: {
    width: '45%',
  },
  button: {
    fontSize: '1rem',
    color: '#fff',
    '& :hover': {
      color: '#f69320 !important',

      transition: '.3s all ease-in-out',
      transform: 'scale(1.05)',
    },
  },
  menuButton: {
    color: '#fff',
  },
}));

const listNav = [
  {
    id: 1,
    href: '/',
    name: 'Trang chủ',
    color: 'default',
    variant: 'text',
  },
  {
    id: 2,
    href: '/xem-online',
    name: 'Tra cứu',
    color: 'default',
    variant: 'text',
  },
  {
    id: 3,
    href: '#contact',
    name: 'liên hệ',
    color: 'default',
    variant: 'text',
  },
  {
    id: 4,
    href: '/xem-online/lich-su-tra-cuu',
    name: 'lịch sử tra cứu',
    color: 'default',
    variant: 'text',
  },
];
const listNav2 = [
  {
    id: 5,
    href: '/xem-online/purchased',
    name: 'dịch vụ đã mua',
    color: 'default',
    variant: 'text',
  },
  {
    id: 6,
    href: '/xem-online/dat-lich-coaching',
    name: 'đặt lịch coaching',
    color: 'default',
    variant: 'text',
  },
  {
    id: 7,
    href: '/xem-online/dang-ky-hop-tac',
    name: 'đăng ký hợp tác',
    color: 'default',
    variant: 'text',
  },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

// if (localStorage.getItem('user')) {
//   listNav.pop();
// }
const AppBarLogin = (props) => {
  const user = useSelector((state) => state.login);
  const userLogIn = useSelector((state) => state.user);
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
    >
      <List>
        <div className='logo'>
          <Button onClick={toggleDrawer(anchor, false)} href='/'>
            <img
              className={classes.img}
              src={rotateLogo}
              alt='logo_navbar'
              style={{ width: '100px', height: '100px' }}
            />
          </Button>
        </div>
        <div className='closeButton'>
          <IconButton onClick={toggleDrawer(anchor, false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />

        {listNav.map((navItem) => (
          <ListItem button key={navItem.id}>
            <Button
              onClick={toggleDrawer(anchor, false)}
              color={navItem.color}
              href={navItem.href}
              variant={navItem.variant}
            >
              {navItem.name}
            </Button>
          </ListItem>
        ))}
        {listNav2.map((navItem) => (
          <ListItem button key={navItem.id}>
            <Button
              onClick={toggleDrawer(anchor, false)}
              color={navItem.color}
              href={navItem.href}
              variant={navItem.variant}
            >
              {navItem.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar> */}
      <div className='appBarWrapper'>
        <Hidden smDown>
          <HideOnScroll {...props}>
            <AppBar>
              <Toolbar>
                <div className={classes.appBar}>
                  <ul className={classes.leftAppBar}>
                    {/* <Button href='/'>
                        <img
                          src={logo_footer}
                          alt='logoSatsi'
                          style={{ width: '60px' }}
                        />
                      </Button> */}
                    {listNav.map((navItem) => (
                      <li key={navItem.id}>
                        <Button
                          className={classes.button}
                          color={navItem.color}
                          href={navItem.href}
                          variant={navItem.variant}
                        >
                          {navItem.name}
                        </Button>
                      </li>
                    ))}
                  </ul>
                  <div className={classes.logo}>
                    <img
                      src={rotateLogo}
                      alt='rotate logo'
                      className={classes.img}
                    />
                    <img className={classes.textLogo} src={textLogo} alt='' />
                  </div>
                  <ul className={classes.rightAppBar}>
                    {listNav2.map((navItem) => (
                      <li key={navItem.id}>
                        <Button
                          className={classes.button}
                          color={navItem.color}
                          href={navItem.href}
                          variant={navItem.variant}
                        >
                          {navItem.name}
                        </Button>
                      </li>
                    ))}

                    {localStorage.getItem('user') &&
                      (user.name ? (
                        <li key={listNav.length}>
                          <UserAccountMenu userName={user.name} />
                        </li>
                      ) : (
                        <li key={listNav.length}>
                          <UserAccountMenu userName={userLogIn.name} />
                        </li>
                      ))}
                     
                  </ul>
                </div>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        </Hidden>

        <Hidden mdUp>
          <HideOnScroll {...props}>
            <AppBar>
              <Toolbar>
                <ul>
                  <li>
                    {['left'].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Button
                          className={classes.menuButton}
                          onClick={toggleDrawer(anchor, true)}
                        >
                          <MenuOutlinedIcon fontSize='large' />
                        </Button>
                        <Drawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                          style={{ width: '250px' }}
                        >
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </li>
                  <li>
                    <Button href='/'>
                      <img src={textLogo} alt='' className={classes.textLogo} />
                      <img
                        className={classes.img}
                        src={rotateLogo}
                        alt='logo'
                      />
                    </Button>
                  </li>
                  <li>
                    <UserAccountMenu userName={user.name} />
                  </li>
                </ul>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        </Hidden>
      </div>
      {/* </AppBar> */}
      <div id='back-to-top-anchor' />
    </React.Fragment>
  );
};

export default AppBarLogin;

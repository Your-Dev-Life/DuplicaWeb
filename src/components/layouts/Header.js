import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Collapse,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircle from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(9) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  listItemClose: {
    paddingLeft: theme.spacing(3)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openIndex, setOpenIndex] = useState(-1);
  const openMenu = Boolean(anchorEl);

  const handleClick = (index) => () => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleAccountMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    props.auth.doLogout();
    history.push('/login');
    handleClose();
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawer}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant={'h6'} className={classes.title}>
            {props.title || 'Duplica'}
          </Typography>
          <div>
            <IconButton
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleAccountMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{t('Profile')}</MenuItem>
              <MenuItem onClick={logout}>{t('Logout')}</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <ListItem
          className={clsx(classes.listItem, {
            [classes.listItemClose]: !open
          })}
          button
          component={Link}
          to='/'
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>{t('Home')}</ListItemText>
        </ListItem>
        {props.menu.map(({ name, menus = [], icon: IconComponent }, index) => (
          <Fragment key={index}>
            <ListItem
              className={clsx(classes.listItem, {
                [classes.listItemClose]: !open
              })}
              button
              onClick={handleClick(index)}
            >
              <ListItemIcon>
                <IconComponent />
              </ListItemIcon>
              <ListItemText>{t(name)}</ListItemText>
              {openIndex === index ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={openIndex === index} timeout='auto' unmountOnExit>
              <>
                <List component='div' disablePadding>
                  {menus.map(
                    (
                      {
                        name: subMenuName,
                        to = '/',
                        icon: SubMenuIconComponent
                      },
                      i
                    ) => (
                      <ListItem
                        className={clsx(classes.listItem, {
                          [classes.nested]: open,
                          [classes.listItemClose]: !open
                        })}
                        key={i}
                        button
                        component={Link}
                        to={to}
                      >
                        <ListItemIcon>
                          <SubMenuIconComponent />
                        </ListItemIcon>
                        <ListItemText>{t(subMenuName)}</ListItemText>
                      </ListItem>
                    )
                  )}
                </List>
              </>
            </Collapse>
          </Fragment>
        ))}
      </Drawer>
    </Fragment>
  );
};

Header.propTypes = {
  auth: PropTypes.object,
  api: PropTypes.func,
  menu: PropTypes.array,
  title: PropTypes.string
};

export default Header;

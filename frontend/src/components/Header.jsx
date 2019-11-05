import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: 'black'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: 'pink' }}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="black" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h1" className={classes.title} style={{ color: 'black' }}>
              Stitch
            </Typography>
            <Button style={{ color: 'black' }}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#d60e58',
      },
    secondary: {
      main: '#6ec95c',
    },
  },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuBar extends React.Component {
  render() {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <TemporaryDrawer />
          </IconButton>
          {/* <Typography variant="h6" color="inherit" className={classes.grow}>
            24 Hour Cal
          </Typography> */}
          {/* <Button color="secondary">Login</Button> */}
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
    </div>
  );
}
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);

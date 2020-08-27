import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MateifyLogo from '../Images/LogoMateify.png';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Avatar } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({ 
  root: {
      backgroundColor: '#009688',
  }
});

const NavBar = (props) => {

  const classes = useStyles();

    return (
      <Box boxShadow="3">
        <AppBar position="static">
          <Toolbar classes={{root: classes.root}}>
            <Grid justify={props.justify} container="bool">
              <Box mr={1}>
                <img src={MateifyLogo} alt="MateifyLogo"/>
              </Box>
              <Box ml={1} fontSize={23} fontFamily="Righteous">
                <Hidden xsDown={props.downSm}>
                    Matefify
                </Hidden>
              </Box>
              <Box>
                {props.user &&<Avatar alt="hola" src={props.src}></Avatar>}
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default NavBar;
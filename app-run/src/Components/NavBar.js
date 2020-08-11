import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MateifyLogo from '../Images/LogoMateify.png';


const NavBar = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid alignContent="center" direction="row">
            <Typography variant="h6" >
            <img src={MateifyLogo} alt="MateifyLogo"/>
              Mateify
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar;
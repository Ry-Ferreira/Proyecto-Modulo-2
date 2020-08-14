import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Grid, Typography, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import iconPadlock from '../Images/candado-logo.png';

const useStyles = makeStyles({ 
    media: {
        height: 200,
    }
 });



const Padlock = () => {

    const classes = useStyles();

    return(
        <Container>
            <Box my={4}>
                <Grid container="bool" justify="center" alignItems="center" direction="row">
                    <Box mx={4}>
                        <img src={iconPadlock} className={classes.media} title="Padlock" />
                    </Box>
                    <Box>
                        <Grid container="bool" direction="column">
                            <Typography variant="h3">Mmm... algo no salió bien</Typography>
                            <Typography variant="body1">Debes estar autenticado para acceder a esta página</Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
}

export default Padlock;


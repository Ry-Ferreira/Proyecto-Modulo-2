import React from 'react';
import { makeStyles ,Container, Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        marginLeft: 0,
        marginRight: 0,
    },
})

const EmptySearch = () => {

    let classes = useStyles();

    return (

        <Grid container="bool" justify="center" alignItems="center">
            <Box mt={4}>
                <Typography variant="body1">No hay resultados: utiliza la barra de búsqueda para encontr canciones</Typography>
            </Box>
        </Grid>
    )
}

export default EmptySearch;
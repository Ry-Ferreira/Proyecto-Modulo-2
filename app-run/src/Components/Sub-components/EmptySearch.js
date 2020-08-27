import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        marginLeft: 0,
        marginRight: 0,
    },
})

const EmptySearch = () => {


    return (
        <Grid container="bool" justify="center" alignItems="center">
            <Box my={2}>
                <Typography variant="body1">No hay resultados: utiliza la barra de búsqueda para encontrar canciones</Typography>
            </Box>
        </Grid>
    )
}

export default EmptySearch;
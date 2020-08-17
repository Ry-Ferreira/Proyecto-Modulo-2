import React from 'react';
import { makeStyles ,Container, Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles({
    root: {
        marginLeft: 0,
        marginRight: 0,
    },
})

const EmptySearch = () => {

    let classes = useStyles();
    let Op = false;

    return (
        <Container>
            <Box boxShadow={3} py={4} px={9}>
                <Box mb={2}>
                    <Box mb={1}> 
                        <Typography variant="h6" color="primary">Resultados</Typography>
                    </Box>
                    <Box>
                        <Grid container="bool" direction="row" justify="space-between">
                            <Box ml={6}><Typography variant="subtitle2">Nombre</Typography></Box>
                            <Box><Typography variant="subtitle2">Artista</Typography></Box>
                            <Box><Typography variant="subtitle2">Álbum</Typography></Box>
                            <Box><Typography variant="subtitle2">Duración</Typography></Box>
                            <Box><Typography variant="subtitle2">Agregar</Typography></Box>
                        </Grid>
                    </Box>
                </Box>
                <Divider variant="middle" classes={{root: classes.root}}/>    
        {!Op && <Box mt={2}>
                    <Grid container="bool" direction="row" justify="space-between">
                        <Box>
                            <Grid container="bool" direction="row" alignItems="center">
                                <Box mr={1}><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Box>
                                <Box><Typography variant="subtitle2">Nombre</Typography></Box>
                            </Grid>
                        </Box>
                        <Box><Typography variant="subtitle2">Artista</Typography></Box>
                        <Box><Typography variant="subtitle2">Álbum</Typography></Box>
                        <Box><Typography variant="subtitle2">Duración</Typography></Box>
                        <Box><Typography variant="subtitle2">Agregar</Typography></Box>
                    </Grid>
                </Box>}
        {Op &&  <Box>
                    <Box>
                        <Grid container="bool" justify="center" alignItems="center">
                            <Box mt={4}><Typography variant="body1">No hay resultados: utiliza la barra de búsqueda para encontrar canciones</Typography></Box>
                        </Grid>
                    </Box>
                </Box>}
            </Box>
        </Container>
    )
}

export default EmptySearch;
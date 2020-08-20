import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import ListResult from './Sub-components/ListResult';
import EmptyList from './Sub-components/EmptyList';

const useStyles = makeStyles({
    root: {
        marginLeft: 0,
        marginRight: 0,
    },
    table: {
        minWidth: 650,
    },
})


const SearchList = () => {
    
    const classes = useStyles();
    const find = true;

    return(
        <Container>
            <Box boxShadow={3} py={4} my={2} px={9}>
                <Grid container="bool" direction="column">
                    <Box mb={2}>
                        <Box mb={1}> 
                            <Typography variant="h6" color="primary">Tu Playlist</Typography>
                        </Box>
                        <Box>
                            <Grid container="bool" direction="row" justify="space-between">
                                <Box ml={6}><Typography variant="subtitle2">Nombre</Typography></Box>
                                <Box><Typography variant="subtitle2">Artista</Typography></Box>
                                <Box><Typography variant="subtitle2">Duración</Typography></Box>
                                <Box><Typography variant="subtitle2">Cant. Votos</Typography></Box>
                                <Box><Typography variant="subtitle2">Votar</Typography></Box>
                            </Grid>
                        </Box>
                    </Box>
                    <Divider variant="middle" classes={{root: classes.root}}/>
                    {!find &&   <EmptyList />}
                    {find &&    <ListResult songName="Las nueve" artist="NTVG" time="3:09" favs="2"/>}
                </Grid>
            </Box>
        </Container>
    )
}

export default SearchList;
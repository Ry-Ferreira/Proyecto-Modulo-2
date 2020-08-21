import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import SearchPlay from '../SearchPlay';


const filterList = SearchPlay;

const SearchResult = (props) => {
    return (
        <Box mt={2}>
            <Grid container="bool" direction="row" justify="space-between">
                <Box pl={1}> 
                    <Grid container="bool" direction="row" alignItems="center">
                        <Box mr={1}><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Box>
                        <Box><Typography variant="subtitle2">{props.name}</Typography></Box>
                    </Grid>
                </Box>
                <Typography variant="subtitle2">{props.artist}</Typography>
                <Typography variant="subtitle2">{props.album}</Typography>
                <Typography variant="subtitle2">{props.duration}</Typography>
                <Typography variant="subtitle2">Agregar</Typography>
            </Grid>
        </Box>
    )
}

export default SearchResult;

import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const EmptyList = () => {

    return (
        <Box p={7} mt={2}>
            <Grid container="bool" direction="column" alignItems="center">
                <Paper variant="outlined">
                    <Box p={4} my={4}>
                        <Grid container="bool" direction="column" alignItems="center">
                            <Box>
                                <Typography variant="h6">UPS!, TU PLAYLIST AÚN ESTÁ VACÍA</Typography>
                            </Box>
                            <Box mt={1}>
                                <Typography variant="body1">Comenza a agregar canciones</Typography>                            
                            </Box>
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
        </Box>
    )
}


export default EmptyList;
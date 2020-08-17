import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import GridList from '@material-ui/core/GridList';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ListItemAvatar } from '@material-ui/core';
import padlock from '../Images/candado-logo.png';

const useStyles = makeStyles({
    root: {
        marginLeft: 0,
        marginRight: 0,
    },
    table: {
        minWidth: 650,
    },
})

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
  

const SearchList = () => {
    
    const classes = useStyles();
    const find = true;
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };

    return(
        <Container>
            <Box boxShadow={3} py={4} my={2} mx={3} px={9}>
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
    {!find &&   <Box p={7} mt={2}>
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
                </Box>}
    {find &&    <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                            <Grid container="bool" direction="row" alignItems="center">
                                <ListItemAvatar><Avatar src={padlock} /></ListItemAvatar>
                                <Typography variant="p">La banda del candado</Typography>
                            </Grid>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.calories}</TableCell>
                          <TableCell align="center">{row.fat}</TableCell>
                          <TableCell align="center">{row.carbs}</TableCell>
                          <TableCell align="center">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>}
            </Box>
        </Container>
    )
}

export default SearchList;
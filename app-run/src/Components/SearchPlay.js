import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import songsJSON from '../base-de-datos/songData.json';


const useStyle = makeStyles((theme) => ({
    root: {
        height: 47,
    },
    divider: {
        marginLeft: 0,
        marginRight: 0,
    }
}))


const SearchPlay = () => {

    let songs = songsJSON;
    let classes = useStyle();

    const [inputValue, setInputValue] = useState("");
    const [filterList, setFilterList] = useState([]);

    const filterSongs = (song) => {

        // Aca filtro las canciones que coinciden con la busqueda
        if (song.name.includes(inputValue)) {
            return true;
        } else {
            return false;
        }
    };

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {

            // primero me quedo con los resultyados filtrados
            let result = songs.filter(filterSongs);

            // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
            setFilterList(result);
            console.log(filterList);
        }
    };



    return (
            <Container>
                <Box my={4}>
                    <FormControl fullWidth variant="outlined">
                        <Box width="40%" mx="auto">
                            <OutlinedInput
                                classes={{ root: classes.root }}
                                fullWidth="bool"
                                placeholder="Buscar"
                                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                                labelWidth={0}
                                onChange={handleInputValue}
                                onKeyPress={handleInputKeyPress}
                            />
                        </Box>
                    </FormControl>
                </Box>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> Nombre gffgytytytty</TableCell>
                                <TableCell> Artista </TableCell>
                                <TableCell> Album </TableCell>
                                <TableCell> Duracion </TableCell>
                                <TableCell> Agregar </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterList.map((song) => (
                                <TableRow key={song.uuid}>
                                    <TableCell align="left">{song.name}</TableCell>
                                    <TableCell align="left">{song.album}</TableCell>
                                    <TableCell align="left">{song.duration}</TableCell>
                                    <TableCell align="left">Agregars</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
   )
}

export default SearchPlay;
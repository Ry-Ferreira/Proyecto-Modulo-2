import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import EmptySearch from './Sub-components/EmptySearch';
import SearchResult from './Sub-components/SearchResult';
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
    let songResult = true;

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
    };

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {
    
          // primero me quedo con los resultyados filtrados
          let result = songs.filter(filterSongs);
    
          // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
          setFilterList(result);
        }
    };



    return (
        <Fragment>
            <Container>
                <Box my={4}>
                    <FormControl fullWidth variant="outlined"> 
                        <Box width="40%" mx="auto">
                            <OutlinedInput
                                classes={{root:classes.root}}
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
                    <Divider variant="middle" classes={{root: classes.divider}} />
                    <Box mx="auto" mb={2} width="100%">
                        {!songResult &&<EmptySearch />}
                        {songResult && <SearchResult />}
                    </Box>
                </Box>
            </Container>
        </Fragment>
    )
}

export default SearchPlay;
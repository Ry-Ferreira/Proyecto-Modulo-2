import React, { Fragment, useState } from 'react';
import Snackbar from '../Components/Snackbar';
import SearchPlay from '../Components/SearchPlay';
import SearchList from '../Components/SearchList';
import songsJSON from '../base-de-datos/songData.json';
import { BrowserRouter as useParams } from "react-router-dom";


const Playlist = () => {

    let songs = songsJSON;

    const [inputValue, setInputValue] = useState("");
    const [filterList, setFilterList] = useState([]);
    const [addSong, setAddSong] = useState([]);

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

    const handlePassSong = (song) => {
        setAddSong(song);
    };

    return (
        <Fragment>
            <SearchPlay onChange={handleInputValue} onKeyPress={handleInputKeyPress} filterList={filterList} clickButton={handlePassSong}/>
            <SearchList addSong={addSong}/>
        </Fragment>
    )
}

export default Playlist;
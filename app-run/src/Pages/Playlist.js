import React, { Fragment, useState } from "react";
import Snackbar from "../Components/Snackbar";
import SearchSong from "../Components/SearchSong";
import MyPlaylist from "../Components/MyPlaylist";
import songsJSON from "../base-de-datos/songData.json";

const Playlist = () => {
  let songs = songsJSON;

  const [inputValue, setInputValue] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [myPlaylist, setMyPlaylist] = useState([]);

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
      let result = songs.filter((song) => {
        // Aca filtro las canciones que coinciden con la busqueda
        if (song.name.includes(inputValue)) {
          return true;
        } else {
          return false;
        }
      });

      // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
      setFilterList(result);
    }
  };

  const handlePassSong = (uuid) => {
    let newSong = songsJSON.filter((song) => {
      if (song.uuid == uuid) {
        return true;
      } else {
        return false;
      }
    });

    let songWithCount = newSong.map((song) => (
        {...song, count: 0}
        ));
      
      setMyPlaylist([...myPlaylist].concat(songWithCount));
      console.log(myPlaylist);
    };

  const handleUpCount = (uuid) => {
    myPlaylist.filter((song) => {
        if (song.uuid == uuid) {
            return {...song, count : count + 1};
        } else {
            return console.log('im not working');
        }
    });
  }

  const handleDownCount = () => {
      console.log("Estoy bajando");
  }

  return (
    <Fragment>
      <SearchSong
        onChange={handleInputValue}
        onKeyPress={handleInputKeyPress}
        filterList={filterList}
        clickButton={handlePassSong}
      />
      <MyPlaylist myPlaylist={myPlaylist} handleUpCount={handleUpCount} handleDownCount={handleDownCount} />
    </Fragment>
  );
};

export default Playlist;

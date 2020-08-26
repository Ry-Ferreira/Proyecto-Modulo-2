import React, { Fragment, useState, useEffect } from "react";
import Snackbar from "../Components/Snackbar";
import SearchSong from "../Components/SearchSong";
import MyPlaylist from "../Components/MyPlaylist";
import songsJSON from "../base-de-datos/songData.json";


const Playlist = () => {
  let songs = songsJSON;

  const [inputValue, setInputValue] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [myPlaylist, setMyPlaylist] = useState([]);


  React.useEffect(() => {
    let result = songs.filter(s => inputValue
      ? JSON.stringify(s).toLowerCase().includes(inputValue.toLowerCase())
      : '');
      console.log("im working");

    // let filterResult = result.filter(s => !myPlaylist.includes(s));
    let filterResult = result.filter(s => !myPlaylist.includes(s));
    
    setFilterList(filterResult);
  }, [inputValue, myPlaylist]);


  // const filterSongs = (song) => {
  //   // Aca filtro las canciones que coinciden con la busqueda
  //   if (song.name.includes(inputValue)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // const handleInputKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //       // primero me quedo con los resultyados filtrados
  //     let result = songs.filter((song) => {
  //       // Aca filtro las canciones que coinciden con la busqueda
  //       if (song.name.includes(inputValue)) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //     const inPlaylist = result.filter(s => !myPlaylist.includes(s));
  //     console.log(inPlaylist);
  //     // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
  //     setFilterList(inPlaylist);
  //   }
  // };

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
    };

  const handleUpCount = (e, uuid) => {
    let index = myPlaylist.findIndex(song => song.uuid === uuid);
    let newPlaylist = [...myPlaylist];
    newPlaylist[index].count = newPlaylist[index].count ? newPlaylist[index].count + 1 : 1; 
    setMyPlaylist(newPlaylist);
  };

  const handleDownCount = (e, uuid) => {
    let index = myPlaylist.findIndex(song => song.uuid === uuid);
    let newPlaylist = [...myPlaylist];
    newPlaylist[index].count = newPlaylist[index].count ? newPlaylist[index].count - 1 : -1; 
    setMyPlaylist(newPlaylist);
  };

  return (
    <Fragment>
      <SearchSong
        onChange={handleInputValue}
        filterList={filterList}
        clickButton={handlePassSong}
        inputValue={inputValue}
      />
      <MyPlaylist myPlaylist={myPlaylist} handleUpCount={handleUpCount} handleDownCount={handleDownCount} />
    </Fragment>
  );
};

export default Playlist;

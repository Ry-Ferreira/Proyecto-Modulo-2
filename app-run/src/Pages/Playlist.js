import React, { Fragment, useState, useEffect } from "react";
import Snackbar from "../Components/Snackbar";
import NavBar from '../Components/NavBar';
import SearchSong from "../Components/SearchSong";
import MyPlaylist from "../Components/MyPlaylist";
import songsJSON from "../base-de-datos/songData.json";
import userJSON from '../base-de-datos/userData.json';
import { useParams } from 'react-router-dom';

const Playlist = () => {
  
  let songs = songsJSON;

  const [inputValue, setInputValue] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [existSong, setExistSong] = useState(true);



  let { uuidUser } = useParams();

  const filterUser =  userJSON.filter((u) => {
    if (u.uuid == uuidUser) {
          return true;
    } else {
        return false;
    }});
    

  React.useEffect(() => {
    let result = songs.filter(s => inputValue
      ? JSON.stringify(s).toLowerCase().includes(inputValue.toLowerCase())
      : '');
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


  const handlePassSong = (uuid) => {
    let newSong = songsJSON.filter((song) => {
      if (song.uuid == uuid) {
        return true;
      } else {
        return false;
      }
    });

    let songWithCount = newSong.map((song) => (
      { ...song, count: 0 }
    ));
    
    setMyPlaylist([...myPlaylist].concat(songWithCount));
    setExistSong(false);
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
      <NavBar
        downSm={true} 
        justify="space-between" 
        user={true} 
        src={filterUser[0] && filterUser[0].profilePictureUrl}/>
      <SearchSong
        onChange={handleInputValue}
        filterList={filterList}
        clickButton={handlePassSong}
        inputValue={inputValue}
      />
      <MyPlaylist 
        myPlaylist={myPlaylist} 
        handleUpCount={handleUpCount} 
        handleDownCount={handleDownCount} 
        existSong={existSong}/>
      </Fragment>
  );
};

export default Playlist;

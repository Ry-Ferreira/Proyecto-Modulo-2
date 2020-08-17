import React, { Fragment } from 'react';
import Snackbar from '../Components/Snackbar';
import SearchPlay from '../Components/SearchPlay';
import SearchList from '../Components/SearchList';

import { BrowserRouter as useParams } from "react-router-dom";


const Playlist = () => {

    return (
        <Fragment>
            <SearchPlay />
            <SearchList />
        </Fragment>
    )
}

export default Playlist;
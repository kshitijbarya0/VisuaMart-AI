import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'

function ShowSearchResult() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get("search");

    return <>
        <div className='Showsearch'>
            <Navbar />
            <h1>{query}</h1>
        </div>
    </>
}

export default ShowSearchResult
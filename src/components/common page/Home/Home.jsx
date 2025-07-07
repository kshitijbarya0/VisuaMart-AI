import React from 'react'
import './homecommon.css'
import Navbar from './Navbar'
import Productlist from './Productlist'
function Home() {
    return (
        <div className='landing-page'>
            <Navbar />
            <Productlist />
        </div>
    )
}

export default Home
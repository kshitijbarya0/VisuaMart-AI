import React from 'react'
import './homecommon.css'
import Navbar from './Navbar'
import Productlist from './Productlist'
import ViewCatagoryProducts from './ViewCatagoryProducts'
function Home() {
    return (
        <div className='landing-page'>
            <Navbar />
            <ViewCatagoryProducts />
            <Productlist />
        </div>
    )
}

export default Home
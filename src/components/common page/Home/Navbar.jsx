import React from 'react'

function Navbar() {
    return (
        <div className='nav-bar'>
            <div>
                <h1>logo</h1>
            </div>
            <div>
                <input
                    type="text"
                    placeholder='search store name or product'
                />
            </div>
            <div>
                <h1>User Profile</h1>
            </div>
        </div>
    )
}

export default Navbar
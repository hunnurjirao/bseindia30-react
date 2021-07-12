import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            {/* <nav class="navbar navbar-light bg-light"> */}
            <NavLink class="navbar-brand" to="/" style={{ color: 'black' }}>
                {/* &#127968; */}
                Home
            </NavLink>

            {/* </nav> */}
        </div>
    )
}

export default Navbar

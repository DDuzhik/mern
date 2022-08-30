import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useAuth } from '../hooks/auth.hook'
//import Dropdown from 'react-bootstrap/Dropdown'
//import DropdownButton from 'react-bootstrap/DropdownButton'



export const Navbar = () => {
    const {userName} = useAuth()
    const history = useNavigate()
    const auth = useContext(AuthContext)

    //console.log(userName)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history/*.push*/('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem '}}>
                <span className="brand-logo">Shortig Links</span>
                                
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><b>
                        <span style={{ padding: '0 2rem '}}> {userName} </span>
                    </b></li>
                    <li><NavLink to="/userprofile">{userName}</NavLink></li>
                    <li><NavLink to="/vehicles">Vehicles</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    
                    <li><a href="/" onClick={logoutHandler}>LogOut</a></li>
                </ul>
            </div>
        </nav>
    )
}
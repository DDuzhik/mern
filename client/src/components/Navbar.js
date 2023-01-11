import React from "react"
import { NavLink } from "react-router-dom"
//import { AuthContext } from "../context/AuthContext"
import { useAuth } from '../hooks/auth.hook'
//import Dropdown from 'react-bootstrap/Dropdown'
//import DropdownButton from 'react-bootstrap/DropdownButton'




export const Navbar = () => {
    const {userName} = useAuth()
    //const history = useNavigate()
    //const auth = useContext(AuthContext)

    //console.log(userName)

    /*const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history('/')
    }*/

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem '}}>
                <span className="brand-logo">FOMI</span>
                                
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                        
                    <li><NavLink to="/dev">DEV</NavLink></li>
                    <li><NavLink to="/vehicles">Vehicles</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><NavLink to="/userprofile" className="waves-effect waves-light btn-small blue darken-2" >{userName}</NavLink></li>
                    
                </ul>
            </div>
        </nav>
    )
}
import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
//import { useLinkClickHandler } from "react-router-dom"

export const UserProfileCard = ({userProfile}) => {

    const auth = useContext(AuthContext)
    const history = useNavigate()

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history/*.push*/('/')
    }

    return (
        <>
            <h2>User Profile</h2>

            <p>E-mail: <strong>{userProfile.email}</strong></p>
            <p>First Name: <strong>{userProfile.fName}</strong></p>
            <p>Last Name: <strong>{userProfile.lName}</strong></p>
            <p>Date Of Birth: <strong>{new Date(userProfile.dateOfBirth).toLocaleDateString()}</strong></p>
            <p>Driver License: <strong>{userProfile.dl}</strong></p>
            <p>Driver License State: <strong>{userProfile.dlState}</strong></p>
            <p>DLExp: <strong>{new Date(userProfile.dlExp).toLocaleDateString()}</strong></p>
            <p>Created: <strong>{new Date(userProfile.joinDate).toLocaleDateString()}</strong></p>
            <div><Link to={`/userprofile/update`}> Edit User Profile </Link></div>
            <div><a href="/" onClick={logoutHandler}>LogOut</a></div>
        </>
    )
}
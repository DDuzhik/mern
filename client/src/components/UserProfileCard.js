import React from "react"
//import { useLinkClickHandler } from "react-router-dom"

export const UserProfileCard = ({userProfile}) => {
    return (
        <>
            <h2>User Profile</h2>

            <p>E-mail: <strong>{userProfile.email}</strong></p>
            <p>First Name: <strong>{userProfile.fName}</strong></p>
            <p>Last Name: <strong>{userProfile.lName}</strong></p>
            <p>Date Of Birth: <strong>{new Date(userProfile.dateOfBirth).toLocaleDateString()}</strong></p>
            <p>Created: <strong>{new Date(userProfile.joinDate).toLocaleDateString()}</strong></p>
        </>
    )
}
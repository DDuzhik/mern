import React, { useContext } from 'react'
import { Link } from "react-router-dom"

import { Loader } from '../../components/Loader'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hooks'


export const DevPage = () => {

    const {userName} = useContext(AuthContext)
    const {loading} = useHttp()
    

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <h2>DEV Page</h2>

            
            <p>User Name: <strong>{userName}</strong></p>
            
            <div><Link to={`/dev/servicedata`}> ServiceData </Link></div>
            
        </>
    )
}
import React, { useContext } from 'react'
import { Link } from "react-router-dom"

import { Loader } from '../../components/Loader'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hooks'


export const ServiceDataPage = () => {

    const {userName} = useContext(AuthContext)
    const {loading} = useHttp()
    

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <h2>ServiceData Page</h2>

            
            <p>User Name: <strong>{userName}</strong></p>
            
            <div><Link to={`/dev/servicedata/vehicletypes`}> Vehicle Type </Link></div>
            <div><Link to={`/dev/servicedata/enginetypes`}> Engine Type </Link></div>
            <div><Link to={`/dev/servicedata/fueltypes`}> Fuel Type </Link></div>
            <div><Link to={`/dev/servicedata/states`}> States </Link></div>
            <div><Link to={`/dev/servicedata/iftarates`}> IFTA Rates </Link></div>
            
        </>
    )
}
import React, { useCallback, useContext, useEffect, useState } from 'react'
//import { NavLink } from 'react-router-dom'
import { VehicleList } from '../components/vehicle/VehicleList'
import { Loader } from '../components/Loader'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'

export const VehiclesPage = () => {
    const [vehicles, setVehicles] = useState()
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchVehicles = useCallback( async () => {
        try {
            const fetched = await request('/api/vehicle', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setVehicles(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect( () => {
        fetchVehicles()
    }, [fetchVehicles])


    if (loading) {
        return <Loader />
    }

    return (
            
        <>
            {!loading && <VehicleList vehicles={vehicles} />}
            
        </> 
    )
}
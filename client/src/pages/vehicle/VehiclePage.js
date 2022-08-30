import React, { useCallback, useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { VehicleCard } from '../../components/vehicle/VehicleCard'
import { Loader } from '../../components/Loader'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hooks'

export const VehiclePage = () => {

    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [vehicle, setVehicle] = useState(null)
    const linkId = useParams().id


    const getVehicle = useCallback( async () => {
        try {
            const fetched = await request(`/api/vehicle/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setVehicle(fetched)
        } catch (e) {}
    }, [token, linkId, request])

    useEffect( () => {
        getVehicle()
    }, [getVehicle])

    if (loading) {
        return <Loader />
    }

    return (
        <>
           { !loading && vehicle && <VehicleCard vehicle={vehicle} />}
        </>
    )
}
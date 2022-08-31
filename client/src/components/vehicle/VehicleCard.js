import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useMessage } from '../../hooks/message.hook'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hooks'
//import { useLinkClickHandler } from "react-router-dom"

export const VehicleCard = ({vehicle}) => {

    const v_id = vehicle._id
 //console.log(v_id)
    const auth = useContext(AuthContext)
    const { request } = useHttp()
    const history = useNavigate()
    const message = useMessage()

    const deleteVehicle = async () => {
        try {
            const data = await request('/api/vehicle/delete', 'DELETE', {v_id}, {
                Authorization: `Bearer ${auth.token}`
            })
            message(data.message)
            history(`/vehicles`)
        } catch (e) {}
    }


    return (
        <>
            <h2>Vehicle</h2>

            <p>Year: <strong>{vehicle.year}</strong></p>
            <p>Make: <strong>{vehicle.make}</strong></p>
            <p>Model: <strong>{vehicle.model}</strong></p>
            <p>Color: <strong>{vehicle.color}</strong></p>
            <p>VIN: <strong>{vehicle.vin}</strong></p>
            <p>Unit: <strong>{vehicle.unit}</strong></p>
            <p>License Plate: <strong>{vehicle.lp}</strong></p>
            <p>RegState: <strong>{vehicle.regState}</strong></p>
            <p>RegExp: <strong>{new Date(vehicle.regExp).toLocaleDateString()}</strong></p>
            <p>Owner: <strong>{vehicle.owner}</strong></p>
            <p>Created: <strong>{new Date(vehicle.joinDate).toLocaleDateString()}</strong></p>
            <div><Link to={`/vehicles/update/${vehicle._id}`}> Edit </Link></div>
            <div><a href="/" onClick={deleteVehicle}>Delete</a></div>
        </>
    )
}
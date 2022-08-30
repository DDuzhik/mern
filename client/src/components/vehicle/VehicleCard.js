import React from "react"
//import { useLinkClickHandler } from "react-router-dom"

export const VehicleCard = ({vehicle}) => {
    return (
        <>
            <h2>Vehicle</h2>

            <p>Year: <strong>{vehicle.year}</strong></p>
            <p>Make: <strong>{vehicle.make}</strong></p>
            <p>Model: <strong>{vehicle.model}</strong></p>
            <p>Owner: <strong>{vehicle.owner}</strong></p>
            <p>Created: <strong>{new Date(vehicle.joinDate).toLocaleDateString()}</strong></p>
        </>
    )
}
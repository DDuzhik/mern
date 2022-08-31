import React from "react"
import {Link, NavLink} from 'react-router-dom'

export const VehicleList = ({ vehicles }) => {
    //console.log(links)
    if (!vehicles/*.length*/) {
        return <p className="center">VehicleList is empty...</p>
    }


    return (
      <>
        <h2>Vehicles</h2>
        <NavLink to="/vehicles/create">Create new vehicle</NavLink>
        <table>
        <thead>
          <tr>
              <th>#</th>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>License Plate</th>
          </tr>
        </thead>

        <tbody>
            { vehicles.map( (vehicles, index) => {
              return (
                <tr key={vehicles._id}>
                    <td>{index + 1}</td>
                    <td>
                        <Link to={`/vehicles/${vehicles._id}`}> {vehicles.year} </Link>
                    </td>
                    <td>
                        <Link to={`/vehicles/${vehicles._id}`}> {vehicles.make} </Link>
                    </td>
                    <td>
                        <Link to={`/vehicles/${vehicles._id}`}> {vehicles.model} </Link>
                    </td>
                    <td>
                        <Link to={`/vehicles/${vehicles._id}`}> {vehicles.lp} </Link>
                    </td>
                    
                </tr>
              )  
            })}
          
          
        </tbody>
      </table>
      </>
    )
}
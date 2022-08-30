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
        <NavLink to="/vehicles/create">Create</NavLink>
        <table>
        <thead>
          <tr>
              <th>#</th>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>Action</th>
          </tr>
        </thead>

        <tbody>
            { vehicles.map( (vehicles, index) => {
              return (
                <tr key={vehicles._id}>
                    <td>{index + 1}</td>
                    <td>{vehicles.year}</td>
                    <td>{vehicles.make}</td>
                    <td>{vehicles.model}</td>
                    <td>
                        <Link to={`/vehicles/${vehicles._id}`}> Open </Link>
                    </td>
                </tr>
              )  
            })}
          
          
        </tbody>
      </table>
      </>
    )
}
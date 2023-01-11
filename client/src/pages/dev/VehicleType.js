import React from "react"
import vh from '../../data/vh'

export const VehicleType = () => {

    const type = vh.vehicleType

    return (
      <>
        <h2>VehicleTypes</h2>
        
        <table>
        <thead>
          <tr>
              <th>#</th>
              <th>Name</th>
              <th>Code</th>
              <th>Note</th>
          </tr>
        </thead>

        <tbody>
            { type.map( (type, index) => {
              return (
                <tr key={type._id}>
                    <td>{index + 1}</td>
                    <td>
                         {type.name}
                    </td>
                    <td>
                        {type.code}
                    </td>
                    <td>
                    {type.note}
                    </td>
                    
                    
                </tr>
              )  
            })}
          
          
        </tbody>
      </table>
      </>
    )
}
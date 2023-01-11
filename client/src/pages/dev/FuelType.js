import React from "react"
import vh from '../../data/vh'

export const FuelType = () => {

    const type = vh.fuelType

    return (
      <>
        <h2>FuelTypes</h2>
        
        <table>
        <thead>
          <tr>
              <th>#</th>
              <th>Name</th>
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
import React from "react"
import vh from '../../data/vh'

export const EngineType = () => {

    const type = vh.engineType

    return (
      <>
        <h2>EngineTypes</h2>
        
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
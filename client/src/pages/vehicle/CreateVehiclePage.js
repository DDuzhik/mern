import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hooks'
import { useMessage } from '../../hooks/message.hook'

export const CreateVehiclePage = () => {
    const history = useNavigate()
    const message = useMessage()
    const auth = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()
    const [vehicle, setVehicle] = useState({
        year: '', make: '', model: ''
    })

    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect( () => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setVehicle({...vehicle, [event.target.name]: event.target.value })
        //console.log(vehicle)
    }

    const createHandler = async () => {
        try {
            const data = await request('/api/vehicle/create', 'POST', {...vehicle}, {
                Authorization: `Bearer ${auth.token}`
            })
            message(data.message)
            history(`/vehicles/${data.vehicle._id}`)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Create Vehicle</span>
                        <div>

                            <div className="input-field">
                                <input 
                                    placeholder="Enter year" 
                                    id="year" 
                                    type="text"
                                    name="year"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="Year">Year</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder="Enter make" 
                                    id="make" 
                                    type="text"
                                    name="make"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="make">Make</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder="Enter model" 
                                    id="model" 
                                    type="text"
                                    name="model"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">Model</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                            className="btn yellow darken-4" 
                            style={{marginRight: 10}}
                            onClick={createHandler}
                            disabled={loading}
                        >
                            Create Vehicle
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
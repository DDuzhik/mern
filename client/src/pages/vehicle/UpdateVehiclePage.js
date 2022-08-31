import React, { useCallback, useContext, useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
//import { VehicleCard } from '../../components/vehicle/VehicleCard'
import { Loader } from '../../components/Loader'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hooks'
import { useMessage } from '../../hooks/message.hook'

export const UpdateVehiclePage = () => {

    const {token} = useContext(AuthContext)
    const auth = useContext(AuthContext)
    const history = useNavigate()
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [vehicle, setVehicle] = useState({
        year: '',
        make: '',
        model: '',
        color: '',
        vin: '',
        unit: '',
        lp: ''
    })
    const linkId = useParams().id

//    console.log(vehicle)

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

    const updateHandler = async () => {
        try {
            const data = await request('/api/vehicle/update', 'PUT', {...vehicle}, {
                Authorization: `Bearer ${auth.token}`
            })
            message(data.message)
            history(`/vehicles/${data.vehicle._id}`)
        } catch (e) {}
    }

    if (loading) {
        return <Loader />
    }

    return (
        <>
           { loading && <Loader />}

        <div className="row">
            <div className="col s6 offset-s3">
                
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Update Vehicle</span>
                        <div>

                            <div className="input-field">
                                <input 
                                     
                                    id="year" 
                                    type="number"
                                    name="year"
                                    value={vehicle.year}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="Year">Year</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="make" 
                                    type="text"
                                    name="make"
                                    value={vehicle.make}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="make">Make</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="model" 
                                    type="text"
                                    name="model"
                                    value={vehicle.model}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">Model</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="color" 
                                    type="text"
                                    name="color"
                                    value={vehicle.color}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">Color</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="vin" 
                                    type="text"
                                    name="vin"
                                    value={vehicle.vin}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">VIN</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="unit" 
                                    type="text"
                                    name="unit"
                                    value={vehicle.unit}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">Unit#</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="lp" 
                                    type="text"
                                    name="lp"
                                    value={vehicle.lp}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">License Plate</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="regState" 
                                    type="text"
                                    name="regState"
                                    value={vehicle.regState}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">RegState</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    
                                    id="regExp" 
                                    type="date"
                                    name="regExp"
                                    value={new Date(vehicle.regExp).toLocaleDateString('en-ca')}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">RegExp</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                            className="btn yellow darken-4" 
                            style={{marginRight: 10}}
                            onClick={updateHandler}
                            disabled={loading}
                        >
                            Update Vehicle
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
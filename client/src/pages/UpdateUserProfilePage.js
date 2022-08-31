import React, { useCallback, useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
//import { VehicleCard } from '../../components/vehicle/VehicleCard'
import { Loader } from '../components/Loader'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'
import { useMessage } from '../hooks/message.hook'

export const UpdateUserProfilePage = () => {

    const {token} = useContext(AuthContext)
    const auth = useContext(AuthContext)
    const history = useNavigate()
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [userProfile, setUserProfile] = useState({
        email: '',
        fName: '',
        lName: '',
        dateOfBirth: '',
        dl: '',
        dlState: '',
        dlExp: ''
    })
    //const linkId = useParams().id

//    console.log(vehicle)

    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect( () => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setUserProfile({...userProfile, [event.target.name]: event.target.value })
        //console.log(vehicle)
    }

    const getUserProfile = useCallback( async () => {
        try {
            const fetched = await request(`/api/userprofile`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUserProfile(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect( () => {
        getUserProfile()
    }, [getUserProfile])

    const updateHandler = async () => {
        try {
            const data = await request('/api/userprofile/update', 'PUT', {...userProfile}, {
                Authorization: `Bearer ${auth.token}`
            })
            message(data.message)
            history(`/userprofile`)
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
                        <span className="card-title">Update User Profile</span>
                        <div>

                            <div className="input-field">
                                <input 
                                     
                                    id="email" 
                                    type="text"
                                    name="email"
                                    value={userProfile.email}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="Year">E-mail</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="fName" 
                                    type="text"
                                    name="fName"
                                    value={userProfile.fName}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="make">First Name</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="lName" 
                                    type="text"
                                    name="lName"
                                    value={userProfile.lName}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">Last Name</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    
                                    id="dateOfBirth" 
                                    type="date"
                                    name="dateOfBirth"
                                    value={new Date(userProfile.dateOfBirth).toLocaleDateString('en-ca')}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">Date Of Birth</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="dl" 
                                    type="text"
                                    name="dl"
                                    value={userProfile.dl}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">Driver License</label>
                            </div>

                            <div className="input-field">
                                <input 
                                     
                                    id="dlState" 
                                    type="text"
                                    name="dlState"
                                    value={userProfile.dlState}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">Driver License State</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    
                                    id="dlExp" 
                                    type="date"
                                    name="dlExp"
                                    value={new Date(userProfile.dlExp).toLocaleDateString('en-ca')}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">DLExp</label>
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
                            Update User Profile
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
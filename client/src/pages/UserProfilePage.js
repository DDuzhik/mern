import React, { useCallback, useContext, useEffect, useState } from 'react'
//import {useParams} from 'react-router-dom'

import { Loader } from '../components/Loader'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'
import { UserProfileCard } from '../components/UserProfileCard'

export const UserProfilePage = () => {

    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [userProfile, setUserProfile] = useState(null)
    //const linkId = useParams().id


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

    if (loading) {
        return <Loader />
    }

    return (
        <>
           { !loading && userProfile && <UserProfileCard userProfile={userProfile} />}
        </>
    )
}
import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'
import { VehiclesPage } from './pages/VehiclesPage'
import { CreateVehiclePage } from './pages/vehicle/CreateVehiclePage'
import { UpdateVehiclePage } from './pages/vehicle/UpdateVehiclePage'
import { VehiclePage } from './pages/vehicle/VehiclePage'
import { UserProfilePage } from './pages/UserProfilePage'
import { UpdateUserProfilePage } from './pages/UpdateUserProfilePage'
import { DevPage } from './pages/dev/DevPage'
import { ServiceDataPage } from './pages/dev/ServiceDataPage'
import { VehicleType } from './pages/dev/VehicleType'
import { EngineType } from './pages/dev/EngineType'
import { FuelType } from './pages/dev/FuelType'
import { States } from './pages/dev/States'
import { IftaRates } from './pages/dev/IftaRates'


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>

                <Route path="/dev" element={<DevPage />} />
                <Route path="/dev/servicedata" element={<ServiceDataPage />} />
                <Route path="/dev/servicedata/vehicletypes" element={<VehicleType />} />
                <Route path="/dev/servicedata/enginetypes" element={<EngineType />} />
                <Route path="/dev/servicedata/fueltypes" element={<FuelType />} />
                <Route path="/dev/servicedata/states" element={<States />} />
                <Route path="/dev/servicedata/iftarates" element={<IftaRates />} />
                
                
                <Route path="/links" element={<LinksPage />} />                              {/* for Links */}
                <Route path="/userprofile" element={<UserProfilePage />} />
                <Route path="/userprofile/update" element={<UpdateUserProfilePage />} />
                <Route path="/vehicles" element={<VehiclesPage />} />
                <Route path="/vehicles/:id" element={<VehiclePage />} />
                <Route path="/vehicles/create" element={<CreateVehiclePage />} />
                <Route path="/vehicles/update/:id" element={<UpdateVehiclePage />} />
                <Route path="/create" element={<CreatePage />} />                            {/* for Links */}
                <Route path="/detail/:id" element={<DetailPage />} />                        {/* for Links */}
                <Route path="*" element={<Navigate to ="/userprofile" />}/>
            </Routes>
        )
    }

    return (
        
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
        
    )
}
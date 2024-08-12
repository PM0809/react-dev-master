import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import Dashboard from '../core/components/layouts/Dashboard'
import Profile from '../core/components/layouts/Profile'


const ProfileRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Profile/>}/>
    </Routes>
  )
}

export default ProfileRouter
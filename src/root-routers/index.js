import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoreRouter from '../core/routers/CoreRouter'
import AuthRouter from '../auth/routers/AuthRouter'
import DashboardRouter from '../dashboard/DashboardRouter'
import ProfileRouter from '../profiles/ProfileRouter'


const index = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<CoreRouter/>} />
            <Route path='/dashboard' element={<DashboardRouter/>} />
            <Route path='/profile' element={<ProfileRouter/>} />
            <Route path='/auth/*' element={<AuthRouter/>} />
        </Routes>
    </>
  )
}

export default index
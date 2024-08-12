import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../core/components/layouts/Dashboard'


const DashboardRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
    </Routes>
  )
}

export default DashboardRouter
import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Landing from '../components/layouts/Landing'
//import DashboardRouter from '../../dashboard/DashboardRouter'


const CoreRouter = () => {
  return (
    <>
        <Routes>
            
            <Route path='/' element={<Landing />} />
            
        </Routes>
    </>
  )
}

export default CoreRouter
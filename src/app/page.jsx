import React from 'react'
import './page.css'
import Sidebar from './components/sidebar/Sidebar'
import DashboardBoxes from './components/dashboardBoxes/DashboardBoxes'
import ServiceDetails from './components/serviceDetails/ServiceDetails'

const page = () => {
  return (

    
    <div className="App">
            <Sidebar />
            <div className="main-content">
              <div className="main-header">
                  <h1>Dashboard</h1>
                  <p>Home &gt; Dashboard </p>
              </div>
              <div>
                <DashboardBoxes />
                <ServiceDetails />
              </div>
            </div>
        </div>
  )
}

export default page
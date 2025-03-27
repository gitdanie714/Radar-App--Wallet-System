import React from 'react'
import Navbar from '../components/Navbar'
import WalletDashBoard from '../components/WalletDashboard'
import '../styles/Overview.css'


function Overview({OpenSidebar}) {
  return (
    <div className='main'>
       <Navbar OpenSidebar={OpenSidebar}/>
       <WalletDashBoard/>
    </div>
  )
}

export default Overview
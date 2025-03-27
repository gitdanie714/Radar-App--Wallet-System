import React from 'react'
import "../styles/About.css"
import  secureicon from "../Assets/Images/card-security.png"
import coin from "../Assets/Images/coin.png"
import manage from "../Assets/Images/manager.png"
import mywallet from "../Assets/Images/mywallet.png"


function About() {
  return (
    <div className='main-container'>
      <h1>Features</h1>
      <div className='feature_content'>
        <div className='content_box'>
        <img src={coin}  id= "safe_icon"className='myicon'/>
         <h3>Fast Transactions</h3>
        <p>At RedEx, we simplify transportation with fast ride bookings, 
        flexible payment options, and real-time GPS tracking for every journey. </p>
        </div>
        <div className='content_box'>
          <img  src={secureicon} className='myicon'/>
          <h3>Secure Transactions</h3>
        <p>At RedEx, we simplify transportation with fast ride bookings, 
        flexible payment options, and real-time GPS tracking for every journey. </p>
        
        </div>
        <div className='content_box'>
        <img  src={manage} className='feature_icon'/>
        <h3>Secure Transactions</h3>
        <p>At RedEx, we simplify transportation with fast ride bookings, 
        flexible payment options, and real-time GPS tracking for every journey. </p>
        </div>
        <div className='content_box'> 
        <img  src={mywallet} className='feature_icon'/>
          <h3>Secure Transactions</h3>
        <p>At RedEx, we simplify transportation with fast ride bookings, 
        flexible payment options, and real-time GPS tracking for every journey. </p>
        
       
        </div>
        </div>
    </div>
      
  )
}

export default About
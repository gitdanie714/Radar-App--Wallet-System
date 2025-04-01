import React from 'react'
import "../styles/CreateWalletPin.css"
import { useNavigate } from 'react-router-dom'
function CreateWalletPin() {
    const navigate = useNavigate();

  return (
    <div className='create-pin-modal-container'>
        <div className='create-pin-modal'>
        <button href= "/login" id="back"style={{marginbottom: 100,marginRight:"100%",padding:10,backgroundColor:"#007BFF",color:"#fff" ,border:"none",
}}>
        &#8592; 
      </button>
        <div className='modal-text'><h2>Create your Wallet Pin</h2></div>
        <input type='password' className='pin-input-field' placeholder='Enter your PIN'></input>
        <button className='create-pin-button'  onClick={() => navigate('/dashboard')} >Create Pin</button>
        </div>
        
    </div>
  )
}

export default CreateWalletPin
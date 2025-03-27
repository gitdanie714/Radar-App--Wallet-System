import React from 'react'
import "../styles/Works.css"
import signup from "../Assets/Images/signup.png"
import verify from "../Assets/Images/contract.png"
import walletpin from "../Assets/Images/passcode (1).png"
import trans from "../Assets/Images/transaction.png"
import { FaCheck } from "react-icons/fa";
import { TbCircleDashedNumber1 ,TbCircleDashedNumber2, TbCircleDashedNumber3} from "react-icons/tb";





function Works() {
  return (
    <div className='main_container'>
        <h1>How it Works</h1>
        <ul>
          <li>
            <img src={signup}/><br/>
            <div className='icon_container'><TbCircleDashedNumber1 className='icon'/></div>
            <p>Sign Up</p>
          </li>
          <li>
            <img src={verify}/><br/>
            <div className='icon_container'><TbCircleDashedNumber2 className='icon'/></div>
            <p>Verify Details</p>
          </li>
          <li>
            <img src={walletpin}/><br/>
            <div className='icon_container'><TbCircleDashedNumber3 className='icon'/></div>
            <p>Create Wallet Pin</p>
          </li>
          <li>
            <img src={trans}/><br/>
           <div className='icon_container'><FaCheck className='icon'/></div>
            <p>Start Transactions</p>
          </li>
        </ul>
    </div>
  )
}

export default Works
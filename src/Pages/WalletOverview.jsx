import React from 'react'
import Navbar from '../components/Navbar'
import { BsArrowDownLeftCircleFill,BsArrowUpRightCircleFill  } from "react-icons/bs";
import { FaWallet } from "react-icons/fa"
import "../styles/WalletOverview.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ROUTES } from "../constants/routes";

function WalletOverview({OpenSidebar}) {
   const navigate = useNavigate();
  return (
      <div className='main'>
        <div className='wallet-main'>
          <div className="wallet-contain">
          <Navbar OpenSidebar={OpenSidebar} />
      <div className='mywallet'>
          <div className="wallet-balance">
            <h3>Current Balance</h3>
            <h4>₦0.00</h4>
          </div>
          <div className="wallet-buttons">
            <button className="wallet-deposit">Deposit<BsArrowDownLeftCircleFill className='icon'/></button>
            <button className="wallet-withdraw">Withdraw<BsArrowUpRightCircleFill className='icon'/></button>
          
        </div>
      </div>
          </div>
       
      <div className='side-transaction'>
        <h2>Recent Transactions</h2>
        <div className="paymenthistory">
          <div className="paymenthistory-item">
            <div className="paymenthistory-icon"><FaWallet className='icon'/></div>
            <div className="paymenthistory-details">
              <h3>Payment to John Doe</h3>
              <p>₦500.00</p>
              <p>12th Oct, 2023</p>
              <h5 onClick={() => navigate("/dashboard/history")}>View More</h5>
            </div>
            <br />
          </div>
          <div className="paymenthistory-item">
            <div className="paymenthistory-icon"><FaWallet className='icon'/></div>
            <div className="paymenthistory-details">
              <h3>Payment from Jane Smith</h3>
              <p>₦1,000.00</p>
              <p>11th Oct, 2023</p>
              <h5 onClick={() => navigate("/dashboard/history")}>View More</h5>
            </div>
            <br />
          </div>
          <div className="paymenthistory-item">
            <div className="paymenthistory-icon"><FaWallet className='icon'/></div>
            <div className="paymenthistory-details">
              <h3>Payment to Alex Johnson</h3>
              <p>₦750.00</p>
              <p>10th Oct, 2023</p>
              <h5 onClick={() => navigate("/dashboard/history")}>View More</h5>
            </div>
          </div>
          <br />
        </div>
      </div>
       </div>
      </div>
 )
}

export default WalletOverview;
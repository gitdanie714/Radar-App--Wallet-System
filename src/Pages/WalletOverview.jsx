import React from 'react'
import Navbar from '../components/Navbar'
import { BsArrowDownLeftCircleFill,BsArrowUpRightCircleFill  } from "react-icons/bs";
import "../styles/WalletOverview.css"
function WalletOverview({OpenSidebar}) {
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
      </div>
       </div>
      </div>
 )
}

export default WalletOverview;
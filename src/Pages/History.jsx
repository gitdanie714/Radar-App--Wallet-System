import React from 'react'
import { FaFilter , FaWallet } from "react-icons/fa";
import "../styles/History.css"

function History() {
  return (
    <div className='main'>
       <div className="history-header">
          <h1>Transaction History</h1>
          <FaFilter className='filter-icon'/> 
       </div>
       <div className="payment-history-log">
                  <div className="paymenthistory-item">
                    <div className="paymenthistory-icon"><FaWallet className='icon'/></div>
                    <div className="paymenthistory-details">
                      <h3>Payment to John Doe : Deposit </h3>
                      <p>Amount: ₦500.00</p>
                      <p>Date: 12th Oct, 2023</p>
                      <p>Status: Sucessful</p>
                      <h5>View More</h5>
                    </div>
                    <br />
                    </div>
                    <div className="paymenthistory-item">
                    <div className="paymenthistory-icon"><FaWallet className='icon' style={{fontsize: "10px"}}/></div>
                    <div className="paymenthistory-details">
                      <h3>Payment to John Doe : Withdraw</h3>
                      <p>Amount: ₦500.00</p>
                      <p>Date: 12th Oct, 2023</p>
                      <p>Status: Sucessful</p>
                      <h5>View More</h5>
                    </div>
                    <br />
                    </div>
                    <div className="paymenthistory-item">
                    <div className="paymenthistory-icon"><FaWallet className='icon'/></div>
                    <div className="paymenthistory-details">
                      <h3>Payment to John Doe : Deposit</h3>
                      <p>Amount: ₦500.00</p>
                      <p>Date: 12th Oct, 2023</p>
                      <p>Status: Sucessful</p>
                      <h5>View More</h5>
                    </div>
                    <br />
                    </div>
                    <div className="paymenthistory-item">
                    <div className="paymenthistory-icon"><FaWallet className='icon'/></div>
                    <div className="paymenthistory-details">
                      <h3>Payment to John Doe: Withdraw</h3>
                      <p>Amount: ₦500.00</p>
                      <p>Date: 12th Oct, 2023</p>
                      <p>Status: Sucessful</p>
                      <h5>View More</h5>
                    </div>
                    <br />
                    </div>
       </div>
       </div>
  )
}

export default History
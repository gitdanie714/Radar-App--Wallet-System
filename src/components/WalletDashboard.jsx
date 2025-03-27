import React from 'react'
import "../styles/WalletDashboard.css"
import { FaWallet } from "react-icons/fa"

function WalletDashBoard() {
  return (
    <main className='overview'>
      <div className="overview-container">
        <div className="wallet-container">
          <div className="wallet-card">
            <div className="wallet-header">
              <FaWallet className='wallet-icon' style={{ color: '#fff' }}/>
              <h3>Total Balance</h3>
            </div>
            <div className="wallet-content">
              <h2>$400.00</h2>
              <div className="wallet-status">
                <p>Income <span style={{color: '#90EE90'}}>↑</span></p>
                <p>Expenses <span style={{color: 'red'}}>↓</span></p>
              </div>
            </div>
          </div>
          <div className="expense-tracker">
            <h2>Expenses</h2>
          </div>
        </div>
        <div className="transaction-container">
          <div className="transaction-header">
            <h3 style={{ color: '#000' }}>Recent Transactions</h3>
            <button className='transaction-button'>View more</button>
          </div>
          <div className="transaction-list">
            <table>
              <thead>
                <tr>
                  <th><FaWallet style={{ color: '#1a83ff' }}/></th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FaWallet style={{ color: '#1a83ff' }}/></td>
                  <td>Deposit</td>
                  <td>Successful</td>
                  <td>2/3/2025</td>
                </tr>
                <tr>
                  <td><FaWallet style={{ color: '#1a83ff' }}/></td>
                  <td>Withdrawal</td>
                  <td>Pending</td>
                  <td>2/3/2025</td>
                </tr>
                <tr>
                  <td><FaWallet style={{ color: '#1a83ff' }}/></td>
                  <td>Payment</td>
                  <td>Failed</td>
                  <td>2/3/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default WalletDashBoard
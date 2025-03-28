import React from 'react';
import '../styles/Account.css'; 
import { FaUserFriends , FaRegUserCircle , FaQuestionCircle} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

function Account() {
  return (
    <div className="main">
      <div className='account-container'>
      <div className='profile-card'>
       <div>
        <FaRegUserCircle className='profile-icon'/>
       </div>
        <h2 className='profile-name'>John Doe</h2>
        <p className='profile-email'>johndoe@example.com</p>
        <button className='profile-button'>Edit Profile</button>
        <button className='profile-button'>Update Password</button>
        <div className="others">

          <div className="general-content">
            <FaUserFriends className='icon'/>
            <p>Invite Friends</p>
          </div>
          <div className="general-content">
            < FaQuestionCircle className='icon'/>
            <p>FAQ</p>
          </div>
          <div className="general-content">
            <BiSupport className='icon'/>
            <p>Support</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Account;
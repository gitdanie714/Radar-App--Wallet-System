import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "../styles/SideBar.css";
import { SidebarData } from '../data/SidebarData';
import { IconContext } from 'react-icons';
import { IoMdClose } from 'react-icons/io';
import mylogo from "../Assets/Images/mylogo.png";

const SideBar = ({ openSidebarToggle, OpenSidebar }) => {
  const location = useLocation();
  const sidebarClass = openSidebarToggle ? "sidebar-responsive" : "sidebar";

  return (
    <IconContext.Provider value={{ color: "1a83ff" ,size: "23px"}}>
      <aside id="sidebar" className={sidebarClass}>
        <ul className="sidebar-menu-items">
          <div className='logo-container'>
            <img src={mylogo} alt="logo" className='logo' />
            <h3>EasyPay</h3>
          </div>
          <div className='sidebar-utils'>
            <h4>Main Menu</h4>
            <IoMdClose className='close-icon' onClick={OpenSidebar} />
          </div>
          <li className="sidebar-toggle"></li>
          {SidebarData.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index} className={`${item.cName} ${isActive ? 'active' : ''}`}>
                <Link to={item.path}>
                  {item.icons}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </IconContext.Provider>
  );
};

export default SideBar;
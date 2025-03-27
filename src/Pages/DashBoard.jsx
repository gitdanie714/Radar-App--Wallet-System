import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Added missing import
import { ROUTES } from "../constants/routes";
import "../styles/DashBoard.css";
import SideBar from "../components/SideBar";
import Overview from "./Overview";
import WalletOverview from "./WalletOverview";
import History from "./History";
import Account from "./Account";
import Help from "./Help";

function DashBoard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="dashboard">
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Routes>
        <Route path={ROUTES.OVERVIEW} element={<Overview OpenSidebar={OpenSidebar} />} />
        <Route path={ROUTES.WALLET} element={<WalletOverview OpenSidebar={OpenSidebar} />} />
        <Route path={ROUTES.HISTORY} element={<History OpenSidebar={OpenSidebar} />} />
        <Route path={ROUTES.ACCOUNT} element={<Account OpenSidebar={OpenSidebar} />} />
        <Route path={ROUTES.HELP} element={<Help OpenSidebar={OpenSidebar} />} />
        <Route path="*" element={<div>Page Not Found</div>} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default DashBoard;



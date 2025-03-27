import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as   MdIcons from "react-icons/md";
import { useLocation } from 'react-router-dom';

export const SidebarData = [
   
    {
        title:"Overview",
        path:"/dashboard/overview",
        icons: <AiIcons.AiFillDashboard/>,
        cName: "sidebar-text"
    },
    {
        title:"Wallet",
        path:"/dashboard/wallet",
        icons: <FaIcons.FaWallet/>,
        cName: "sidebar-text"
    },
    {
        title:"History",
        path:"/dashboard/history",
        icons: <FaIcons.FaHistory/>,
        cName: "sidebar-text"
    },
    {
        title:"Account",
        path:"/dashboard/account",
        icons: <MdIcons.MdAccountCircle/>,
        cName: "sidebar-text"
    },
    {
        title:"Help",
        path:"/dashboard/help",
        icons: <IoIcons.IoMdHelpCircle/>,
        cName: "sidebar-text"
    },
    {
        title:"Logout",
        path:"/",
        icons: <IoIcons.IoIosLogOut/>,
        cName: "sidebar-text"
    }
]


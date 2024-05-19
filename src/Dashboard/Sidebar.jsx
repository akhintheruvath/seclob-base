import React from 'react';
import {
   BaseLogo,
   CalendarIcon,
   ChartIcon,
   DashboardIcon,
   InvoiceIcon,
   NotificationIcon,
   ScheduleIcon,
   SettingsIcon,
} from "./SidebarIcons";
import { NavLink } from './NavLink';

export const Sidebar = ({ activeLink }) => {

  return (
    <div className='pt-9'>
      <div className='flex items-center justify-center pt-5 pb-11'>
         <div><BaseLogo /></div><h2 className='ml-4 text-[#030229] font-nunito font-semibold text-2xl leading-8'>Base</h2>
      </div>
      <nav>
         <ul>
            <li><NavLink active={activeLink === "/dashboard"} to="/dashboard"><span className={`pl-9 mr-4 h-full flex items-center ${activeLink === "/dashboard" && 'bg-gradient-to-r from-[#ACA9FF]'}`}><DashboardIcon active={activeLink === "/dashboard"} /></span> Dashboard</NavLink></li>
            <li><NavLink active={activeLink === "/upload"} to="/upload"><span className={`pl-9 mr-4 h-full flex items-center ${activeLink === "/upload" && 'bg-gradient-to-r from-[#ACA9FF]'}`}><ChartIcon active={activeLink === "/upload"} /></span> Upload</NavLink></li>
            <li><NavLink active={activeLink === "/invoice"} to="/invoice"><span className={`pl-9 mr-4 h-full flex items-center ${activeLink === "/invoice" && 'bg-gradient-to-r from-[#ACA9FF]'}`}><InvoiceIcon active={activeLink === "/invoice"} /></span> Invoice</NavLink></li>
            <li><NavLink active={activeLink === "/schedule"} to="/schedule"><span className={`pl-9 mr-4 h-full flex items-center ${activeLink === "/schedule" && 'bg-gradient-to-r from-[#ACA9FF]'}`}><ScheduleIcon active={activeLink === "/schedule"} /></span> Schedule</NavLink></li>
            <li><NavLink active={activeLink === "/calendar"} to="/calendar"><span className={`pl-9 mr-4 h-full flex items-center ${activeLink === "/calendar" && 'bg-gradient-to-r from-[#ACA9FF]'}`}><CalendarIcon active={activeLink === "/calendar"} /></span> Calendar</NavLink></li>
            <li><NavLink active={activeLink === "/notification"} to="/notification"><span className={`pl-9 mr-4 h-full flex items-center ${activeLink === "/notification" && 'bg-gradient-to-r from-[#ACA9FF]'}`}><NotificationIcon active={activeLink === "/notification"} /></span> Notification</NavLink></li>
            <li><NavLink active={activeLink === "/settings"} to="/settings"><span className={`pl-9 mr-4 h-full flex items-center ${activeLink === "/settings" && 'bg-gradient-to-r from-[#ACA9FF]'}`}><SettingsIcon active={activeLink === "/settings"} /></span> Settings</NavLink></li>
         </ul>
      </nav>
    </div>
  );
}
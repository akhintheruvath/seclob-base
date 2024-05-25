import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { UploadComponent } from './UploadComponent';
import { NotificationAndProfile } from './NotificationAndProfile';
import { MenuIcon } from './MenuIcon';
import { BaseLogo } from './SidebarIcons';
import { HeadingComponent } from './HeadingComponent';

export const Dashboard = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();
  const activeLink = location.pathname;

  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
  };

  return (
    <div className='flex'>
      <div className={`w-5/6 md:w-72 h-screen fixed top-0 left-0 md:static transition-transform transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
          activeLink={activeLink}
        />
      </div>
      <div className='w-full bg-[#F8FAFF] md:p-8 overflow-hidden'>
        <div className={`md:hidden w-full fixed flex shadow-sm justify-between items-center bg-white px-5 py-7 z-30`}>
          <div className='w-1/3 flex justify-between items-center'>
            <span className='mr-1' onClick={toggleSidebar}><MenuIcon /></span>
            <BaseLogo isSmallScreen={true} />
            <h2 className='text-xl font-semibold text-[#030229]'>Base</h2>
          </div>
          <NotificationAndProfile />
        </div>
        <div className={`md:hidden mt-28 pt-4 justify-between items-center ${activeLink === "/upload" && 'pl-8'}`}>
          <HeadingComponent activeLink={activeLink} />
        </div>
        <div className='py-6 hidden md:flex justify-between items-center'>
          <HeadingComponent activeLink={activeLink} />
          <NotificationAndProfile />
        </div>
        {
          activeLink === "/upload"
            ? <UploadComponent />
            : <div className='flex items-center justify-center w-full h-screen md:h-full'>{activeLink.split("/")[1].toUpperCase()}</div>
        }
      </div>
    </div>
  );
}
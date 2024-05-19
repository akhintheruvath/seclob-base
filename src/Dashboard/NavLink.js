import React from 'react';
import { Link } from 'react-router-dom';

export const NavLink = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`text-[#030229] opacity-50 font-nunito font-semibold flex items-center h-11 mb-6 w-full cursor-pointer ${active && 'text-[#605BFF] opacity-100'}`}
    >
      {children}
    </Link>
  );
};
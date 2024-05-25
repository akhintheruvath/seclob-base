import { useEffect, useRef } from "react";

export const DropDownComponent = ({ isOpen, onClose }) => {
   const dropdownRef = useRef(null);

   // Close the dropdown if clicked outside
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         onClose();
       }
     };
 
     if (isOpen) {
       document.addEventListener('mousedown', handleClickOutside);
     } else {
       document.removeEventListener('mousedown', handleClickOutside);
     }
 
     return () => {
       document.removeEventListener('mousedown', handleClickOutside);
     };
   }, [isOpen, onClose]);

   return (
      <div className="relative">
        <div ref={dropdownRef} className="absolute mt-1 w-40 bg-white rounded-xl h-56 overflow-y-auto no-scrollbar p-2 border-2 border-[#F5F5F5] z-10">
          <ul>
              <li className="px-2 py-3 rounded-xl cursor-pointer mb-1">Technology</li>
              <li className="px-2 py-3 rounded-xl cursor-pointer mb-1">Fashion</li>
              <li className="px-2 py-3 rounded-xl cursor-pointer mb-1">Food</li>
              <li className="px-2 py-3 rounded-xl cursor-pointer mb-1">Travel</li>
              <li className="px-2 py-3 rounded-xl cursor-pointer mb-1">Sports</li>
              <li className="px-2 py-3 rounded-xl cursor-pointer mb-1">Music</li>
              <li className="px-2 py-3 rounded-xl cursor-pointer mb-1">Art</li>
              <li className="px-2 py-3 rounded-xl cursor-pointer mb-1">Health</li>
              <li className="px-2 py-3 rounded-xl cursor-pointer mb-1">Education</li>
              <li className="px-2 py-3 rounded-xl cursor-pointer">Finance</li>
          </ul>
        </div>
      </div>
   );
}
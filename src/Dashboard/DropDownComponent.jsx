import { useEffect, useRef } from "react";

export const DropDownComponent = ({ isOpen, onClose, selectedTags }) => {
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
              <li className={`px-2 py-3 rounded-xl cursor-pointer mb-1 ${selectedTags.some(val => val === "Technology") && 'bg-[#F5F5F5]'}`}>Technology</li>
              <li className={`px-2 py-3 rounded-xl cursor-pointer mb-1 ${selectedTags.some(val => val === "Fashion") && 'bg-[#F5F5F5]'}`}>Fashion</li>
              <li className={`px-2 py-3 rounded-xl cursor-pointer mb-1 ${selectedTags.some(val => val === "Food") && 'bg-[#F5F5F5]'}`}>Food</li>
              <li className={`px-2 py-3 rounded-xl cursor-pointer mb-1 ${selectedTags.some(val => val === "Travel") && 'bg-[#F5F5F5]'}`}>Travel</li>
              <li className={`px-2 py-3 rounded-xl cursor-pointer mb-1 ${selectedTags.some(val => val === "Sports") && 'bg-[#F5F5F5]'}`}>Sports</li>
              <li className={`px-2 py-3 rounded-xl cursor-pointer mb-1 ${selectedTags.some(val => val === "Music") && 'bg-[#F5F5F5]'}`}>Music</li>
              <li className={`px-2 py-3 rounded-xl cursor-pointer mb-1 ${selectedTags.some(val => val === "Art") && 'bg-[#F5F5F5]'}`}>Art</li>
              <li className={`px-2 py-3 rounded-xl cursor-pointer mb-1 ${selectedTags.some(val => val === "Health") && 'bg-[#F5F5F5]'}`}>Health</li>
              <li className={`px-2 py-3 rounded-xl cursor-pointer mb-1 ${selectedTags.some(val => val === "Education") && 'bg-[#F5F5F5]'}`}>Education</li>
              <li className={`px-2 py-3 rounded-xl cursor-pointer ${selectedTags.some(val => val === "Finance") && 'bg-[#F5F5F5]'}`}>Finance</li>
          </ul>
        </div>
      </div>
   );
}
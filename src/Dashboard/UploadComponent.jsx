import React, { Fragment, useRef, useState } from 'react';
import { ExcelSheetIcon } from './ExcelSheetIcon';
import { UploadIcon } from './UploadIcon';
import { LoadingIcon } from './LoadingIcon';
import sampleData from '../data/sampleData.json';
import { DropDownIcon } from './DropDownIcon';
import { DropDownComponent } from './DropDownComponent';
import { SelectedTag } from './SelectedTag';

export const UploadComponent = () => {
   const [selectedFile, setSelectedFile] = useState(null);
   const [isDragging, setIsDragging] = useState(false);
   const [isUploading, setIsUploading] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [clickedIndex, setClickedIndex] = useState(null);
   const fileInputRef = useRef(null);

   const sampleDataObjs = JSON.parse(JSON.stringify(sampleData));

   const handleFileSelect = (event) => {
      const file = event.target.files[0];
      if(file) {
         setSelectedFile(file);
      }
   };

   const removeSelection = () => {
      if(!isUploading) {
         setSelectedFile(null);
         fileInputRef.current.value = "";
      }
   }

   function handleDrag(event) {
      event.preventDefault();
      event.stopPropagation();
   }

   const handleDragOverAndEnter = (event) => {
      handleDrag(event);
      setIsDragging(true);
   };

   const handleDragLeave = (event) => {
      handleDrag(event);
      setIsDragging(false);
   };

   const handleDrop = (event) => {
      handleDrag(event);
      setIsDragging(false);

      const file = event.dataTransfer.files[0];
      if (file) {
         setSelectedFile(file);
      }
   };

   const handleUpload = () => {
      if(!isUploading && selectedFile) {
         setIsUploading(true);
         setTimeout(() => {
            setSelectedFile(null);
            setIsUploading(false);
         }, 3000);
      }
   }

   const handleDropDownClick = (i, e) => {
      setIsDropdownOpen(prev => !prev);
      setClickedIndex(i);
      e.preventDefault();
   }

   return (
      <div>
         <div className='flex justify-center mb-16 md:mb-32'>
            <div className='w-11/12 sm:w-3/5 lg:w-2/5 h-96 min-w-80 min-h-60 bg-white rounded-lg p-4 mt-8 md:mt-32 shadow-md md:shadow-none'>
               <div
                  className={`w-full flex flex-col p-3 items-center justify-center h-[284px] border-dashed border-2 border-[#EBEBEB] rounded-lg ${isDragging && 'bg-gray-200'}`}
                  onDragOver={handleDragOverAndEnter}
                  onDragEnter={handleDragOverAndEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
               >
                  <ExcelSheetIcon />
                  {
                     selectedFile
                     ? (
                        <>
                           <p className='mt-6 text-[#999CA0] font-figtree'>
                              {selectedFile.name}
                           </p>
                           <button
                              className='mt-4 text-[#D33030] text-sm'
                              onClick={removeSelection}
                              disabled={isUploading}
                           >
                              Remove
                           </button>
                        </>
                     )
                     : (
                        <>
                           <p className='hidden md:block mt-6 text-[#999CA0]'>
                              Drop your excel sheet here or
                              <label htmlFor='fileInput' className='text-[#605BFF]'> browse</label>
                           </p>
                           <p className='md:hidden mt-6 text-[#999CA0]'>
                              Upload your excel sheet
                              <label htmlFor='fileInput' className='text-[#605BFF]'> here</label>
                           </p>
                        </>
                     )
                  }
                  <input
                     className='hidden'
                     id='fileInput'
                     type='file'
                     ref={fileInputRef}
                     onChange={handleFileSelect}
                  />
               </div>
               <button
                  className={`bg-[#605BFF] w-full mt-5 flex items-end justify-center p-3 rounded-lg font-montserrat text-white font-bold ${selectedFile ? 'bg-opacity-100' : 'bg-opacity-40 cursor-default'}`}
                  onClick={handleUpload}
               >
                  {
                     isUploading ? (
                        <LoadingIcon />
                     ) : (
                        <>
                           <UploadIcon />
                           <span className="ml-2">Upload</span>
                        </>
                     )
                  }
               </button>
            </div>
         </div>

         <h2 className='ml-7 md:ml-14 mb-11 font-figtree font-semibold text-2xl text-black'>Uploads</h2>
         <div className='mx-7 md:mx-14 p-4 bg-[#F5F5F5] rounded-lg overflow-x-auto'>
            <table className='w-full bg-[#F5F5F5]'>
               <thead>
                  <tr>
                     <th className='font-figtree text-sm text-[#231F20] text-left pt-1 pb-5 pl-5 min-w-24'>SI No.</th>
                     <th className='font-figtree text-sm text-[#231F20] text-left pt-1 pb-5 pl-5 md:min-w-56'>Links</th>
                     <th className='font-figtree text-sm text-[#231F20] text-left pt-1 pb-5 pl-5 min-w-36'>Prefix</th>
                     <th className='font-figtree text-sm text-[#231F20] text-left pt-1 pb-5 pl-5 min-w-60'>Add Tags</th>
                     <th className='font-figtree text-sm text-[#231F20] text-left pt-1 pb-5 pl-5'>Selected Tags</th>
                  </tr>
               </thead>
               <tbody>
               {
                  sampleDataObjs.map((obj, index) => {
                     return (
                        <Fragment key={index}>
                           <tr className='bg-white'>
                              <td className='bg-[#F5F5F5] md:bg-white font-figtree text-sm text-[#231F20] px-5 py-4 min-w-24 rounded-l-lg'>{obj.id < 10 ? `0${obj.id}` : obj.id}</td>
                              <td className='font-figtree md:min-w-56 text-sm text-[#231F20] px-5 py-4 rounded-l-lg md:rounded-none'>
                                 <a href={`http://${obj.links}`} target='_blank' rel="noreferrer" className='text-[#5B93FF] underline cursor-pointer'>{obj.links}</a>
                              </td>
                              <td className='font-figtree text-sm text-[#231F20] px-5 py-4  min-w-36'>{obj.prefix}</td>
                              <td className='font-figtree text-sm text-[#231F20] px-5 py-4 min-w-60'>
                                 <div
                                    className='flex items-center justify-center border border-[#F2F2F2] rounded-lg py-1 cursor-pointer w-40'
                                    onClick={(e) => handleDropDownClick(index, e)}
                                 >
                                    <span className='mr-3'>Select Tags</span>
                                    <DropDownIcon />
                                 </div>
                                 {
                                    clickedIndex === index && isDropdownOpen && (
                                       <DropDownComponent
                                          isOpen={isDropdownOpen}
                                          onClose={() => setIsDropdownOpen(false)}
                                          selectedTags={obj.selectedTags}
                                       />
                                    )
                                 }
                              </td>
                              <td className='px-5 py-4 rounded-r-lg'>
                                 <div className='flex items-center'>
                                    {
                                       obj.selectedTags.map((val, index) => {
                                          return (
                                             <SelectedTag key={index} textContent={val} />
                                          )
                                       })
                                    }
                                 </div>
                              </td>
                           </tr>
                           {
                              index < sampleDataObjs.length - 1 && (
                                 <tr>
                                    <td colSpan="5">
                                       <div className='h-3 bg-[#F5F5F5]'></div>
                                    </td>
                                 </tr>
                              )
                           }
                        </Fragment>
                     );
                  })
               }
               </tbody>
            </table>
         </div>
      </div>
   );
}
import React from 'react';
import { ExcelSheetIcon } from './ExcelSheetIcon';

export const UploadComponent = () => {
  return (
      <div className='flex justify-center h-full'>
         <div className='w-2/5 h-1/2 min-w-80 min-h-60 bg-white rounded-lg p-5'>
            <div className='w-full flex flex-col p-3 items-center justify-center h-5/6 border-dashed border-2 border-[#EBEBEB] rounded-lg'>
               <ExcelSheetIcon />
               <p className='mt-6'>Drop your excel sheet here or <span>browse</span></p>
            </div>
            <button
               className='bg-[#605BFF] w-full mt-5 flex items-end justify-center p-3 rounded-lg font-montserrat text-white font-bold'
            >
               Upload
            </button>
         </div>
      </div>
  );
}
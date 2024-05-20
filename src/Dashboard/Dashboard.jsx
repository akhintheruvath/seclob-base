import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { UploadComponent } from './UploadComponent';
import { BlankNotificationIcon } from './BlankNotificationIcon';

export const Dashboard = () => {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <div className='flex'>
      <div className='w-72 h-screen'>
         <Sidebar activeLink={activeLink} />
      </div>
      <div className='w-full bg-[#F8FAFF] p-8'>
        <div className='py-6 flex justify-between items-center'>
          <h2 className='font-figtree font-semibold text-2xl text-black'>
            {
              activeLink === "/upload"
                ? "Upload CSV"
                : <div className='flex items-center justify-center w-full h-full'>{activeLink.split("/")[1].toUpperCase()}</div>
            }
          </h2>
          <div className='flex items-center'>
            <BlankNotificationIcon />
            <div class="relative w-9 h-9 overflow-hidden rounded-full ml-8">
              <img src="https://s3-alpha-sig.figma.com/img/203e/bb33/eccd71f34638f7751900105c639d563d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nbUdO90HVm5HeNxt3gOaeRhnrCdp2H5UxH-anXe4xrERqQz1gEGDyww78W~B4CX7iWRdviyGNN6F9mbHeuIKFYaelIk6STgV2~F~yBRhzLd1bFjRu~kglY9kinum9LzEHzp2sQyLP255kqqoQ7M10cdOR2sfu4FbGxNRamiDxfnvcHCCY1s3~sqrlSskE5pMvxpUSpY-C2Tiewa1G3rLoiepajNCdF8H~iYoagJQPlWmcMfCHMZeJs8Wt89aAUXYUzCvHW0Z-~QoirKYusJII-OF4sQqtBqhhgLaDWtb85ZnUWFrI5AHUrif~FR7qJecYhIoundiu2Hnn3dZYj8tVw__" alt="Profile" class="absolute top-[-18px] w-20 h-20 object-cover" />
            </div>
          </div>
        </div>
         {
            activeLink === "/upload"
              ? <UploadComponent />
              : <div className='flex items-center justify-center w-full h-full'>{activeLink.split("/")[1].toUpperCase()}</div>
         }
      </div>
    </div>
  );
}
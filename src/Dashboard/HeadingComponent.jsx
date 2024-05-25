export const HeadingComponent = ({ activeLink }) => {
   return (
      <h2 className='font-figtree font-semibold text-2xl text-black'>
         {
         activeLink === "/upload"
            ? "Upload CSV"
            : <div className='flex items-center justify-center w-full h-full'>{activeLink.split("/")[1].toUpperCase()}</div>
         }
      </h2>
   );
}
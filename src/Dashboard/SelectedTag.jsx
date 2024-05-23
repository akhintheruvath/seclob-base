import { CloseIcon } from "./CloseIcon";

export const SelectedTag = ({ textContent }) => {
   return (
      <div className="p-2 bg-[#605BFF] text-white font-semibold font-figtree text-[10px] flex items-center justify-center rounded-md mx-1">
         {textContent} <span className="ml-2"><CloseIcon /></span>
      </div>
   );
}
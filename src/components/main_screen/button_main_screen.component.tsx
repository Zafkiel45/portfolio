import { Button } from "@/types/buttons";

export const MainScreenButton = ({btnContent, ...props}: Button) => {
  return (
    //rgba(25, 50, 127, 1)
    <button {...props} className="border border-white rounded-xl cursor-pointer hover:bg-[#A3FF00] hover:text-slate-900 transition-colors hover:border-none lg:h-11 lg:w-32 px-2 py-1 h-10 w-32 lg:px-4 lg:py-2">
      {btnContent}
    </button>
  )
};
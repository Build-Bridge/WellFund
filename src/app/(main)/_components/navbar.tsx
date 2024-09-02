import { Search } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full bg-[#0E0F1D] p-4 flex justify-center">
      <div className="bg-[#242A32] w-11/12 relative text-center p-2 flex justify-betweeen rounded">
        <div className="flex items-center gap-2 w-1/2">
          <Search className="text-[#D4D8DF] w-4 h-4"/>
          <input className="bg-transparent outline-none w-11/12 text-[#D4D8DF] placeholder:font-[#D4D8DF]" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";
import  Link  from "next/link";
import {
  AlignStartVertical,
  ChartNoAxesColumn,
  ChevronLeft,
  Headset,
  LayoutDashboard,
  Settings,
  UserRoundCog,
} from "lucide-react";
import { usePathname } from "next/navigation";
export const Navigation = () => {
  const pathname  = usePathname();

  const navStyle = "flex gap-2 items-center font-sans";
  return (
    <aside className="group/sidebar relative overflow-y-auto flex h-full justify-between p-3 flex-col z-[99999] bg-[#242A32]">
  <button className="absolute -right-1 transform translate-x-1/2 rounded-full w-8 h-8 bg-[#64748B] border-4 border-[#14141E] flex items-center justify-center">
    <ChevronLeft className="w-[15px] h-[15px]" />
  </button>
<div className="w-full flex items-center justify-between text-white font-semibold text-xl">
  <div>WellFund</div>
</div>
      <div className="flex flex-col w-full text-[#546175] items-center text-sm tracking-wide">
        <div className="flex flex-col gap-y-3">
        <Link
      href="/"
      passHref
      className={cn(
        "flex w-full relative rounded-lg items-center gap-2 px-4 py-2", // adjust padding to match the image
        pathname === "/" && "bg-slate-700 text-white"
      )}
    >
      <LayoutDashboard
        className={cn(
          "w-[18px] h-[18px] text-gray-400", // default color to match the image
          pathname === "/" && "text-white" // active state for the icon
        )}
      />
      <span
        className={cn(
          "text-sm text-gray-400", // default text color
          pathname === "/" && "text-white" // active state for the text
        )}
        >
        Dashboards
      </span>
        {pathname === "/" && (
         <div className="absolute right-0 h-5 w-1 bg-[#64748B] rounded-r-lg" />
       )}
    </Link>
          <div className={navStyle}>
            <img src="Circle.svg" className="w-[10px] h-[10px]" />
            Analytics
          </div>
          <div className={navStyle}>
            <img src="Circle.svg" className="w-[10px] h-[10px]" />
            E-commerce
          </div>
          <div className={navStyle}>
            <AlignStartVertical className="w-[18px] h-[18px]" />
            Layouts
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-1 text-[#546175]">
        <span className="text-[10px]">Apps & Pages</span>
        <div className="flex flex-col w-full items-center text-sm">
          <div className="flex flex-col gap-y-3">
            <div className={navStyle}>
              <UserRoundCog className="w-[18px] h-[18px]" />
              User Management
            </div>
            <div className={navStyle}>
              <img src="money-bag-01.svg" className="w-[18px] h-[18px]" />
              Loan Management
            </div>
            <div className={navStyle}>
              <img src="product-loading.svg" className="w-[18px] h-[18px]" />
              Product Management
            </div>
            <div className={navStyle}>
              <img src="border-full.svg" className="w-[18px] h-[18px]" />
              Order Management
            </div>
            <div className={navStyle}>
              <img src="coins-01.svg" className="w-[18px] h-[18px]" />
              Financial Management
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-1 text-[#546175]">
        <span className="text-[10px]">Components</span>
        <div className="flex flex-col w-full items-center text-sm pb-5">
          <div className="flex flex-col gap-y-3">
            <div className={navStyle}>
              <ChartNoAxesColumn className="w-[18px] h-[18px]" />
              Reports and Analytcis
            </div>
            <div className={navStyle}>
              <Headset className="w-[18px] h-[18px]" />
              Support and Feedback
            </div>
            <div className={navStyle}>
              <Settings className="w-[18px] h-[18px]" />
              Settings
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

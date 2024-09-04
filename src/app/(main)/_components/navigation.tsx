import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  AlignStartVertical,
  ChartNoAxesColumn,
  Headset,
  LayoutDashboard,
  Settings,
  UserRoundCog,
  ChartNoAxesCombined
} from "lucide-react";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  const navStyle = "flex gap-2 items-center font-sans relative";

  return (
    <aside className="group/sidebar relative w-auto overflow-y-auto flex h-full justify-between p-3 flex-col z-[99999] bg-[#242A32]">
      <div className="w-full flex text-center text-white font-semibold text-xl">
        WellFund
      </div>
      <div className="flex flex-col w-full text-[#546175] items-center text-sm tracking-wide">
        <div className="flex flex-col gap-y-3">

          {/* Dashboards */}
          <Link
            href="/"
            passHref
            className={cn(
              "flex w-full relative rounded-md items-center gap-2 px-4 py-1",
              pathname === "/" && "bg-slate-700 text-white"
            )}
          >
            <LayoutDashboard
              className={cn(
                "w-[18px] h-[18px] text-gray-400",
                pathname === "/" && "text-white"
              )}
            />
            <span
              className={cn(
                "text-sm text-gray-400",
                pathname === "/" && "text-white"
              )}
              >
              Dashboards
            </span>
          </Link>

          {/* Analytics */}
          <Link
            href="/analytics"
            passHref
            className={cn(
              "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
              pathname === "/analytics" && "bg-slate-700 text-white"
            )}
          >
            <ChartNoAxesCombined
              className={cn(
                "w-[18px] h-[18px] text-gray-400",
                pathname === "/analytics" && "text-white"
              )}
            />
            <span
              className={cn(
                "text-sm text-gray-400",
                pathname === "/analytics" && "text-white"
              )}
            >
              Analytics
            </span>
          </Link>

          {/* E-commerce */}
          <Link
            href="/e-commerce"
            passHref
            className={cn(
              "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
              pathname === "/e-commerce" && "bg-slate-700 text-white"
            )}
          >
            {pathname === "/e-commerce" && (
              <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
            )}
            <img src="Circle.svg" className="w-[10px] h-[10px]" />
            <span
              className={cn(
                "text-sm text-gray-400",
                pathname === "/e-commerce" && "text-white"
              )}
            >
              E-commerce
            </span>
          </Link>

          {/* Layouts */}
          <Link
            href="/layouts"
            passHref
            className={cn(
              "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
              pathname === "/layouts" && "bg-slate-700 text-white"
            )}
          >
            {pathname === "/layouts" && (
              <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
            )}
            <AlignStartVertical
              className={cn(
                "w-[18px] h-[18px] text-gray-400",
                pathname === "/layouts" && "text-white"
              )}
            />
            <span
              className={cn(
                "text-sm text-gray-400",
                pathname === "/layouts" && "text-white"
              )}
            >
              Layouts
            </span>
          </Link>

        </div>
      </div>

      <div className="flex flex-col w-full gap-y-1 text-[#546175]">
        <span className="text-[10px]">Apps & Pages</span>
        <div className="flex flex-col w-full items-center text-sm">
          <div className="flex flex-col gap-y-3">
            
            {/* User Management */}
            <Link
              href="/user-management"
              passHref
              className={cn(
                "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
                pathname === "/user-management" && "bg-slate-700 text-white"
              )}
            >
              {pathname === "/user-management" && (
                <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
              )}
              <UserRoundCog
                className={cn(
                  "w-[18px] h-[18px] text-gray-400",
                  pathname === "/user-management" && "text-white"
                )}
              />
              <span
                className={cn(
                  "text-sm text-gray-400",
                  pathname === "/user-management" && "text-white"
                )}
              >
                User Management
              </span>
            </Link>

            {/* Loan Management */}
            <Link
              href="/loan-management"
              passHref
              className={cn(
                "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
                pathname === "/loan-management" && "bg-slate-700 text-white"
              )}
            >
              {pathname === "/loan-management" && (
                <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
              )}
              <img src="money-bag-01.svg" className="w-[18px] h-[18px]" />
              <span
                className={cn(
                  "text-sm text-gray-400",
                  pathname === "/loan-management" && "text-white"
                )}
              >
                Loan Management
              </span>
            </Link>

            {/* Product Management */}
            <Link
              href="/product-management"
              passHref
              className={cn(
                "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
                pathname === "/product-management" && "bg-slate-700 text-white"
              )}
            >
              {pathname === "/product-management" && (
                <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
              )}
              <img src="product-loading.svg" className="w-[18px] h-[18px]" />
              <span
                className={cn(
                  "text-sm text-gray-400",
                  pathname === "/product-management" && "text-white"
                )}
              >
                Product Management
              </span>
            </Link>

            {/* Order Management */}
            <Link
              href="/order-management"
              passHref
              className={cn(
                "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
                pathname === "/order-management" && "bg-slate-700 text-white"
              )}
            >
              {pathname === "/order-management" && (
                <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
              )}
              <img src="border-full.svg" className="w-[18px] h-[18px]" />
              <span
                className={cn(
                  "text-sm text-gray-400",
                  pathname === "/order-management" && "text-white"
                )}
              >
                Order Management
              </span>
            </Link>

            {/* Financial Management */}
            <Link
              href="/financial-management"
              passHref
              className={cn(
                "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
                pathname === "/financial-management" && "bg-slate-700 text-white"
              )}
            >
              {pathname === "/financial-management" && (
                <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
              )}
              <img src="coins-01.svg" className="w-[18px] h-[18px]" />
              <span
                className={cn(
                  "text-sm text-gray-400",
                  pathname === "/financial-management" && "text-white"
                )}
              >
                Financial Management
              </span>
            </Link>

          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-y-1 text-[#546175]">
        <span className="text-[10px]">Components</span>
        <div className="flex flex-col w-full items-center text-sm pb-5">
          <div className="flex flex-col gap-y-3">

            {/* Reports and Analytics */}
            <Link
              href="/reports-analytics"
              passHref
              className={cn(
                "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
                pathname === "/reports-analytics" && "bg-slate-700 text-white"
              )}
            >
              {pathname === "/reports-analytics" && (
                <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
              )}
              <ChartNoAxesColumn
                className={cn(
                  "w-[18px] h-[18px] text-gray-400",
                  pathname === "/reports-analytics" && "text-white"
                )}
              />
              <span
                className={cn(
                  "text-sm text-gray-400",
                  pathname === "/reports-analytics" && "text-white"
                )}
              >
                Reports and Analytics
              </span>
            </Link>

            {/* Support and Feedback */}
            <Link
              href="/support-feedback"
              passHref
              className={cn(
                "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
                pathname === "/support-feedback" && "bg-slate-700 text-white"
              )}
            >
              {pathname === "/support-feedback" && (
                <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
              )}
              <Headset
                className={cn(
                  "w-[18px] h-[18px] text-gray-400",
                  pathname === "/support-feedback" && "text-white"
                )}
              />
              <span
                className={cn(
                  "text-sm text-gray-400",
                  pathname === "/support-feedback" && "text-white"
                )}
              >
                Support & Feedback
              </span>
            </Link>

            {/* Settings */}
            <Link
              href="/settings"
              passHref
              className={cn(
                "flex w-full relative rounded-lg items-center gap-2 px-4 py-1",
                pathname === "/settings" && "bg-slate-700 text-white"
              )}
            >
              {pathname === "/settings" && (
                <div className="absolute left-0 h-full w-1 bg-white rounded-r-lg" />
              )}
              <Settings
                className={cn(
                  "w-[18px] h-[18px] text-gray-400",
                  pathname === "/settings" && "text-white"
                )}
              />
              <span
                className={cn(
                  "text-sm text-gray-400",
                  pathname === "/settings" && "text-white"
                )}
              >
                Settings
              </span>
            </Link>

          </div>
        </div>
      </div>
    </aside>
  );
};

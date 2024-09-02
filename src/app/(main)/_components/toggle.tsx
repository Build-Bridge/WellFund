import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

interface Props {
  collapsePanel: () => void;
  expandPanel: () => void;
  isCollapsed: boolean;
}

export const Toggle = ({ collapsePanel, expandPanel, isCollapsed }: Props) => {
  const handleClick = useCallback(() => {
    if (isCollapsed) {
      expandPanel();
    } else {
      collapsePanel();
    }
  }, [isCollapsed, collapsePanel, expandPanel]);

  return (
    <button
      onClick={handleClick}
      className="absolute -ml-8 mt-4 z-[99999] transform translate-x-1/2 rounded-full w-8 h-8 bg-[#64748B] border-4 border-[#14141E] flex items-center justify-center"
    >
      {isCollapsed ? (
        <ChevronRight className="w-[18px] h-[18px] ml-1 text-slate-300" />
      ) : (
        <ChevronLeft className="w-[16px] h-[16px] text-slate-400" />
      )}
    </button>
  );
};

"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Navigation } from "@/app/(main)/_components/navigation";
import { Navbar } from "@/app/(main)/_components/navbar";
import { useState, useRef } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { Toggle } from "./_components/toggle";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const panelRef = useRef<ImperativePanelHandle>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const collapsePanel = () => {
    const panel = panelRef.current;
    if (panel) {
      panel.collapse();
      setIsCollapsed(true);
    }
  };
  const expandPanel = () => {
    const panel = panelRef.current;
    if (panel) {
      panel.expand();
      setIsCollapsed(false);
    }
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full h-full">
      <ResizablePanel
        id="nav"
        ref={panelRef}
        defaultSize={18}
        minSize={17}
        maxSize={19}
        className="w-full h-full"
        collapsible
      >
        <Navigation  />
      </ResizablePanel>
      <ResizablePanel defaultSize={82}>
        <main className="flex min-h-full w-full flex-col ">
          <Toggle isCollapsed={isCollapsed} expandPanel={expandPanel} collapsePanel={collapsePanel}/>
          <Navbar />
          <div className="min-h-full ">{children}</div>
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MainLayout;

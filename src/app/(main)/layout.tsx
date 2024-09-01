"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Navigation } from "@/app/(main)/_components/navigation";
import { Navbar } from "@/app/(main)/_components/navbar";
import {  useRef } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const panelRef = useRef<ImperativePanelHandle>(null);
  const collapsePanel = () => {
    const panel = panelRef.current;
    if (panel) {
      panel.collapse();
    }
  };
  const expandPanel = () => {
    const panel = panelRef.current;
    if (panel) {
      panel.expand();
    }
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="w-full h-[100vh]">
      <ResizablePanel
        id="nav"
        ref={panelRef}
        defaultSize={18}
        minSize={17}
        maxSize={19}
        className="h-[100vh]"
        collapsible
      >
        <Navigation  />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={82}>
        <main className="flex h-[100vh] w-full flex-col overflow-y-scroll">
          <Navbar />
          <div>{children}</div>
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MainLayout;

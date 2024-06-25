"use client";

import { useState } from "react";
import { Button } from "./ButtonAvb";

type TabProps = {
  label: string;
  children: React.ReactNode;
};

const TabTest: React.FC<TabProps> = ({ children }) => {
  // Não renderiza nada diretamente, pois será manipulado pelo componente Tabs.
  return null;
};

type TabsProps = {
  children: React.ReactElement<TabProps>[];
};

const TabsTest: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className=" ">
      <div className="flex gap-2">
        {children.map((child, index) => (
          <Button
            key={index}
            className={`bg-avb-green-800/50 text-foreground hover:bg-avb-green-800 ${
              activeTab === index &&
              "bg-avb-green-500 border hover:bg-avb-green-400 text-zinc-100"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </Button>
        ))}
      </div>
      <div className=" mt-4 text-white h-full">
        {children[activeTab].props.children}
      </div>
    </div>
  );
};

type TabPanelProps = {
  children: React.ReactNode;
};

const TabPanelTest: React.FC<TabPanelProps> = ({ children }) => {
  // Não renderiza nada diretamente, pois o conteúdo é acessado pelo componente Tabs.
  return <div className=" h-full">{children}</div>;
};

export { TabsTest, TabTest, TabPanelTest };

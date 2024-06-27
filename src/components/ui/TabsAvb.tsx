"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ComponentProps,
} from "react";
import { VariantProps, tv } from "tailwind-variants";

interface TabsContextProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface TabsProps {
  defaultIndex?: number;
  children: ReactNode;
}

interface Props {
  index: number;
  children: React.ReactNode;
  className?: string;
}

const TabsContext = createContext<TabsContextProps | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};

const Tabs = ({ defaultIndex = 0, children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="space-y-2">{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children }: ComponentProps<"div">) => {
  return (
    <div className="flex p-1 rounded-md bg-avb-green-200/30 w-fit">
      {children}
    </div>
  );
};

const tabTriggerVariants = tv({
  base: "px-4 py-1 transition-all rounded-sm font-semibold text-muted-foreground",
  variants: {
    variant: {
      default:
        "border-b-2 data-[active=true]:border-avb-green-500 data-[active=true]:text-avb-green-500",
      secondary:
        "data-[active=true]:bg-avb-green-500 data-[active=true]:text-avb-green-100",
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "secondary",
  },
});

const TabTrigger = ({
  index,
  children,
  className,
  variant,
}: Props & VariantProps<typeof tabTriggerVariants>) => {
  const { activeIndex, setActiveIndex } = useTabsContext();
  const isActive = index === activeIndex;

  return (
    <button
      data-active={isActive}
      className={tabTriggerVariants({ variant, className })}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};

const TabContent = ({ children }: ComponentProps<"div">) => {
  return <div className="">{children}</div>;
};

const TabPanel = ({ index, children }: Props) => {
  const { activeIndex } = useTabsContext();
  if (index !== activeIndex) {
    return null;
  }
  return <div className="tab-panel">{children}</div>;
};

export { Tabs, TabList, TabTrigger, TabContent, TabPanel };

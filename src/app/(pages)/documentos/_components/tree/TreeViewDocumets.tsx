"use client";

import { Button } from "@/components/ui/ButtonAvb";
import { useState } from "react";
import { TreeIcon } from "./TreeIcon";
import { TreeNodeChildren } from "./TreeNodeChildren";
import { TreeViewProps } from "../types/TreeViewDocuments";

const TreeView: React.FC<TreeViewProps> = ({ node }) => {
  const [isOpenFolder, setIsOpenFolder] = useState<boolean>(false);

  const toggleOpenFolder = () => {
    if (node.children) {
      setIsOpenFolder(!isOpenFolder);
    }
  };

  return (
    <main>
      <Button onClick={toggleOpenFolder} variant="link">
        <div className="font-bold flex items-center gap-2">
          <TreeIcon hasChildren={!!node?.children} isOpen={isOpenFolder} />
          {node?.name}
        </div>
      </Button>

      {node?.children && (
        <div
          className={`overflow-hidden transition-all duration-600 ${
            !isOpenFolder
              ? "-translate-y-9  opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <TreeNodeChildren isOpen={isOpenFolder} children={node?.children} />
        </div>
      )}
    </main>
  );
};

export { TreeView };

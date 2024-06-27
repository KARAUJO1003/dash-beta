import { TreeNodeChildrenProps } from "../types/TreeViewDocuments";
import { TreeView } from "./TreeViewDocumets";

export const TreeNodeChildren: React.FC<TreeNodeChildrenProps> = ({
  children,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="pl-3">
      {children?.map((child, index) => <TreeView key={index} node={child} />)}
    </div>
  );
};

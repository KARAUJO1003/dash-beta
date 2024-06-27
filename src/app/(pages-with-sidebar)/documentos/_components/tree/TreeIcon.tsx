import { FileText, Folder, FolderOpen } from "lucide-react";
import { TreeIconProps } from "../types/TreeViewDocuments";

export const TreeIcon: React.FC<TreeIconProps> = ({ hasChildren, isOpen }) => {
  if (!hasChildren) {
    return <FileText className="text-avb-green-700 size-5" />;
  }
  return isOpen ? (
    <FolderOpen className="text-avb-green-700 fill-avb-green-300 size-5" />
  ) : (
    <Folder className="text-avb-green-700 fill-avb-green-500 size-5" />
  );
};

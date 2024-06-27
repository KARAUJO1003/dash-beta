interface TreeNode {
  name: string;
  children?: TreeNode[];
}

interface TreeViewProps {
  node: TreeNode;
}

interface TreeIconProps {
  hasChildren: boolean;
  isOpen: boolean;
}

interface TreeNodeChildrenProps {
  children: TreeNode[];
  isOpen: boolean;
}

export type { TreeNode, TreeViewProps, TreeIconProps, TreeNodeChildrenProps };

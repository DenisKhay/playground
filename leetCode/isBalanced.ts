import { TreeNode } from './TreeNode';

function isBalanced(root: TreeNode | null): boolean {
    const traverse = (node: TreeNode, height = 0) => {
        if(!node.left && !node.right) {
            return height;
        }
        let height1 = height,
            height2 = height;
        if(node.left) {
            height1 = traverse(node.left, height + 1);
            if(height1 === -1) {
                return -1;
            }
        }

        if(node.right) {
            height2 = traverse(node.right, height + 1);
            if(height2 === -1) {
                return -1;
            }
        }

        if(Math.abs(height1 - height2) > 1) {
            return -1;
        }
        return Math.max(height1, height2);
    }
    if(!root) {
        return true;
    }
    const num = traverse(root);
    return num !== -1;
}

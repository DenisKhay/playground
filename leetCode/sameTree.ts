import { TreeNode } from './TreeNode';

function isSameTree(p: TreeNode | null, q: TreeNode | null) {
      if(p?.val !== q?.val) {
          return false;
      }
      if(!p || !q) {
          return true;
      }

      const same = isSameTree(p.left, q.left);
      if(same) {
          return isSameTree(p.right, q.right)
      }
      return true;
  }

const rootNode = new TreeNode(1);
const leftNode = new TreeNode(2);
const rightNode = new TreeNode(3);
const leftLeftNode = new TreeNode(5);
rootNode.left = leftNode;
rootNode.right = rightNode;
leftNode.left = leftLeftNode;

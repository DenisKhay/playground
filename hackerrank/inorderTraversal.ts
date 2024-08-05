
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

function inorderTraversal(root: TreeNode | null): number[] {
    const results: number[] = [];
    let pointer: TreeNode | null = root;
    let path: number[] = []; // 0 - left, 1 - right
    let depth = 0;
    const parents: TreeNode[] = [];
    while (pointer) {
        const visited = path.at(depth) ?? null;
        if(visited == null) {
            path.push(0);
            if(!pointer.left) {
                continue;
            }
            parents.push(pointer);
            pointer = pointer.left;
            depth++
        } else if (visited === 0) {
            results.push(pointer.val);
            path.splice(-1, 1, 1); // replace
            if(!pointer.right) {
                continue;
            }
            parents.push(pointer);
            pointer = pointer.right;
            depth++;
        } else if (visited === 1) {
            pointer = parents.pop() ?? null;
            path.pop();
            depth--;
        }
    }
    return results;
};

const rootNode = new TreeNode(1);
const leftNode = new TreeNode(2);
const rightNode = new TreeNode(3);
const leftLeftNode = new TreeNode(5);
rootNode.left = leftNode;
rootNode.right = rightNode;
leftNode.left = leftLeftNode;
inorderTraversal(rootNode);

import { TreeNode } from './TreeNode';

function inorderTraversal0(root: TreeNode | null): number[] {
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


function inorderTraversal1(root: TreeNode | null): number[] {
    const returnRecursive = (root: TreeNode | null, depth: number = 0, parents: TreeNode[] = [], path: number[] = [], results: number[] = []): number[] => {
        const turn = path[depth];
        if(!root) {
            return results;
        }
        if(turn == null) {
            path.push(0);
            if(root.left) {
                parents.push(root);
                return returnRecursive(root.left, ++depth, parents, path, results);
            } else {
                return returnRecursive(root, depth, parents, path, results);
            }
        } else if (turn === 0) { // turn right
            path.splice(-1, 1, 1);
            results.push(root.val);
            if(root.right) {
                parents.push(root);
                return returnRecursive(root.right, ++depth, parents, path, results)
            } else {
                return returnRecursive(root, depth, parents, path, results);
            }
        } else if (turn === 1) {
            path.pop();
            return returnRecursive(parents.pop() ?? null, --depth, parents, path, results)
        } else {
            console.error('OOPs')
            return results;
        }
    }
    return returnRecursive(root);
};

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    const traverse = (root: TreeNode | null | undefined) => {
        if(!root) {
            return;
        }
        traverse(root.left);
        result.push(root.val);
        traverse(root.right);
    }
    traverse(root);

    return result;
}


const rootNode = new TreeNode(1);
const leftNode = new TreeNode(2);
const rightNode = new TreeNode(3);
const leftLeftNode = new TreeNode(5);
rootNode.left = leftNode;
rootNode.right = rightNode;
leftNode.left = leftLeftNode;
console.log(inorderTraversal(rootNode));

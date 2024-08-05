
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

    let path: ('right' | 'left')[] = [];
    const parents: TreeNode[] = [];
    let depth = 0;
    const getVisited = (): null | 'left' | 'right' => {
        return null;
    }
    // left or right | the node |
    while (pointer) {
        // if not roads
        // if left
        // if right
        const visited = path.at(-1) ?? null;
        if(!visited) {
            path.push('left');
            if(!pointer.left) {
                continue;
            }
            parents.push(pointer);
            pointer = pointer.left;
            // go left
            //   if(left exists)
            //      parent.push(pointer)
            //      pointer = node.left
            //      path.push('left');
            //   else
            //      path.push('left')
        } else if (visited === 'left') {
            results.push(pointer.val);
            path.pop();
            path.push('right');
            if(!pointer.right) {
                continue;
            }
            parents.push(pointer);
            pointer = pointer.right;
            // go right
            //   results.push(pointer.val)
            //   if(right exits)
            //      parent.push(pointer)
            //      pointer = node.right;
            //      path.replace('right')
            //   else
            //      path.replace('right')
        } else if (visited === 'right') {
            pointer = parents.pop() ?? null;
            path.pop();
            // go up
            //   pointer = parent.pop();
            //   path.pop();
        }
    }
    return results;
};

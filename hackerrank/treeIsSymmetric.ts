import { TreeNode } from './TreeNode';

function isSymmetric(p: TreeNode | null): boolean {
    const traverse = (l: TreeNode | null, r: TreeNode | null): boolean => {
        if(l?.val !== r?.val) {
            return false;
        }
        if(!l || !r) {
            return true;
        }

        const symmetric = traverse(l.left, r.right);
        if(symmetric) {
            return traverse(l.right, r.left)
        }
        return false;
    }
    return traverse(p?.left ?? null, p?.right ?? null)
}

const rootNode = new TreeNode(1);
const first = new TreeNode(2);
const second = new TreeNode(2);
const third = null;
const fourth = new TreeNode(3);
const fifth = null;
const sixth = new TreeNode(3);
rootNode.left = first;
rootNode.right = second;
first.left = third;
first.right = fourth;
second.left = fifth;
second.right = sixth;

console.log(isSymmetric(rootNode));

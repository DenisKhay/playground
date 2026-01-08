import { TreeNode } from './TreeNode';

function sortedArrayToBST_rec(nums: number[]): TreeNode | null {
    const cI = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[cI]);
    const a1 = nums.slice(0, cI);
    const a2 = nums.slice(cI+1);
    node.left = a1.length ? sortedArrayToBST(a1) : null;
    node.right = a2.length ? sortedArrayToBST(a2) : null;
    return node;
};


function sortedArrayToBST(nums: number[]): TreeNode | null {
    const slicer = (nums: number[]) => {
        const cI = Math.floor(nums.length / 2);
        const left = nums.slice(0, cI);
        const right = nums.slice(cI+1);
        return {center: nums[cI] as number, left, right};
    }
    if(!nums.length) {
        return null;
    }
    const {center, left, right} = slicer(nums);
    const node = new TreeNode(center);
    const queue = [{node, left, right}];
    while(queue.length) {
        const { node, left, right } = queue.shift() ?? {};
        if(!node) continue
        if(left?.length) {
            const d = slicer(left);
            const nodeL = new TreeNode(d.center);
            node.left = nodeL
            queue.push({node: nodeL, left: d.left, right: d.right});
        }
        if(right?.length) {
            const d = slicer(right);
            const nodeR = new TreeNode(d.center);
            node.right = nodeR
            queue.push({node: nodeR, left: d.left, right: d.right});
        }
    }
    return node;
}

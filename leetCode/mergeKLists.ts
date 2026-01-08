import { ListNode } from './deleteDuplicates';
import { insertIntoSortedRecursion } from './insertIntoSorted';

const merge = (a: ListNode | null, b: ListNode | null): ListNode | null => {
    if(!a || !b) return a || b;
    const root = new ListNode();
    const merger = (root: ListNode, first: ListNode | null, second: ListNode | null) => {
        if(!first || !second) {
            root.next = first || second;
            return;
        }
        if(first.val > second.val) {
            root.next = second;
            merger(root.next, second.next, first);
        } else {
            root.next = first;
            merger(root.next, first.next, second);
        }
    }
    merger(root, a, b)

    return root.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const fold = (lists: (ListNode | null)[]): ListNode | null => {
        const item1 = lists.shift() ?? null;
        if(!lists.length) {
            return item1 ?? null;
        }
        const item2 = fold(lists);
        return merge(item1, item2)
    }
    return fold(lists);
};

/*
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
// we have a sorted array

};*/

// ANOTHER WAY TO SOLVE IT IS RECURSIVE FOLDING TWO HALVES OF THE ARR
function mergeKLists_(lists: Array<ListNode | null>): ListNode | null {
    const traverse = (lists: Array<ListNode | null>): ListNode | null => {
        if(lists.length <= 2) {
            return merge(lists[0] ?? null, lists[1] ?? null);
        }
        const center = Math.floor(lists.length / 2)
        return merge(traverse(lists.slice(0, center)), traverse(lists.slice(center))) // first half second half
    }
    return traverse(lists);
}


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let list = lists?.shift() ?? null;
    while(lists.length) {
        const second = lists.shift();
        if(second) {
            list = merge(list, second);
        }
    }
    return list;
}

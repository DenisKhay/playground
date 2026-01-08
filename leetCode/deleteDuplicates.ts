

export class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }



function deleteDuplicates_(head: ListNode | null): ListNode | null {
    if(!head) {return null}
    const listToReturn = {val: head.val, next: null} as ListNode;
    let listPointer = listToReturn;
    let pointer = head?.next;
    while(pointer) {
        if(listPointer.val !== pointer.val) {
            listPointer.next = {val: pointer.val, next: null} as ListNode;
            listPointer = listPointer.next;
        }
        pointer = pointer.next;
    }
    return listToReturn;
};

function deleteDuplicates__(head: ListNode | null): ListNode | null {
    if(!head) {return null}
    if(head.val === head.next?.val) {
        head.next = head.next.next;
        deleteDuplicates(head);
    } else {
        deleteDuplicates(head.next);
    }
    return head;
};


function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) {return null}
    let pointer: ListNode | null = head;
    while (pointer) {
        if(pointer.val === pointer.next?.val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }
    return head;
}

const toListNode = (arr: number[]) => {
    const list = {val: arr[0], next: null} as ListNode;
    let pointer = list;
    for(const val of arr.slice(1)) {
        pointer.next = {val, next: null};
        pointer = pointer.next;
    }
    return list;
}
const fromListNode = (list: ListNode | null) => {
    if(!list) {
       return null;
    }
    const arr = [];
    let pointer: ListNode | null = list;
    while(pointer) {
        arr.push(pointer.val);
        pointer = pointer.next;
    }
    return arr;
}


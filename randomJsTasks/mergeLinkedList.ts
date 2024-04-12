const links = (a: number[], b: number[]) => {
    let aI = 0;
    let bI = 0;
    const list = [];
    while(a[aI] || b[bI]) {
        const aUnderCursorIsLessOrEqualBIsUndefined = a[aI] <= b[bI] || b[bI] == null
        if(aUnderCursorIsLessOrEqualBIsUndefined) {
            while(aUnderCursorIsLessOrEqualBIsUndefined && a[aI] != null) {
                list.push(a[aI]);
                aI++;
            }
        } else {
            while(a[aI] > b[bI]) {
                list.push(b[bI]);
                bI++;
            }
        }
    }
    return list;
}

// const result = links([1,2,3,74, 200], [5,10, 35, 50, 99, 100])

// console.log('result', result);


interface ListNode {
    val: number;
    next: ListNode | null;
}
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1 || !list2) {
        return list1 ?? list2;
    }
    const main: ListNode = {val: 0, next: null};
    let cursor: ListNode | null = main;
    let lCursor: ListNode | null = list1;
    let l2Cursor: ListNode | null = list2;
    while (lCursor && l2Cursor) {
        if(lCursor.val > l2Cursor.val) {
            cursor.next = l2Cursor;
            l2Cursor = l2Cursor.next;
        } else {
            cursor.next = lCursor;
            lCursor = lCursor.next;
        }
        cursor = cursor.next;
    }
    return main.next;
}
// 0, 0,




const linked1 = {val: 0, next: {val: 2, next: {val: 40, next: null}}};
const linked2 = {val: 10, next: {val: 20, next: {val: 21, next: null}}};
mergeTwoLists(linked1, linked2);

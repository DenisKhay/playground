const insertIntoSorted = (el: number, arr: number[]) => {
    if (!arr.length) {
        arr.push(el);
        return;
    }
    if (arr[0] >= el) {
        arr.unshift(el);
        return;
    }
    // @ts-ignore
    if (arr.at(-1) <= el) {
        arr.push(el);
        return;
    }

    let start = 0, end = arr.length - 1;
    while (true) {
        const length = end - start + 1;
        if (length === 2) {
            arr.splice(start + 1, 0, el);
            break;
        }
        const center = start + Math.floor(length / 2);
        if (arr[center] === el) {
            arr.splice(center, 0, el);
            break;
        }
        if (arr[center] > el) {
            end = center;
        } else {
            start = center;
        }
    }
    return arr;
};
export const insertIntoSortedRecursion = (el: number, arr: number[]) => {
    if (!arr.length) {
        arr.push(el);
        return;
    }
    if (arr[0] > el) {
        arr.unshift(el);
        return;
    }
    if ((arr.at(-1) ?? 0) < el) {
        arr.push(el);
        return;
    }
    if (arr.length === 2) {
        arr.splice(1, 0, el);
        return;
    }
    const traverse = (start: number, end: number) => {
        const center = Math.floor((end - start + 1) / 2) + start;
        if (arr[center] > el) {
            end = center;
        } else {
            start = center;
        }
        if (end - start === 1) {
            arr.splice(end, 0, el);
            return;
        }
        traverse(start, end);
    };
    traverse(0, arr.length - 1);
    return arr;
};

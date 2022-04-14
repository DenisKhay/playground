// recursion

export function flatWithRecursion(this: unknown[], depth: number = 1): unknown[] {
    if(typeof depth !== 'number') {
        depth = 1;
    }
    return this.reduce<unknown[]>((acc, item) => {
        if(item instanceof Array && depth > 0) {
            return acc.concat(flatWithRecursion.call(item,depth - 1));
        }
        acc.push(item);
        return acc;
    }, [])
};

// stack


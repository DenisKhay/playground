function strStr(haystack: string, needle: string): number {
    if(haystack === needle) {
        return 0;
    }
    if(haystack.length <= needle.length && haystack !== needle) {
        return -1;
    }

    let match = haystack.slice(0, needle.length);
    for(let i = 0; match.length === needle.length; i++) {
        if(match === needle) {
            return i;
        } else {
            match = haystack.slice(i+1, needle.length + i + 1)
        }
    }
    return -1;
};

function strStrR(haystack: string, needle: string): number {
    if(haystack === needle) {
        return 0;
    }

    const recursive = (haystack: string, needle: string, iter: number): number => {
        if(haystack.length <= needle.length && needle !== haystack) {
            return -1;
        }
        let match = haystack.slice(0, needle.length);
        if(match === needle) {
            return iter;
        } else {
            const cut = haystack.slice(1);
            return recursive(cut, needle, iter + 1);
        }
    }
    return recursive(haystack, needle, 0);
};

console.log('find substr', strStrR('123456789000', '890'))


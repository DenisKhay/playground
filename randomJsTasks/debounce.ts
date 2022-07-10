
const debounce = (cb: () => unknown, tmt: number) => {
    let id: number;
    return () => {
        clearTimeout(id);
        id = setTimeout(cb, tmt)
    }
}

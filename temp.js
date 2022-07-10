const search = (obj, path) => {
const pathArr = path.split('.').filter(Boolean);
let target = obj;

for(let i = 0; i < pathArr.length && target != null; i++) {
    const pathStr = pathArr[i];
    target = target[pathStr];
}

return target;
}

console.log(search({foo: {bar: 'goo', and: {noo: '00'}}}, 'foo.and.noo'))

const Fn: any = function () {

}
Fn.prototype.newFn = () => 'hello'
const ins = new Fn();

console.log(ins.newFn());

Fn.prototype.newFn = () => 'hhola';
console.log(ins.newFn());
const instance2 = new Fn();

Object.getPrototypeOf(instance2).newFn = () => 'bla bla';

console.log(ins.newFn());
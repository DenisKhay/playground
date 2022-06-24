import fs from 'fs';

const main = async () => {
 console.log('START (a)'); // a

 setTimeout(() => console.log('SetTimeout (b)'), 0); // b
 setImmediate(() => console.log('SetImmediate (c)')) // c

 Promise.resolve().then(() => {
  console.log('Promise (d)'); // d
  process.nextTick(() => console.log('Promise next tick (e)')); // e
 });

 fs.readFile('index.ts', () => {
  console.log('Read file (f)'); //f
  setTimeout(() => console.log('Read file SetTimeout (g)'), 0); // g
  setImmediate(() => console.log('Read file SetImmediate (h)')); // h
  process.nextTick(() => console.log('Read file next tick (i)')); // i
 });

 const response = await Promise.resolve('Async/Await');
 console.log(response, ' (j)') // j

 process.nextTick(() => console.log('Next tick (k)')) // k
 setTimeout(() => console.log('SetTimeout (l)'), 0) // l

 console.log('END (m)') // m;
}
main();

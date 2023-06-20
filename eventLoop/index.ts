import fs from 'fs';

const main = async () => {

 fs.readFile('dummy.txt', () => {
  console.log('Read file (f)'); //f
  setTimeout(() => console.log('Read file SetTimeout (g)'), 0); // g
  setTimeout(() => {
   console.log('Read file SetTimeout (g)');
   setTimeout(() => {
    console.log('tmt inside tmt')
   });
   fs.readFile('', () => {
    console.log('Hell yeah!2, File reading')
   })
  }, 0); // g
  setImmediate(() => console.log('Read file SetImmediate (h)')); // h
 });
 fs.readFile('', () => {
  console.log('Hell yeah!')
 })

}
main();

// timers
// idle / prepare
// poll
// check - setImmediate
// 'close' callbacks

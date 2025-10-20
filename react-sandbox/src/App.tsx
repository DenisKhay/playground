import './App.css'

function App() {

  return null;
}

export default App


const firstAwaitExample = async () => {

let done = false;

const fn = async () => {
  console.log('inside fn');
}
async function foo() {
  await fn();
  console.log('inside foo and after fn')
  done = true;
}
console.log('Start');
foo();
console.log('End. Done is', done); // ❌ false, not yet resumed

}


// firstAwaitExample();

const secondExample = async () => {
  async function foo() {
  await bar();
  console.log('After bar');
}

async function bar() {
  console.log('Inside bar');
}
console.log('Start 2');
foo();
console.log('End 2')
}
secondExample();
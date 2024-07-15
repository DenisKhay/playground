import { useEffect, useRef, useState } from 'react';
import './App.css'

let externalVar = 'empty';

window.setInterval(() => {
    externalVar = externalVar + '_added';
}, 2000)


Promise.resolve().then(() => {
    throw new Error('hola');
}).catch((e) => {
    console.log("got an errror", e);
})

function App() {
  const [counter, setCount] = useState(0);



  return (
    <>
        TEST
        {counter}
    </>
  )
}

export default App

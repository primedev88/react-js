import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  
  const addValue =()=>{
    //counter=counter+1;
    if(counter<25){
      setCounter(counter+1)
    } 
  }
  const subValue = ()=>{
    //counter=counter-1;
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  return (
    <>
      <h1>Ak with others</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={subValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

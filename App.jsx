import { useState,useEffect} from 'react'
import './App.css'

function App() {

let [counter,setCounter]=useState(0);
 // let counter =15;
const addValue=()=>{
if(counter<15){
  setCounter(counter+1);
// counter =counter + 1;
}else{
console.log("count has reached high");
}
}

const removeValue=()=>{
 if(counter>0){
  setCounter(counter-1);
}else{
 console.log("Value has reached low");     
}
}

  return (
    <>
     <h1>Chai aur react</h1>
     <h3>counter value:{counter}</h3>
     <button 
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}
     >remove value</button>
    </>
  )
  }

  
export default App

import { useState } from "react"
import React from 'react'
//hooks are just an js functions .
//it return an array [variable , function]
//we update the first value in the useState hook array using the second value function. our whole components will be re rendered
const App = () => {

  // COUNTER
  // let h
  // let [num,setNum] = useState(1);
  // const add = ()=>{
    
  //   setNum((val)=>{
  //     return val + 1
  //   })
                       
  // }
  // return <>

  // <h1>{num}</h1>
  // <button onClick={add}>⚡</button>
  
  // </>

  const [ip, setIp] = useState("");

   const changing = ()=>{
    const val = document.querySelector("input").value;
      setIp(val);
      console.log(val);
   }
  return <>
    <input type="text"/>
    <button onClick={changing}>click</button>
    <h1>{ip}</h1>
  </>

}

export default App
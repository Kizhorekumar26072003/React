// useEffect
//most of the times we use useEffect when using api's
//when the update happens , all the other relevent places  gets updated immediately(updating profile pic in insta)
import { useEffect, useState } from "react";
import React from 'react'

const App = () => {

  const [x,setX] = useState(100);
  const [y, setY] = useState(200);
  // useEffect is an function itself,its syntax is , it takes two parameters first is callback function,second is  array
  //useeffect runs when the page is loaded first time very fastly,even isf the array is empty or not.
  //if aray is empty useeffect will erun only first time of page loading,no matter how many times page rerenders
  useEffect (()=>{
    console.log("hlooooooooo");
    
    setX(200)
  //useEffect Cleanup
    return ()=>{
      setX(100);
      console.log("Cleaned");
      
    }
  },[x,y])
  console.log("x",x);
  //if we try to run useEffect repeatedly by passing an variable it wont run when it is set to the same value

  return (
    <div >
    
      <h1 >{x}</h1>
      <button onClick={()=>setX((val)=>val+1)}>VaeDupp</button>
      <h1 >{y}</h1>
      <button onClick={()=>setY((val)=>val+1)}>VaeDupp</button>
    </div>
    
  )
}

export default App
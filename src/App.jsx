import { useState } from 'react' 

import reactLogo from './assets/react.svg'

import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mnop from './Components/Mnop' // Imported Mnop from Mnop.Jsx from this file 
import Abcd from './Components/Abcd' // Imported Hy from Abcd.Jsx from this file
import P from "./Components/P";
import C1 from "./Components/C1";
import Ap from "./Components/Ap";
import Ap1 from "./Components/Ap1";
// import Q from './Components/Q' 
// import R from './Components/R' 

function App() {
  // const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  }
  const decrement =  () =>{
    setNumber(number - 1);
  }
  // const[color,setColor] = useState('red');

  // const a = 'Hello i am data from props a';
  // const b = 'Hello i am data from props b';
  // const c = "Props data for P , Q and R";
  const z = "This is Props Data of All C1 , C2 etc..";
  
  return (
     <div style={{
      backgroundColor : "white",
      color : "black",
      // height = 100vh;
     }}> {/* it is known as React fragement  */}
    <C1 data = {z}/>
    This C1 File from App JSX

    {/* <Ap/> */}
    <Ap1/>
    <h1>{number}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>

    {/* Changing Colors of WebPage */}
    {/* <button onClick={() => setColor('blue')}>Blue</button> */}
    {/* <button onClick={() => setColor('green')}>Green</button> */}


      {/* <h1 style={{backgroundColor : "blue",color:"red", height:"70px",padding:"25px"}}>Good Morning!</h1> */}
      {/* <Abcd data = {b}/> */}
       {/*  Here we are passing the data as props to Abcd component and we can access it in Abcd.jsx file using props.data  */}
      {/* <Mnop data = {a}/> */}
       {/*  Here we are passing the data as props to Mnop component and we can access it in Mnop.jsx file using props.data  */}
      {/* <P data = {c}/> */}
      {/* <Q/> */}
      {/* <R/> */}
      
    </div> 
  )
}

export default App

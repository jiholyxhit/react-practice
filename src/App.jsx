import "./App.css";
import {useState} from "react"
import { useWindowSize } from "./hooks/useWindowSize.js";

const App = () => {
  
  const {width, length} = useWindowSize()

  return(
    <>
      <h2>Window Size</h2>
      <p>Width: {width}</p>
      <p>Length: {length}</p>
    </>
  )
} 

export default App;
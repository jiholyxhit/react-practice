import "./App.css"
import {CountProvider} from "./contexts/CountContext.jsx"
import {ToggleProvider} from "./contexts/ToggleContext.jsx"
import Child1 from "./Child1.jsx"
import Child3 from "./Child3.jsx"


export default function App(){

  return(
    <>
      <CountProvider>
        <Child1/>
      </CountProvider>
      <ToggleProvider>
        <Child3/>
      </ToggleProvider>
    </>
  )
}
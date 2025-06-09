import "./App.css";
import {useState, useEffect} from "react"

function App(){
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  function handleClick(setter){
    
    return setter(s => s+1)
  }

  useEffect(() => {
    console.log(`C1: ${count1}, C2: ${count2}`)
  }, [count1])

  return(
    <div>
      <h2>Count: {count1}</h2>
      <button onClick={() => handleClick(setCount1)}>
        Count1++
      </button>

      <h2>Count: {count2}</h2>
      <button onClick={() => handleClick(setCount2)}>
        Count2++
      </button>
    </div>
  )
}

export default App;
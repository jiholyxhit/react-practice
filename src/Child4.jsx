import {useContext} from "react"
import {ToggleContext} from "./contexts/ToggleContext.jsx"




export default function Child4() {
    const {toggle} = useContext(ToggleContext)

    return(
        <div>
            <h2>CHild4</h2>
            <button onClick = {toggle}>Toggle</button>
        </div>
        
    )
}
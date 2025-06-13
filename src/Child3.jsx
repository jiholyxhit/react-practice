import {useContext} from "react"
import {ToggleContext} from "./contexts/ToggleContext.jsx"
import Child4 from "./Child4.jsx"


const Child3 = () => {
    const {isOn} = useContext(ToggleContext)

    return(
        <div>
            <h2>Child3</h2>
            <p>Toggle {isOn ? "ON" : "OFF"}</p>
            <Child4/>
        </div>
    )
}

export default Child3


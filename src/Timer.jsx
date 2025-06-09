import {useState, useEffect} from "react"

const Timer = () => {
    const [seconds, setSectonds] = useState(0)

    useEffect( () => {
        const interval = setInterval(() => {
            setSectonds(s => s+1)
        }, 1000)

        return () => {
            clearInterval(interval)
            console.log("Timer Cleaned Up")
        }

    }, [])


    return <p>Timer: {seconds} seconds</p>
}

export default Timer
import {useState, useEffect} from "react"


export function useWindowSize(){
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        length: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                length: window.innerHeight
            })
        }
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}
import React from "react"

const Child = ({active, onClick}) => {
    console.log("Child Rendered")
    
    return (
        <div>
            <p>
                Child: {active ? "Active" : "Not Active"}
            </p>
            <button onClick={onClick}>
                Increase
            </button>
        </div>
    )
};

export default React.memo(Child);



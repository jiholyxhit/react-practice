
export const initialState = {
    count: 0
}

export function countReducer(state, action){
    const {x, y} = action.meta

    switch(action.type){
        case "INC":
            console.log(`Click: ${x}, ${y}`)
            return {
                ...state,
                count: state.count + action.payload        
            }  
        case "DEC":
            console.log(`Click: ${x}, ${y}`)
            return {
                ...state,
                count: state.count - action.payload        
            }    
        default:
            throw new Error("Unknown action type")
    }
}
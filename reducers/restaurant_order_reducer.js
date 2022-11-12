const initialState = []    


export const Restaurant_order_reducer =  (state = initialState, action)=> {
    const {type, payload} = action;

    switch(type) {
        case "ADDTOCART":
            return  [...state,payload]

        default:
            return state
        
        
    }
}
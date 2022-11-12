const initialState = {
    search_name: "All Items"
}

export const Restaurant_search_reducer =(state = initialState, action)=>{
    switch(action.type) {
      case "SETSEARCH":
        return {...state, search_name:action.payload}
      case "RESETSEARCH":
        return  {...state, search_name: "All Items"}
      default:
        return state
    }
  }
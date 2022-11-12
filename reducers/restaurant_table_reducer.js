const initialState = {
  table_number : null
}

export const Restaurant_table_reducer =(state = initialState, action)=>{
  switch(action.type) {
    case "SETTABLENUMBER":
      return {...state, table_number:action.payload}
    case "RESETTABLENUMBER":
      return  {...state, table_number : null}
    default:
      return state
  }
}
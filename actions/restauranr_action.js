//table
export const settablenumber = (val)=> async dispatch=>{
    dispatch({
        type : "SETTABLENUMBER",
        payload : val
    })
}
export const resettablenumber = ()=> async dispatch=>{
    dispatch({
        type : "RESETTABLENUMBER"
        
    })
}

 //search
export const setsearch = (val1)=> async dispatch=> {
    dispatch({
        type : "SETSEARCH",
        payload : val1
    })
}

export const resetsearch = ()=> async dispatch=> {
    dispatch({
        type : "RESETSEARCH"
        
    })
}

// order & remove buttons

export const add_to_cart = (id, name, prize, table_number, url)=>async dispatch=>{
    dispatch({
        type:"ADDTOCART",
        payload:{
                 id:id,
                 name:name,
                 prize:prize,
                 table_number:table_number,
                 url:url
        }
    })
}


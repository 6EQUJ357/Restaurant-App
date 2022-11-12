import {combineReducers} from "redux"
import {Restaurant_table_reducer} from "./restaurant_table_reducer"
import {Restaurant_search_reducer} from "./restaurant_search_reducer"
import {Restaurant_order_reducer} from "./restaurant_order_reducer"

export const reducer = combineReducers({
    
    Restaurant_table_reducer:Restaurant_table_reducer,
    Restaurant_search_reducer:Restaurant_search_reducer,
    Restaurant_order_reducer:Restaurant_order_reducer
    
})
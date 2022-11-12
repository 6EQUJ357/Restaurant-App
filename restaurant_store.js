import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {reducer} from "./reducers/restaurant_combain_reducer"

const middle = [thunk];
let Restaurent_store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middle))
)

export default Restaurent_store;
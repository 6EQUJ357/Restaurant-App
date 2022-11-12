import React, { useState } from 'react'
import "./restaurant_style.css"
import { connect} from 'react-redux';
import {setsearch, resetsearch} from "./actions/restauranr_action"

 const Restaurent_search = ({set_search,setsearch, resetsearch }) => {
    const food_list = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"];

  return (
    <div className='restaurant_search_div'>
        <span className='restaurant_search_span'>filter :</span>
        <select onChange={(e)=>setsearch(e.target.value)}>
            {food_list.map((listt, index)=>(<option key={index} value = {listt} className = "restaurant_search_options">{listt}</option>))}
        </select>
       
    </div>
  )
}

const mapStateToProps =(state)=>({
  set_search : state.Restaurant_search_reducer.search_name
})
export default connect(mapStateToProps, {setsearch,resetsearch}) (Restaurent_search);
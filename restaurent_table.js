import React, { useState } from 'react'
import "./restaurant_style.css"
import {connect} from "react-redux"
import { settablenumber } from './actions/restauranr_action'


const Restaurent_table = ({local_table_number,settablenumber}) => {
    const table = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const inactive = "restaurant_table_butt";
    const active = "restaurant_table_butt1";
    
  return (
    <div className='restaurant_table_div1'>
        <h2 className='restaurant_table_div1_h2'>please select your table number :</h2>
        {table.map((tab,x)=> (
            <div key={x} className = "restaurant_table_div2">
                <button onClick={()=>settablenumber(tab)} className={local_table_number===tab?active:inactive}>{tab}</button>
                
            </div>
        ))}
    </div>
  )
}

const mapStateToProps= (state)=>({
  local_table_number : state.Restaurant_table_reducer.table_number
})
export default connect(mapStateToProps, {settablenumber}) (Restaurent_table);
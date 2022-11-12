import React, { useEffect, useState } from 'react'
import "./restaurant_style.css"
import {connect} from "react-redux"
import { add_to_cart,remove_cart} from './actions/restauranr_action'
import {resettablenumber, resetsearch} from "./actions/restauranr_action"

 const Restaurent_product = ({product_name, table_number, add_to_cart, resettablenumber, resetsearch}) => {

    const [data, setData] = useState([]);
    const [clone, setclone]= useState([]);

    useEffect(()=>{
    fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json").then(res=>res.json()).then(res1 =>{setData(res1.items); setclone(res1.items)}).catch(err=> console.log(err))
},[])

useEffect(()=>{
  if(product_name !== "All Items") {
    let specific = clone.filter(pro => pro.category === product_name)
    setData(specific);
  }
  else {
    setData(clone);
  }
},[product_name])

//order button
const add_to_cart_handler = async (id, name, prize,url)=>{
  if(table_number != null) {
    await add_to_cart(id, name,prize, table_number, url)
    await resettablenumber()
    await resetsearch()
    alert ("order placed successfully...")
  }
  else {
    alert("please select the table number...")
  }
}


  return (
    <div className = "restaurent_product_div">
      {data.length > 0 ? 
      <div>
        {data.map(pro=>(
        <div key={pro.id} className = "restaurent_product_div1">

          <img src={pro.url} alt='not display' className='restaurent_product_div1_img'/>

          <h4>{pro.name}</h4>

          <h4>Rs.{pro.prize}/-</h4>

          <button className='restaurent_product_div1_but' onClick={()=>add_to_cart_handler(pro.id, pro.name, pro.prize, pro.url)}>Order</button>


        </div>
        ))}
      </div>
      : 
        <div>
          <h1 className='restaurent_product_div1_h1'>Loading...</h1>
        </div>
        }
        
    </div>
  )
}

 const mapStateToProps=(state)=> ({
   product_name : state.Restaurant_search_reducer.search_name,
   table_number : state.Restaurant_table_reducer.table_number
 })
 export default connect(mapStateToProps, {add_to_cart, resettablenumber, resetsearch}) (Restaurent_product);

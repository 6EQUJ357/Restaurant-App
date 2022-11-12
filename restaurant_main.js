import React from 'react'
import Restaurent_table from "./restaurent_table"
import  Restaurent_search  from './restaurent_search'
import  Restaurent_product  from './restaurent_product'


export const Restaurant_main = () => {
  return (
    <div>
        <Restaurent_table />        
        <Restaurent_search />
        <Restaurent_product />
    </div>
  )
}

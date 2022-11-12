import React from 'react'
import { connect } from 'react-redux'


 const Restaurant_order = ({list}) => {
  return (
    <div className = "restaurent_product_div11">
      {list.length > 0 ? 
      <div>
        {list.map(pro=>(
        <div key={pro.id} className = "restaurent_product_div12">

          <p className='table_num'>Table Number : {pro.table_number}</p>
          <img src={pro.url} alt='not display' className='restaurent_product_div1_img'/>

          <h4 className='pname'>{pro.name}</h4>
          <br/>
          <h4>Building Amount <span className='price'>Rs.{pro.prize}/-</span></h4>
          
        </div>
        ))}
      </div>
      : 
        <div>
          <h1 className='restaurent_product_div1_h1'>no order placed yet...</h1>
        </div>
        }
        
    </div>
  )
}

const mapStateToProps = (state)=> ({
  list : state.Restaurant_order_reducer
})

export default connect(mapStateToProps) (Restaurant_order) 
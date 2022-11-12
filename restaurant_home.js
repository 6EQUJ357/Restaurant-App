import React from 'react'
import {Restaurant_main} from "./restaurant_main"
import  Restaurant_order  from './restaurant_order'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Default} from "./default"
import "./restaurant_style.css"
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'

 const Restaurant_home = ({list}) => {
  return (
    <div className='restaurant_head_container'>   
         <BrowserRouter>
         <div className='restaurant_head_sticky'>
                <div className='restaurant_head'>
                    <header>
                        <h1>ranga restaurent app...</h1>
                    </header>            
                </div> 
                <div className='restaurant_nav'>
                    <nav>
                        <Link to = "/" className='res'>restaurant</Link>
                        <button className='restaurant_nav_btt'>
                            <Link className='link' to="/order">orders </Link><span className='top'>{ list.length}</span></button>
                    </nav>
                </div>
            </div>
                                    
            <Routes>
                <Route path='/' element = {<Restaurant_main/>}/>
                <Route path='/order' element = {<Restaurant_order/>}/>
                <Route path='*' element = {<Default/>}/>
            </Routes>
        </BrowserRouter>
        
        
    </div>
  )
}

const mapStateToProps = (state)=> ({
    list : state.Restaurant_order_reducer
})

export default connect(mapStateToProps) (Restaurant_home)

import React from 'react';
import Category from './category';
import SearchContainer from '../../widgets/containers/search'
import './categories.css'

function Categories (props) {
  return (
    <div className='Categories'>
      <SearchContainer />
      {props.categories.map((item)=>{
          return (
            <Category
            {...item}
            key={item.id}
            handleOpenModal ={props.handleOpenModal}/>
          )
        })}
    </div>
  )
}

export default Categories;

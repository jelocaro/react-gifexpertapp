import React, { useState } from 'react'
import propTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue]= useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
      e.preventDefault();

      if(inputValue.trim().length > 2){
        setCategories( cast => [ inputValue, ...cast,]);
        setInputValue('');

      }

      
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            
            <input type= "text" value={inputValue} onChange={handleInputChange}></input>

            </form>


        </div>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}

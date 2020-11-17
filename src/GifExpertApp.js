import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['one punch', 'samurai x', 'dragon ball']
 
    const [categories, setCategories] = useState(['one punch']);
       /*
    const handleAdd = () => {
         setCategories( [...categories, 'one piece'])
    }*/
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            

            {
               <ol>
                   {
                       categories.map( category =>  ( 
                       <GifGrid key={category} category={category}/>
                       ))
                   }
               </ol>
            }
        </>
    )
}
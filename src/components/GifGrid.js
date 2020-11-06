//import React, { useState, useEffect } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const  GifGrid = ({ categoria }) => {
  
    //////////usando mi hook creado como useFetchGifs//////////////////
    const { data:images, loading } = useFetchGifs( categoria );

    return (

      <>
        <h3 className="animate__animated animate__bounceInDown"> { categoria } </h3>

        { loading && <p className="animate__jello" >Cargando...</p>}

        <div className="card-grid">
    
             {
                   images.map(  img => (

                       <GifGridItem 

                            key= { img.id}
                            { ...img }
                        
                       /> 
                                           
                   ))
             }            
  
        </div>

      </>
    )
}

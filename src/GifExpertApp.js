
import React, { useState } from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
   const [categorias, setCategorias] = useState(['Vegeta']);

    // const handleAdd = () =>{
       
    //     //setCategorias(['Pokemon', ...categorias]);//Agregando una categoria a mi lista con el boton
    //     setCategorias( cats => [ ...cats, 'Naruto'] );//Otra forma de agregar una ctegoria usando un colbak 
        
    // }

    return (

        <>

          <h2> GifExpertApp </h2>
          
          < AddCategoria setCategorias = { setCategorias }/>

          <hr/> 
          
           <ol>
               {
                   categorias.map( categoria => (
                    < GifGrid 
                         
                        key= { categoria }
                        categoria = { categoria }
                    
                    />
                  // return <li key={categoria} > { categoria } </li>
                   
                   ))

               }  
                              
            </ol>  

        </>
    )
}


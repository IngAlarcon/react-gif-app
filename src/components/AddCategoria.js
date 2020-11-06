import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategoria = ( { setCategorias } ) => {

     const [inputValue, setInputValue] = useState('');
    
     //Capturando lo que se escribe en el input
     const handleInputChange = ( e ) => {

        setInputValue( e.target.value );
     }

     //Evento con la tecla enter

     const handleSubmit = (e) => {
        //Desactiavndo el refrescamiento de la pagina al hacer enter en el input
        e.preventDefault();

        //Validacion en lo que viene en input, para que se limpie y borre espacios al hacer enter

        if( inputValue.trim().length > 2 ){//Con .trin() borro espacio antes y despues y con .length mido la palabra que sea mayor que dos 
            
            setCategorias( cats => [ inputValue, ...cats ] );
            setInputValue('');//limpiando el Input al hacer enter
        }
       
     } 


    return (

        <form onSubmit={ handleSubmit } >
        
            <input
                  
                  type="text"
                  value={ inputValue }
                  onChange={ handleInputChange }
            
            />

        </form>
    )
}

AddCategoria.propTypes = {

    setCategorias: PropTypes.func.isRequired

}

//Los hooks no son mas que funciones siempre se identifica un hooks con el nombre de useNombreAlgo.js

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( categoria ) => {

    const [state, setState] = useState({

        data:[],
        loading: true

    });

    useEffect (() => {

        //Haciendo mi peticion HTTPS y trallendo mis imagenes GIFs

        getGifs( categoria )

           .then( imgs => {

            
                setTimeout( () => {

                    console.log(imgs);

                    setState({
                        data: imgs,
                        loading: false
                    });
                    
                }, 1000);

           })

    }, [ categoria ])


    return state;//{ data:[], loading: true};


}



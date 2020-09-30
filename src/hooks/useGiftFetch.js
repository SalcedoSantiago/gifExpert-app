import { useState, useEffect } from 'react'
import { getData } from '../helpers/getGifs'

export const useGiftFetch = ( categoria ) => {


    const [state, setstate] = useState({
            data : [],
            loading : true
    })


    useEffect(() => {
        setTimeout(()=>{
              getData( categoria )
        .then(img => 
            setstate({
                data: img,
                loading: false
            })
        )
 
        },1500)
     
    }, [ categoria ])
   

    return state;
}
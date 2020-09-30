import React, { useState } from 'react';

export const EntradaGif = ({ setCategorias }) => {

    const [busqueda, setbusqueda] = useState('')

    const handleSearch = (e) =>{
        setbusqueda(e.target.value)
    }

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        const value = busqueda.trim()
        if( value.length > 0){
            setCategorias((cat) => [ busqueda, ...cat ])
        }
    }


    return (
        <form onSubmit={ handleSubmit } >
            <input 
                type="text"
                value={ busqueda }
                onChange={ handleSearch }
            />
        </form>
    )
}



export default EntradaGif
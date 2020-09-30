import React,{ useState } from 'react'
import EntradaGif from './EntradaGif'
import Grid from './Grid'

export const GifExpert = () => {
    const [categorias, setCategorias] = useState(['itachi'])
    return (
        <div>
            <h1>GifExpert</h1>
            < EntradaGif setCategorias={ setCategorias } />
            <ul>
                {categorias.map(cat => (
                                < Grid 
                                key={cat} 
                                categoria={ cat }
                                /> 
                                ))}
            </ul>
        </div>
    )
}



export default GifExpert

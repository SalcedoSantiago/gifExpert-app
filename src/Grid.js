import React, { useState, useEffect } from 'react'
import GridItem from './GifItem';
import { useGiftFetch  } from './hooks/useGiftFetch'

export const Grid = ({ categoria }) => {


    
    const { data , loading } = useGiftFetch( categoria );

  
    return (
        <div>
            <h2>{ categoria }</h2>
            { loading ? <div className="loading"><p >cargando... </p></div>: 
                <div className="grid animate__animated animate__bounce">
                {data.map((img) => (
                    < GridItem 
                        key={ img.id }
                        { ...img }
                    />
                ))}
            </div>
            }
        </div>
    )
}



export default Grid
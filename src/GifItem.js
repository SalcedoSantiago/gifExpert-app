import React from 'react'



export const GridItem = ({  imagen, title }) => {


    return (
        <div className="card">
            <img src={ imagen } alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}



export default GridItem
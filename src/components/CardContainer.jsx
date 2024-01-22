import React, { useEffect, useState } from 'react'
import Card from './Card'
import getData from './script'
import { GridContainer, MoviesContainer } from './styles/Container.styled'


const CardContainer = ({name,page,movieName}) => {
    const [data,setData] = useState([])
    useEffect(()=>{
       async function setMovies(){
           const data = await getData(page,movieName)
           setData(data)
       }
       setMovies()
    
    },[])


   
    return (
        <>
            <MoviesContainer>
                <h1 className="title">{name}</h1>
            <GridContainer>
                {data.map((movie, idx) => {
                    return <Card key={idx} {...movie} />
                })}
            </GridContainer>
            </MoviesContainer>
            
        </>
    )
}

export default CardContainer

import React from 'react'
import CardContainer from './CardContainer'
import { movieName } from './SearchBox'


const SearchMovie = () => {

    return (
        <>
            <CardContainer
            name={`Search For ${movieName}`}
            page={false}
            movieName={movieName}
             />
        </>
    )
}

export default SearchMovie

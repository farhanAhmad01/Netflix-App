import React, { useEffect, useState } from 'react'
import {FaPlay} from "react-icons/fa"
import {RiInformationLine} from "react-icons/ri"
import { FullContainer } from './styles/Container.styled'

const MovieView = () => {
    const [movieData , setMovieData] = useState({})
    useEffect(()=>{
        setMovieData((JSON.parse(sessionStorage.getItem('movie'))))
    },[])
    return (
        <>
            <FullContainer>
                <img src={movieData.backdrop_path} alt="" />
                <div className="movieView">

                <div className="content">
                    <h2 className="title">{movieData.title}</h2>
                    <p className="para">{movieData.overview}</p>
                </div>
                <div className="action">
                    <div className="play"><FaPlay /> Play</div>
                    <div className="info"><RiInformationLine /> More Info</div>
                </div>
                </div>
            </FullContainer>
        </>
    )
}

export default MovieView

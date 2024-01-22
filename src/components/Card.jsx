import React from 'react'
import { useHistory } from 'react-router'
import { MovieCardStyled } from './styles/Movie.styled'
const Card = (props) => {
    const history = useHistory()

    const clickHandler = () => {
        sessionStorage.setItem('movie', JSON.stringify(props))
        history.push('/movieview')
    }

    return (
        <>
             <MovieCardStyled onClick={clickHandler}>
                   <img src={props.poster_path} alt=""/>
                   {/* <div className="about">
                       <h1 className="name">{props.title.slice(0,22)}</h1>
                       <p style={{color : ratingClasses(props.vote_average)}} className={`rating`}>{props.vote_average}</p>
                   </div> */}
                </MovieCardStyled>
        </>
    )
}

export default Card

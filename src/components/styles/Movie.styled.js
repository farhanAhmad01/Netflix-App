import styled from "styled-components"

export const MovieCardStyled = styled.div`
    width: 100%;
    cursor: pointer;
    transition:  all .3s ease-in-out;
    img{
        width: 100%;
        object-fit: fill;
    }
    .about{
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .name{
            font-size: 1.8rem;
        }
        .rating{
            width: 3.5rem;
            height: 3.5rem;
            font-size: 1.4rem;
            border-radius: 50%;
            background-color: rgba(255,255,255, .15);
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: sans-serif;
            font-weight: bolder;
        }
      
    }
    &:hover{
        transform: scale(1.02);
    }
`


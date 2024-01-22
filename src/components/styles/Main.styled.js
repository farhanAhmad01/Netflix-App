import styled from "styled-components"


export const BackBg = styled.div `
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`

export const BackImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .4;
    
`

export const Content = styled.div`
    max-width: 70rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 0 2rem;
    z-index : 1000;
    text-align: center;
    h1{
        font-family: sans-serif;
        font-size: 6rem;
        font-weight: bolder;
    }
    h3{
        font-size: 3rem;
        margin: 1.5rem 0;

    }
    p{
        font-size: 2rem;
        font-weight: bold;
    }

    @media(max-width : 560px){
        h1{
            font-size: 4rem;
        }
        h3{
            font-size: 2.2rem;
        }
        p{
            font-size: 1.8rem;
        }
    }

    @media(max-width : 360px){
        padding: 0 1rem;
    }

`

export const FormStyled = styled.form `
    margin-top: 2rem;
    display: flex;
    width: 100%;
`

export const InputSearch = styled.input `
    outline: none;
    border: none;
    font-size: 2rem;
    color: #111;
    background-color: #fff;
    width: 100%;
    padding: 1.2rem 2rem;
    font-weight: bold;
`

export const SearchBtn = styled.button `
    outline: none;
    border: none;
    background-color: red;
    padding: 1rem 2rem;
    cursor: pointer;
    color: #fff;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 2rem;

`
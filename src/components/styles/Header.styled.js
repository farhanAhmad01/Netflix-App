import styled  from "styled-components";

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem 2%;
    background-color: #121212;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index : 1000000;
`

export const NavSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > *{
        margin: 0 1rem;
        font-size: 2rem;
        color: #fff;
        cursor: pointer;
    }
    p{
        font-weight: 700;
        @media(max-width : 365px){
            display: none;
        }
        
    }

`


export const LogoImg = styled.img`
    height: 3rem;
    object-fit: cover;
`



export const NavStyled = styled.nav `
    margin-left: 3rem;
    .navLink{
        text-decoration: none;
        margin: 0 1rem;
        font-size: 1.7rem;
        color: rgba(255,255,255,.6);
        font-weight: 600;
        
    }
    .activeNav{
        color: #fff;
    }

    @media(max-width : 850px){
        position: absolute;
        top: 100%;
        left: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        background-color: red;
        width: 100%;
        padding: 1rem;
        display: none;
        &.active{
            display: flex;
           
        }

    

        .navLink{
            margin: 1rem 0;
        }

    }

`
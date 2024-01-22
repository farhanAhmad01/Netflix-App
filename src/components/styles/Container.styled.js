import styled from "styled-components";

export const FullContainer = styled.div`
    position: relative ;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .movieView{
        display: flex;
        flex-direction: column;
        padding: 0 3rem;
        z-index: 1000;

        @media(max-width : 410px){
            padding: 0 1rem;
        } 


    }
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
        opacity: .6;
    }
    .content{
        color: #fff;
        width: 100%;
        max-width: 70rem;
        .title{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 4rem;
            font-weight: bolder;
        }
        .para{
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 600;
        }
    }
    .action{
        color: #fff;
        font-size: 2rem;
        margin-top: 1rem;
        display: flex;
        font-weight: bolder;
        .info{
            margin-left : 2rem;
            padding: 1rem 2rem;
            background-color: rgba(255,255,255, .2);
            color: #fff;
            cursor: pointer;
            transition: 250ms;
        }

        .play{
            padding: 1rem 2rem;

            background-color: #fff;
            color: #111;
            cursor: pointer;
            transition: 250ms;


        }

        .info:hover , .play:hover{
            opacity: .7;
        }
      
        
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 140rem;
    margin: 0 auto;
`

export const MoviesContainer = styled.div`
    padding: 8rem 2%;
    min-height: 100vh;

    .title{
        color: #fff;
        text-align: center;
        font-size: 3.5rem;
        font-weight: bold;
    }
`

export const GridContainer = styled.div`

    width: 100%;
    max-width: 180rem;
    margin: 0 auto;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 3rem;

    @media(max-width : 1100px){
        grid-template-columns: repeat(4,1fr);
    }
    @media(max-width : 900px){
        grid-template-columns: repeat(3,1fr);
    }
    @media(max-width : 767px){
        grid-template-columns: repeat(2,1fr);
    }
`

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 0 1rem;
    @media(max-width : 1000px){
        grid-template-columns: 1fr;
        .auto{
            margin: 0 auto;
        }
    }
`

export const CustomStyled = styled.div`
    width: 100%;
    padding: 5rem 0;
    border-top: 1.2rem solid rgba(255,255,255, .1);
`

export const ImgMobo = styled.img`
    max-width: 45rem;
    width: 100%;
    height: 35rem;
    object-fit: cover;
`

export const ContentCustom = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;


    flex-direction: column;
    width: 100%;
    color: #fff;
    h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 5.5rem;
    font-weight: 900;
}
p{
    font-size: 2.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 2rem;
    line-height: 1.4em;
}

    @media(max-width : 1000px){
        text-align: center;
    }

    @media(max-width : 767px){
        h1{
            font-size: 3.5rem;
        }
        p{
            font-size: 2rem;

        }
    }

    @media(max-width : 665px){
        padding: 0 2%;
    }

`
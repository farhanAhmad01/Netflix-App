import styled from "styled-components"


export const AboutStyled = styled.div`
    width: 100%;
    border-top: 1.2rem solid rgba(255,255,255, .1);
    padding: 5rem 0;

    @media(max-width : 980px){
        padding: 5rem 2%;
    }


`

export const Content = styled.div `
width: 100%;
display: flex;
justify-content: center;
color: #fff;
flex-direction: column;

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

    @media(max-width : 767px){
        h1{
            font-size: 3.5rem;
        }
        p{
            font-size: 2rem;

        }
    }

    @media(max-width : 1000px){
        text-align: center;
    }

`

export const ImgVedio = styled.div`
    margin-left: auto;

    @media(max-width : 1000px){
        margin: 0 auto;
        margin-top: 2rem;
        video{
            width: 100%;
        }
    }
`
import React  from 'react'
import { AboutStyled, Content, ImgVedio } from './styles/About.styled'
import { Container, Grid } from './styles/Container.styled'

const About = () => {
   

    return (
        <>
            <AboutStyled>
                <Container>
                    <Grid>
                        <Content>
                            <h1>Enjoy on your TV.</h1>
                            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </Content>
                        <ImgVedio>
                        <video id="vid" loop={true} autoPlay muted  playsInline={true}>
                            <source src="/images/netflix-vedio.mp4" type="video/mp4" />
                            <source src="/images/netflix-vedio.mp4" type="video/ogg" />
                        </video>
                        </ImgVedio>

                    </Grid>
                    
                </Container>
            </AboutStyled>
        </>
    )
}

export default About

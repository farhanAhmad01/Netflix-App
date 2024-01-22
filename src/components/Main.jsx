import React from 'react'
import SearchBox from './SearchBox'
import { BackBg, BackImg, Content } from './styles/Main.styled'

const Main = () => {
    return (
        <>
            <BackBg>
                <BackImg src="/images/netflix.jpg" alt=""/>
                <Content>
                    <h1>Unlimited movies, TV  shows, and more.</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <SearchBox />
                </Content>
            </BackBg>
        </>
    )
}

export default Main

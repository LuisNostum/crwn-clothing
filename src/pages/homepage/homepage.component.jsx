import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.style.scss'
import {HomePageContainer} from './homepage.styles'
function HomePage() {
    return (
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>
    )
}

export default HomePage

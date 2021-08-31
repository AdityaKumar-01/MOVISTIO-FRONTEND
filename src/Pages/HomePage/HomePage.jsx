import React from 'react'
import Header from '../../Components/Header/Header.component';

import "./HomePage.styles.css"
import Carousel from './../../Components/Carousel/Carousel.component';
const HomePage = () => {
    return (
        <div className="homepage-container">
            <Header/>    
            <Carousel/>
        </div>
    )
}

export default HomePage

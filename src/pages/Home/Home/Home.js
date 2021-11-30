import React from 'react';
import Navigation from '../../Navigation/Navigation';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AboutMe></AboutMe>
            <About></About>
            <Services></Services>
            <Projects></Projects>
        </div>
    );
};

export default Home;
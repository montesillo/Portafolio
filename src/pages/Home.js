import React from 'react';

import '../styles/Home.scss';
import AboutMe from '../componets/AboutMe';
class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <main className="main">
                    <AboutMe/>
                </main>
            </React.Fragment>
        )
    }
}

export default Home;
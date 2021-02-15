import React from 'react';

import '../styles/AboutMe.scss';

function AboutMe() {
    return(
        <section className="aboutMe">
            <h2>Hola, mi nombre es Hiram Montesillo</h2>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEbzFeqPXe0_Q/profile-displayphoto-shrink_800_800/0/1581886068329?e=1619049600&v=beta&t=Q2aKI7V7vZAmUF8TksHZIqCz1hy1CXlkx-ViOb8IeXE" alt="Hiram Montesillo"/>
            <div className="aboutMe__title">
                <p >Frontend Developer</p>
            </div>
            <p>Soy un apasionado por la tecnología, me encanta aprender y obtener nuevos retos.</p>
        </section>
    )
}

export default AboutMe;
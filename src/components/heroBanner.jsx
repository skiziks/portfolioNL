// import React from 'react';
import { useState, useEffect } from 'react';

// styles
import '../css/heroBanner.css';

// components

// assets

const HeroBanner = () => {

    const [metier, setMetier] = useState('Full-stack');
    useEffect(() => {
        const interval = setInterval(() => {
            setMetier((prevMetier) => prevMetier === 'Full-stack' ? 'Back-end' : 'Full-stack');
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className="hero-banner">
            <div className='hero-banner__div_title'>
                <h1 className='hero-banner__title'>
                    Nicolas Lerond
                    <br></br>Développeur <span className='metier'>{metier}</span>
                </h1>

                <article className='hero-banner__article'>
                    <a className='CV' href="#" download>Découvrez mon CV</a>
                    <a className='contact' href="#">Contactez moi</a>
                </article>
            </div>
            <aside className='hero-banner__aside'>
                <img className='suiteHeroBanner souris__heroBanner' src="../../public/assets/sourisHeroBanner.svg" alt="suite du site" />
                <img className='suiteHeroBanner fleches__heroBanner' src="../../public/assets/flechesHeroBanner.svg" alt="suite du site" />
            </aside>
        </section>
    );
}

export default HeroBanner;

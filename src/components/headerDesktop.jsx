// import React from 'react';
import nl from '../../public/assets/NL.svg';
import '../css/header.css';

const Header = () => {
    return (
        <div>
            <header className='header'>
                <img src={nl} alt="logo" />
                <ul className='listeHeader'>
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#'>A propos</a></li>
                    <li><a href='#'>Projets</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className='burger'>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>
                <input type="checkbox" id="toggleLanguage" />
            </header>
        </div>
    );
}

export default Header;

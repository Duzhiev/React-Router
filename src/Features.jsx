import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <>
            <header>
                <h1 className='cover'>Features</h1>
                <div className='adress'>
                    <Link to ='/'>Home</Link>
                    <Link to ='/features'>Features</Link>
                    <Link to ='/contact'>Contact</Link>
                </div>
            </header>
            <main>
                <div className='main'>
                    <h1 className='h1main'>Features</h1>
                    <div className='text'>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.
                    </div>
                    <button className='btn'>Learn more</button>
                </div>
            </main>
            <footer>
                <div>Cover template for <a href='https://getbootstrap.com/'>Bootstrap</a>, by <a href='https://ru.boardgamearena.com/gamepanel?game=bang'>@mdo</a>.</div>
            </footer>
        </>
    );
};

export default Features;
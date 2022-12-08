import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <header>
                <h1 className='cover'>Cover</h1>
                <div className='adress'>
                    <Link to='/'>Home</Link>
                    <Link to='/features'>Features</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </header>
            <div className='m'>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a4a19706831c879c42cec8c319fe8933ed4a0468f39cdd47f5d57b433268930&amp;source=constructor" frameborder="0" title='IFRAME' className='map'></iframe>
            </div>
            <footer className='footer1'>
                <div>Cover template for <a href='https://getbootstrap.com/'>Bootstrap</a>, by <a href='https://ru.boardgamearena.com/gamepanel?game=bang'>@mdo</a>.</div>
            </footer>
        </>
    );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className='cover'>Cover</h1>
            <div className='adress'>
                <Link to='/'>Home</Link>
                <Link to='/features'>Features</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </header>
    );
};

export default Header;
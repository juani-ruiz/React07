import React from 'react'
import './Header.css';
import Nav from '../Menu/Menu';

function Header({title, subtitle}) {
    return (

        <div>
            <div className="Header">
                <h1>{title}</h1>
                <h2>{subtitle}</h2> 
            </div>
            <div>
               <Nav />
            </div>
        </div>
    )
}

export default Header
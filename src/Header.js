import React from 'react';
import { randomColor } from './RandomColor';

function Header(){
    let rgb = randomColor();
    return (
        <div style={{backgroundColor: 'steelblue', color: 'white', fontSize: '18px', letterSpacing: '0.5rem', textTransform: 'uppercase'}}>
            <h1>THE GREAT</h1>
            <h1>{rgb}</h1>
            <h1>GAME</h1>
        </div>
    )
}

export default Header;
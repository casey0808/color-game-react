import React, { useState } from 'react';
import { generateRandomColors } from './RandomColor';
import './styles/Square.css';
import Header from './Header';

function Square(){
    const [mode, setMode] = useState('HARD');
    const [replay, setReplay] = useState(false);

    let numSquares = (mode === 'HARD' ? 6 : 3);
    let colors = generateRandomColors(numSquares);

    function pickColor(){
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    const pickedColor = pickColor();

    function handleClick(e){
        let clickedColor = e.currentTarget.style.backgroundColor;
        if(pickedColor === clickedColor){
            document.querySelector('#message').textContent = 'CORRECT!'
            changeColors(pickedColor);
            document.querySelector('#reset').textContent = 'REPLAY';
        } else {
            e.currentTarget.style.backgroundColor = 'black';
        }
    }

    function changeColors(color) {
        document.querySelectorAll('.square').forEach(item => item.style.backgroundColor = color);
        // console.log(color);
    }
    
    function reset(){
        setReplay(!replay);
        document.querySelector('#message').textContent = '';
        document.querySelector('#reset').textContent = 'NEW COLORS';
    }

    function changeMode(m){
        setMode(m);
        document.querySelector('#message').textContent = '';
        document.querySelector('#reset').textContent = 'NEW COLORS';
    }
    
    return(
        <>
        <Header picked={pickedColor} />
        <div className='nav'>
            <button id="reset" onClick={() => reset()}>NEW COLORS</button>
            <span id="message"></span>
            <div>
                <button onClick={(m) => changeMode('EASY')} className={`${mode === 'EASY' ? 'selected': ''}`}>EASY</button>
                <button onClick={(m) => changeMode('HARD')} className={`${mode === 'HARD' ? 'selected': ''}`}>HARD</button>
            </div>
        </div>
        <div id="container">
            {colors.map((color, i) => {
                return <div className="square" style={{backgroundColor: `${color}`}} value={color} onClick={handleClick} key={i}></div>
            })}
        </div>
        </>
    )
}

export default Square;
import {useEffect, useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import video from '../images/backgroundvid.mp4';
  
function Redorback (){
    const [card, setCard] = useState('allinone');
    const [two, setTwo] = useState(' ');
    const [res,setRes] = useState (' ');
    const [score, setScore] = useState(100);
    const [tries, setTries] = useState(11);
    const [color, setColor] = useState('white');
    let arr = ['jvari','guli','yvavi','aguri'];
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
      }
    function choose () {
        var changer = arr.random();
        return changer;
    }
    useEffect(() => {
        var result='';
        if(two==='black' && card==='yvavi'){
            result='Won';
            setRes(result);
            setScore(score + 10);
            setColor('lightgreen');
        }
        else if(two==='black' && card==='jvari'){
            result='Won';
            setRes(result);
            setScore(score + 10);
            setColor('lightgreen');
        }
        else if(two==='red' && card==='guli'){
            result='Won';
            setRes(result);
            setScore(score + 10);
            setColor('lightgreen');
        }
        else if(two==='red' && card==='aguri'){
            result='Won';
            setRes(result);
            setScore(score + 10);
            setColor('lightgreen');
        }
        else if(card==='allinone'){
            result=' ';
            setRes(' ');
            setScore(score);
        }
        else {
            result='Lost';
            setRes(result);
            setScore(score - 10);
            setColor('red');
        }
        setTries(tries-1);
    },[card,two]);
    function display (){
        if (tries>0) {
            return (
                <div className='content'>
                <div className='gameredorblack'>
                <img className='redorblackcards' src={require(`../images/${card}.png`)} alt=''></img>
                <div className='showstats'>
                <div>Tries {tries}</div>
                <div style={{color:color}}>{res}</div>
                <div style={{display:'flex'}}>Your Score:<div style={{color:color}}>{score}</div></div>
                <div style={{display:'flex'}}>
                <Button variant="dark" className='blackbutton' onClick={() =>{setCard(choose()); setTwo('black');}} >Black</Button>
                <Button variant="danger" className='redbutton' onClick={() =>{setCard(choose()); setTwo('red');}}>Red</Button>{' '}
                </div>
                </div>
                </div>
      </div>
                    );
        }
        else {
            return (
                <div className='content'>
                <div className='gameredorblack'>
                <div className='showstats'>
                <img className='redorblackcards' src={require(`../images/allinone.png`)} alt=''></img>
                <div style={{display:'flex'}}>Your Final Score:<div style={{color:'lightgreen'}}>{score}</div></div>
                <Button variant="success" onClick={() =>{setTries(11);setScore(100);setRes(' ')}}>Restart</Button>{' '}
                </div>
                </div>
                </div>
            );
        }
    }
  return (
    
    <div className='main'>
        <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      {display()}
      </div>
      
    
   
   
  );}
  
export default Redorback;
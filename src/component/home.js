import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import redorblackimg from '../images/allinone.png';
import luckywheelimg from '../images/wheel.png';
import hangmanimg from '../images/hangmanback.jpg';
import Button from 'react-bootstrap/Button';
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

  
function Home (){
  const { darkMode } = useContext(ThemeContext);
    return (
      <div>
        <CardGroup>
          <Card className={darkMode ? "bg-dark text-white" : "bg-light text-black"}>
            <Card.Img variant='top' src={redorblackimg}/>
            <Card.Body>
              <Card.Title>Red or Black</Card.Title>
              <Card.Text>
                This is a game where you have 10 tries and you have to guess the color of your card right.
              </Card.Text>
              <Button href='/redorblack' variant="primary">Play The Game</Button>
            </Card.Body>
           
          </Card>
          <Card className={darkMode ? "bg-dark text-white" : "bg-light text-black"}>
            <Card.Img variant='top' src={luckywheelimg}/>
            <Card.Body>
              <Card.Title>Wheel of Luck</Card.Title>
              <Card.Text>
               this is a game where you get to roll the wheel of luck and get scores you get 5 tries in total.{' '}
              </Card.Text>
              <Button href='/luckywheel' variant="primary">Play The Game</Button>
            </Card.Body>
            
          </Card>
          <Card className={darkMode ? "bg-dark text-white" : "bg-light text-black"}>
            <Card.Img variant='top' src={hangmanimg}/>
            <Card.Body>
              <Card.Title>HangMan</Card.Title>
              <Card.Text>
                This is a game where you have to guess car manufacturer right you can make 6 mistakes.{' '}
              </Card.Text>
              <Button href='/hangman' variant="primary">Play The Game</Button>
            </Card.Body>
            
          </Card>
          
        </CardGroup>
        </div>
      );}
  
export default Home;
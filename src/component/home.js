import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import redorblack from '../images/allinone.png';
import luckywheelimg from '../images/wheel.png'
import Button from 'react-bootstrap/Button';
  
function Home (){
    return (
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={redorblack} />
            <Card.Body>
              <Card.Title>Red or Black</Card.Title>
              <Card.Text>
                This is game where you have 10 tries and you have to guess your card right.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button href='/redorblack' variant="primary">Play The Game</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={luckywheelimg}/>
            <Card.Body>
              <Card.Title>Wheel of Luck</Card.Title>
              <Card.Text>
                In this card your fortune decides what kind of scores you are gonna get in total.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button href='/luckywheel' variant="primary">Play The Game</Button>
            </Card.Footer>
          </Card>
          
        </CardGroup>
      );}
  
export default Home;
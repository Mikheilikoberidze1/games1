import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import redorblack from '../images/allinone.png';
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
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      );}
  
export default Home;
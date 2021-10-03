import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';

const Meal = (props) => {
      
    const {strMeal, strMealThumb , strInstructions , idMeal} = props.meal;
    return (
        
        <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title> {strMeal} </Card.Title>
          <Card.Text>
             {strInstructions.slice(0,100)}
          </Card.Text> 
          
          <Link to={`/meal/${idMeal}`}>
          <Button variant="success">See More Details</Button>
          </Link>
          
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Meal;
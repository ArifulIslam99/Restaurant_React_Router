import React from 'react';
import { Card } from 'react-bootstrap';

const MealData = (props) => {

    const {strMeal , strMealThumb, strInstructions} = props.meal;
    return (
        <Card style={{width: '40%', margin: 'auto' , marginTop: '20px' }} className="bg-dark text-white ">
  <Card.Img src={strMealThumb} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{strMeal}</Card.Title>
    <Card.Text>
       {strInstructions.slice(0,200)}
    </Card.Text>
    
  </Card.ImgOverlay>
</Card>
    );
};

export default MealData;
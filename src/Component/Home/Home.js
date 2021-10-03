import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Home = () => { 

    const [text, setText] = useState('');
    const handleText = event => {
        const inputText = event.target.value;
        setText(inputText)
    }

    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        .then(res => res.json()
        .then(data => setMeals(data.meals)))
    },[text]) 
    return (
              <div>
                 <div>
                
                 <h1>Welcome To <span style={{color: 'orangered'}}>FoodMia Restaurant! </span> </h1>
            <input onChange={handleText} placeholder="Search  Food" type="text" /> <br /> <br />
                 </div>
                <Row xs={1} md={4} className="g-6"> 
                  {
                meals.map(meal => <Meal key={meal.strMeal} meal={meal}></Meal> )
                   }
            </Row>
              </div>
  
           
       
    );
};

export default Home;
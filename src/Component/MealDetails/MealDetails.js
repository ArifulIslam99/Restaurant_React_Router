import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MealData from '../MealData/MealData';



const MealDetails = () => { 

    const {mealId} = useParams(); 
     const [meals, setmeals] = useState([]);
     useEffect(()=>{
         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
         .then(res => res.json())
         .then(data => setmeals(data.meals))
     },[]) 

   
    return (  
       <div>  
           {
               meals.map(meal => <MealData key={meal.idMeal} meal = {meal}></MealData>)
           }
              
             
        </div>
    );
};

export default MealDetails;
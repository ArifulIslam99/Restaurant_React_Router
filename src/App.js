
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';

import MealDetails from './Component/MealDetails/MealDetails';
import NotFound from './NotFound/NotFound';
import Home from './Component/Home/Home'
import Abousus from './Component/About Us/Abousus';

function App() {
  return (
    <div className="App">
         
        

       <BrowserRouter> 
       <Header></Header>
         <Switch> 
         
           <Route exact path='/'>
                  <Home></Home>
           </Route>
           <Route exact path='/home'>
                 <Home></Home>
           </Route>  

           <Route exact path='/meal/:mealId'>
             <MealDetails></MealDetails>
           </Route> 
           <Route path='/aboutus'>
             <Abousus></Abousus>
           </Route> 
           <Route path="/meal">
               <Home></Home>
           </Route>
           <Route path="*">
             <NotFound></NotFound>
           </Route> 
         </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;

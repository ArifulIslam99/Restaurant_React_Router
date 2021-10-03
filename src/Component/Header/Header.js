import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'

const Header = () => { 
    const  activeStyle={
        fontWeight: "bold",
        color: "red"
      };

    
    
    return (
        <div> 
            <div className="Nav">
            <NavLink activeStyle={activeStyle} className="link" to='/home'>Home</NavLink>
            
            <NavLink activeStyle={activeStyle} className="link" to='/aboutus'>About Us</NavLink>
            <NavLink activeStyle={activeStyle} className="link" to='/meal'>Meal</NavLink>
        </div>
               
        </div>
    );
};

export default Header;
import React from "react";
import logo from "../images/logo.png"

export default function Header()
{
    
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header--image"/>
           
                <h2 className="header--title">MemeGenerator</h2>
            <h4 className="header--project">React-Project 3</h4>
         
        </header>
    )
}
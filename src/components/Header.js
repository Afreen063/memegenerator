import React from "react";


export default function Header()
{
    function handleClick(){
        console.log("it was clicked");//we dont need() to call the function when the button is clicked 
    } 
    function handleMouseover()
    {
        console.log("over it");
    }
    return (
        <header className="header">
            <img src="https://ih1.redbubble.net/image.493812748.1150/flat,1000x1000,075,f.u1.jpg" onMouseOver={handleMouseover} className="logo"/>
            <h2>MemeGenerator</h2>
            <h4>React-Project 3</h4>
            <button onClick={handleClick}>click me</button>
        </header>
    )
}
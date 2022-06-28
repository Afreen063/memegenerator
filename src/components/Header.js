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
            <img src="http://www.pngall.com/wp-content/uploads/5/Meme-Troll.png" onMouseOver={handleMouseover} className="header--image"/>
           
                <h2 className="header--title">MemeGenerator</h2>
            <h4 className="header--project">React-Project 3</h4>
         
        </header>
    )
}
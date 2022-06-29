import React from "react";

export default function Greet(prop)
{
   const [isImportant, setIsImportant]= React.useState("Yes");
   function handleClick()
   {
             setIsImportant("No");
   }
   return (
    <div>
        <h1>is state important? {isImportant}</h1>
        <button onClick={handleClick}>click me</button>
    </div>
   )
}
//difference between state and prop in a component.
// prop are immutable where state is mutable
//g state is changing but the prop is not changing.
// useState is react lib help us to change the state.
//line 5- we are declaring an array with fisrt value as const and second as func.
//the setIsImportant is use to set the value of isimportant.
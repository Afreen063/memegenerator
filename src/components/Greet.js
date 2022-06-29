import React from "react";

export default function Greet()
{

   const [count, setCount]= React.useState(0);
   function decClick()
   {
             setCount((oldValue)=>{
                return oldValue-1;
             });//we dont use c++ or count-- , when we use useState we dont change the state of count;
   }// we can also pass a function in setCount funct 
   //best way to pass funct in setCount... need some research
   function incClick()
   {
             setCount(count+1);
   }

   return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={decClick}>-</button>
        <button onClick={incClick}>+</button>
    </div>
   )
}
//difference between state and prop in a component.
// prop are immutable where state is mutable
//g state is changing but the prop is not changing.
// useState is react lib help us to change the state.
//line 5- we are declaring an array with fisrt value as const and second as func.
//the setIsImportant is use to set the value of isimportant.
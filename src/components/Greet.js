import React from "react";

export default function Greet(prop)
{
    const date=new Date();
    const hours= date.getHours();
    let g="";
    if(hours>=12)
    g="morning";
    else
     g="evening";
     const h=React.useState(prop.name);//useState is basically an array
     console.log(h);
    return (
        <h1>{h[0]} {g} {prop.name}</h1>
    )
}
//difference between state and prop in a component.
// prop are immutable where state is mutable
//g state is changing but the prop is not changing.
// a state in react 
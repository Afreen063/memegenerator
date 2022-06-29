import React from "react";


export default function Generate()
{
    const [thingsArray, setThingsArray] = React.useState(["thing 1", "thing 2"]);
    function Addthings()
    {
           setThingsArray((perThing)=>{
            return [...thingsArray, `things ${perThing.length+1}`];
           })
           console.log(thingsArray);
    }
    const things = thingsArray.map((t)=>{
        return <h1>{t}</h1>
    })
    return (
        <div>
            <button onClick={Addthings}>Add things</button>
            {things}
        </div>
    )
}
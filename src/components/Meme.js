import React from "react";
//import memeData from "./memeData";
 export default function Meme()
 {
   /* function memeImage()
    {
        const memeArray = memeData.data.memes;
        const randomMeme = Math.floor(Math.random()*memeArray.length);
        //console.log(randomMeme);
        const url= memeArray[randomMeme].url;
      // console.log(url);
    }*/
    const thingsArray=["thin1","thin6"];
    function addtin()
    {
        const newthing= `thin ${thingsArray.length+1}`;
        thingsArray.push(newthing);
    }
    const thinElement= thingsArray.map((th)=>{
        return <p key={th}>{th}</p>
    })
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="top text"className="form--input"></input>
                <input type="text" placeholder="bottom text" className="form--input"></input>
                <button  className="form--button" onClick={addtin}>Get a new meme Image</button>
                {thinElement}
            </div>
        </main>
    )
 }
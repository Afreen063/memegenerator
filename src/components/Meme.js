import React from "react";
import memeData from "./memeData";
 export default function Meme()
 {  
    const [memeImage, setMemeImage]= React.useState("")
    function memeImageCall()
    {
        const memeArray = memeData.data.memes;
        const randomMeme = Math.floor(Math.random()*memeArray.length);
        console.log(randomMeme);
        const url= memeArray[randomMeme].url;
      console.log(url);
      setMemeImage(url);
    }
    
    
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="top text"className="form--input"></input>
                <input type="text" placeholder="bottom text" className="form--input"></input>
                <button  className="form--button" onClick={memeImageCall}>Get a new meme Image</button>
                <img src={memeImage} alt="select-img" className="meme--image"/>
            </div>
        </main>
    )
 }
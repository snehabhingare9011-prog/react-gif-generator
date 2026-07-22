import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const Tag = () => {
    const [loading,setLoading]=useState(false);
    const[tag,setTag]=useState("car");

    const [gif,setGif]=useState('');
    const API_KEY=process.env.REACT_APP_GIPHY_API_KEY; 

    console.log("api key",API_KEY);

    async function fetchData(){

       setLoading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}$tag=${tag}`;

        const responce=await axios.get(url);
        let img_url=responce.data.data.images.downsized_large.url;
        console.log("image_url",img_url);
        setGif(img_url)
       setLoading(false);

    }
    useEffect(()=>{
        fetchData();

    },[]);

    function clickHandler(){
        fetchData()

    }
  return (
    <div>
        <h3>
            Random {tag} GIF
        </h3>
        {loading?<Spinner/>:<img src={gif}></img>}
        
        <input type="text" onChange={(event)=>setTag(event.target.value)} value={tag}></input>
        <button  onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag
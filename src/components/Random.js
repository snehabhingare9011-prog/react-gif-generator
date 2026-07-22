import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const Random = () => {
      const [loading,setLoading]=useState(false);

    const [gif,setGif]=useState('');
    const API_KEY=process.env.REACT_APP_GIPHY_API_KEY; 

    console.log("api key",API_KEY);

    async function fetchData(){

       setLoading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

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
            A Random GIF
        </h3>
        {loading?<Spinner/>:<img src={gif}></img>}
        <button  onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
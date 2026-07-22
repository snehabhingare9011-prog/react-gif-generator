import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Tag = () => {
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("car");
  const [gif, setGif] = useState('');

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  async function fetchData() {
    setLoading(true);

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const response = await axios.get(url);
    let img_url = response.data.data.images.downsized_large.url;

    setGif(img_url);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
  <div className="w-[750px] bg-[#5B94E8] border border-gray-600 rounded-2xl shadow-lg flex flex-col items-center py-6 px-8">

    <h2 className="text-3xl font-bold uppercase underline mb-6">
      Random {tag} GIF
    </h2>

    {
      loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt={tag}
          className="w-[380px] h-[230px] object-cover"
        />
      )
    }

    <input
      type="text"
      value={tag}
      onChange={(event) => setTag(event.target.value)}
      placeholder="Enter Tag"
      className="w-[90%] mt-6 px-4 py-2 border border-gray-500 rounded-md text-center text-lg outline-none bg-white"
    />

    <button
      onClick={clickHandler}
      className="w-[90%] mt-4 bg-blue-100 rounded-md py-3 text-lg font-bold uppercase hover:bg-blue-200 transition-all duration-200"
    >
      Generate
    </button>

  </div>
);
};

export default Tag;
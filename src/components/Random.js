import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hook/useGif';

const Random = () => {
  const {gif,loading,fetchData}=useGif();

  function clickHandler() {
    fetchData();
  }
return (
  <div className="w-[750px] bg-[#43D46D] border border-gray-600 rounded-2xl shadow-lg flex flex-col items-center py-6 px-8">

    <h2 className="text-3xl font-bold uppercase underline mb-6">
      A Random GIF
    </h2>

    {
      loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="Random GIF"
          className="w-[380px] h-[230px] object-cover"
        />
      )
    }

    <button
      onClick={clickHandler}
      className="mt-8 w-[90%] bg-green-100 rounded-md py-3 text-lg font-bold uppercase hover:bg-green-200 transition-all duration-200"
    >
      Generate
    </button>

  </div>
);
};

export default Random;
import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({ genreId, selectedGenreName }) {
  // both props to update GenreID when clicked and update the name
  const [genreList, setGenreList] = useState([]); // state variable to hold list of genres fetched by API. empty at first
  const [activeIndex, setActiveIndex] = useState(0); // keeps track of currently active genre index in list chosen by user

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    // responsible for fetching genre list from api through GlobalApi.
    GlobalApi.getGenreList.then((resp) => {
      console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-[25px] text-violet-800 mt-5 mb-2 font-bold text-left">
        Genres
      </h2>
      {genreList.map((item, index) => (
        <div
          key={index}
          className={`group flex gap-2 items-center cursor-pointer text-black hover:bg-violet-800 p-2 rounded-lg transition ease-in-out duration-300 hover:text-white ${
            activeIndex === index ? "text-white bg-violet-800" : null
          }`}
          onClick={() => {
            setActiveIndex(index);
            genreId(item.id);
            selectedGenreName(item.name);
          }}
        >
          <img
            src={item.image_background}
            className="w-[30px] h-[30px] object-cover rounded-lg"
          />
          <h3 className="text-[18px] font-medium group-hover:font-bold transition ease-in-out duration-300">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;

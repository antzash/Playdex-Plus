import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList() {
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    // responsible for fetching genre list from api through GlobalApi.
    GlobalApi.getGenreList.then((resp) => {
      console.log(resp.data.results);
    });
  };
  return <div>GenreList Component</div>;
}

export default GenreList;

import React from "react";
import CardContainer from "./CardContainer";



const Movies = () => {
  return (
    <>
      <CardContainer
        name="Movies & Films"
        page={Math.floor(Math.random() * 3) + 1}
        movieName={false}
      />
    </>
  );
};

const TrendingMovies = () => {
  return (
    <CardContainer
      name="Trending Movies"
      page={Math.floor(Math.random() * 3) + 3}
      movieName={false}
    />
  );
};
const Popular = () => {
  return (
    <CardContainer
      name="New & Popluar"
      page={Math.floor(Math.random() * 3) + 6}
      movieName={false}
    />
  );
};
const MyList = () => {
  return (
    <CardContainer
      name="My List"
      page={Math.floor(Math.random() * 3) + 9}
      movieName={false}
    />
  );
};


export default Movies;
export { TrendingMovies, Popular, MyList };

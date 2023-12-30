import React from "react";
import Moviecard from "./Moviecard";
const Movielist = ({ title, movies }) => {
  if (!movies || !Array.isArray(movies)) {
    // If movies is null or not an array, handle it accordingly
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available</p>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="">
        <div className=" row gap-4">
          {movies.map((movie) => (
            <div className="col-lg-2 col-md-3 col-sm-2 col-2">
              <Moviecard 
              key={movie.id}
              posterPath={movie.poster_path}
              originalTitle={movie.original_title}
              ratings={movie.vote_average}
              discription={movie.overview}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;

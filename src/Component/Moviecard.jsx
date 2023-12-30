import React from "react";
import { Img_Url_Cdn } from "../Utils/constant";

const Moviecard = ({ posterPath, ratings, originalTitle, discription }) => {
  const ratingModified = Math.floor(ratings);

  // Determine color based on the rating range
  let color;
  if (ratingModified > 6) {
    color = "green";
  } else if (ratingModified > 5 && ratingModified <= 6) {
    color = "orange";
  } else {
    color = "red";
  }

  return (
    <div>
      <div className="movie_container">
        <div className="movie_poster">
          <img src={Img_Url_Cdn + posterPath} className="rounded-lg" alt="" />
        </div>
        <h4 className="truncate">{originalTitle}</h4>
        <div>
          {/* <h6>{name}</h6> */}
          <p style={{ color: color }} className="font-semibold m-0">
            Ratings: {ratingModified}
          </p>
          <p className="text-gray-700 text_truncate3">{discription}</p>
          <button className="bg-orange-400 text-white p-2 rounded w-28">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;

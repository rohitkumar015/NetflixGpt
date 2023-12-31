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
  
      <div className="movie_container w200px ">
        <div className="movie_poster w-100 ">
          <img src={Img_Url_Cdn + posterPath} className=" w-100  rounded2" alt="" />
        </div>
        <h4 className="text-truncate text_white">{originalTitle}</h4>
        <div>
          
          <p style={{ color: color }} className="font-semibold m-0 ">
            Ratings: {ratingModified}
          </p>
          <p className="text_white text_truncate3">{discription}</p>
          <button className="watch_btn">Watch Now</button>
        </div>
      </div>
    
  );
};

export default Moviecard;

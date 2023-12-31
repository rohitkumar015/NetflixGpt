import React from "react";
import Moviecard from "./Moviecard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';




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
    <div className="container ">
      <h3 className="text-white pt-4">{title}</h3>
      {/* <div className="">
        <div className="d-flex align-items-center playlist">
          {movies.map((movie) => (
            <div className="  mt-3 ">
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
      </div> */}

      <Swiper
        spaceBetween={5} //this values are in px eg 50 --> 50px
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        cssMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={false}
        modules={[Autoplay,  ]}
        className="mySwiper "
      >
        
       
        
          {movies.map((movie) => (
            <SwiperSlide className=" d-flex align-items-center playlist  mt-3 ">
              <Moviecard 
              key={movie.id}
              posterPath={movie.poster_path}
              originalTitle={movie.original_title}
              ratings={movie.vote_average}
              discription={movie.overview}
            />
            </SwiperSlide>
          ))}
      
     
       
       
       
      </Swiper>

      


    </div>
  );
};

export default Movielist;
//  write button gradient animation only css?
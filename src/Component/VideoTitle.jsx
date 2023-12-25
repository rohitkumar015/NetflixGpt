import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  console.log("video container" + title);
  return (
    <div className="  container">
      <div className="absolute bottom-7 ">
        <h2 className="text-white text_shadow">{title}</h2>
        <p className="text-white text_shadow">{overview}</p>
        <div className="flex  items-center gap-2">
          <button className="flex justify-center items-center bg-orange-400 px-3 py-2 rounded-lg text-white">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </span>{" "}
            Play
          </button>
          <button className="flex justify-center items-center bg-slate-700 opacity-70 px-3 py-2 rounded-lg text-white">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </span>{" "}
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

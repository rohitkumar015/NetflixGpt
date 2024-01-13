import React from "react";

const GptSeacrhbar = () => {
  return (
    <>
      <div className="container w-100 border-1">
        <div className=" p-2">
          <form action="" className="w-100 d-flex justify-content-center">
            <div
              className="d-flex justify-content-center w-100"
              style={{ maxWidth: "800px" }}
            >
              <div className="d-flex gap-3 w-100 ">
                <input
                  type="text"
                  placeholder="what do you want to see today ?"
                  className="netflix_input w-100"
                />
                <button className="netflix_btn">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GptSeacrhbar;

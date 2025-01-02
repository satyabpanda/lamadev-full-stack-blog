// import React from 'react';

import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and articles</span>
      </div>
      {/* {INTRODUCTION} */}
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="mt-8 text-md md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <Link to="write" className="hidden md:block relative">
          <svg            
            viewBox="0 0 200 200"
            width={200}
            height={200}
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest "
          >
            <path id="circlePath" d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150 , 0 a 75 , 75 0 1, 1 -150 ,0" fill="none"/>
            <text>
              <textPath href="#circlePath" startOffset={"0"}>Write Your Story</textPath>
              <textPath href="#circlePath" startOffset={"50%"}>Share Your Idea</textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={50}
              height={50}
              fill="none"
              stroke="white"
              strokeWidth={2}
              className="w-6 h-6 text-white ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </Link>
      </div>
      {/* {FEATUREDPOSTS} */}
      {/* {RECENTPOSTS} */}
    </div>
  );
};

export default HomePage;
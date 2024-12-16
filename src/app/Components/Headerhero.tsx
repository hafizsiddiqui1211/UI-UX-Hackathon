import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-black h-screen text-white flex items-center justify-center overflow-hidden">
      {/* Background Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16">
        {/* Left Content */}
        <div className="text-left md:w-1/2">
          <p className="text-[#FF9F0D] italic mb-2">Its Quick & Amusing!</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            The <span className="text-yellow-400">Art</span> of speed <br />{" "}
            food Quality
          </h1>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
          <button className="bg-yellow-500 text-[#E0DFDF] px-6 py-3 hover:bg-yellow-400 transition rounded-[30px]">
            See Menu
          </button>
        </div>

        {/* Right Image Content */}
        <div className="relative md:w-1/2 flex justify-center">
          {/* Circle Image */}
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden">
            <img
              src="/food.png" // Replace with your image path
              alt="Delicious Food"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Surrounding Icons */}
          <div className="absolute top-4 -left-10 md:left-0 animate-spin-slow">
            <img
              src="/src/app/Rectangle 8928.png"
              alt="Icon 1"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </div>
          <div className="absolute bottom-4 left-0">
            <img
              src="/icon2.png"
              alt="Icon 2"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <img
              src="/icon3.png"
              alt="Icon 3"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute top-4 right-8 hidden md:block">
        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white focus:outline-none placeholder-gray-400"
          />
          <button className="text-yellow-400 ml-2" title=".">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.35-6.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

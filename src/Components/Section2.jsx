import React from "react";
import { Link } from "react-router";

const Section2 = () => {
  return (
    <div
      className="py-16 md:py-24 bg-base-100/70 mt-[300px]"
      style={{ perspective: "1000px" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-pink-600 dark:text-pink-400 font-bold text-xl uppercase tracking-widest">
            Taste the Community
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-3 text-gray-900 dark:text-white">
            Unlock Local Flavors & Share Your Passion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div
            className="group p-10 rounded-2xl shadow-2xl bg-base-300
                       transform transition duration-700 ease-in-out cursor-pointer
                       hover:shadow-3xl-orange hover:shadow-orange-500/50 
                       hover:translate-y-[-5px] hover:rotate-x-3 hover:rotate-y-1 hover:bg-gray-600"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className=" mb-4 transition duration-500 group-hover:scale-110 group-hover:-translate-y-1 flex flex-wrap lg:flex-nowrap justify-between gap-7">
              <img
                src="https://uniquelylocal.co.uk/wp-content/uploads/2022/10/Hidden-Gems-Food-Tour-of-York-Review-1-768x1024.jpg"
                alt="food image"
                className="w-[200px] h-[200px] object-cover rounded-xl"
              />
              <h3 className="text-3xl font-extrabold mb-3 text-gray-800 dark:text-gray-100 transition-colors duration-300 group-hover:text-orange-500">
                Discover Hidden Local Gems
              </h3>
            </div>

            <p className="text-lg text-white mb-8 leading-relaxed">
              Dive into thousands of reviews to uncover the very best street
              food spots, family-run restaurants, and secret local joints right
              around the corner. Never settle for boring food again!
            </p>
            <Link
              to={"/all-reviews"}
              className="w-full sm:w-auto px-4 md:px-10 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg 
                         hover:bg-orange-600 transition duration-300 transform 
                         hover:scale-105 active:scale-95 active:shadow-none"
            >
              Start Discovering
            </Link>
          </div>

          <div
            className="group p-10 rounded-2xl shadow-2xl bg-base-300
                       transform transition duration-700 ease-in-out cursor-pointer
                       hover:shadow-3xl-green hover:shadow-green-500/50 
                       hover:translate-y-[-5px] hover:rotate-x-3 hover:-rotate-y-1 hover:bg-gray-600"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className=" mb-4 transition duration-500 group-hover:scale-110 group-hover:-translate-y-1 flex flex-wrap lg:flex-nowrap justify-between gap-7">
              <img
                src="https://img.freepik.com/premium-photo/close-up-person-taking-photo-food_23-2149303562.jpg"
                alt="food image"
                className="w-[200px] h-[200px] object-cover rounded-xl"
              />
              <h3 className="text-3xl font-extrabold mb-3 text-gray-800 dark:text-gray-100 transition-colors duration-300 group-hover:text-green-500">
                Be the Critic, Share Your Dish
              </h3>
            </div>

            <p className="text-lg text-white mb-8 leading-relaxed">
              Your opinion matters! Post honest reviews with high-quality photos
              and ratings. Help other food enthusiasts find their next favorite
              meal and grow our community.
            </p>
            <Link
              to={"/add-review"}
              className="w-full sm:w-auto px-4 md:px-10  py-3 bg-green-500 text-white font-bold rounded-full shadow-lg  hover:bg-green-600 transition duration-300 transform  hover:scale-105 active:scale-95 active:shadow-none"
            >
              Post a Review Now
            </Link>
          </div>
        </div>

        <div
          className="text-center mt-16"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <p className="text-lg font-medium">
            **Local Food Lovers Network**: Your trusted hub for community-driven
            food exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;

import React, { useEffect, useState } from "react";

const RecomendedFood = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://my-assignment-10-server-sand.vercel.app/recomended-food")
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, []); 

  return (
    <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto py-10">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold text-center mb-16 lg:mb-[100px]">
        Recomended Food
      </h2>
      {food.map((review) => (
        <div
          key={review._id}
          className="bg-linear-to-br appear from-[#2a2a29] to-[#c9a35b] my-10 p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12" // Added sm:p-6 and adjusted gap and flex-direction breakpoint
        >
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={review.foodImage}
              alt={review.foodName}
              className="w-full lg:w-[90%] h-[250px] sm:h-80 md:h-[380px] lg:h-[420px] object-cover rounded-2xl shadow-[0_0_30px_rgba(255,100,50,0.5)] border-4 border-[#ff4d4d]/40" // Adjusted image height for responsiveness
            />
          </div>
          <div className="w-full lg:w-1/2 text-white space-y-4 sm:space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#ffb347] drop-shadow-lg">
              {review.foodName}
            </h1>
            <div className="flex items-center gap-3">
              <p className="text-2xl sm:text-3xl font-bold text-[#ff4d4d]">
                ⭐ {review.rating}
              </p>
              <span className="text-gray-400 text-sm sm:text-base">
                (Customer Rating)
              </span>
            </div>
            <div className="space-y-1 text-gray-300 text-sm sm:text-base">
              <p>
                <span className="font-semibold text-[#ffb347]">
                  Restaurant:
                </span>
                {review.restaurantName}
              </p>
              <p>
                <span className="font-semibold text-[#ffb347]">Location:</span>
                {review.location}
              </p>
            </div>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed italic pt-2">
              “{review.reviewText}”
            </p>
            <div className="bg-[#1f1f1f] border border-[#ff4d4d]/40 p-4 sm:p-5 rounded-xl mt-3 shadow-md">
              <p className="font-semibold text-lg sm:text-xl">
                {review.reviewerName}
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                {review.reviewerEmail}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Reviewed on {review.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecomendedFood;

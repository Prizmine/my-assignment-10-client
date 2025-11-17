import React, { useEffect, useState } from "react";

const RecomendedFood = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recomended-food")
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, []);

  // console.log(food);
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-6xl text-white font-bold text-center mb-[100px]">
        Recomended Food
      </h2>
      {food.map((review) => (
        <div
          key={review._id}
          className="bg-linear-to-br appear  from-[#2a2a29] to-[#c9a35b] my-10 p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={review.foodImage}
              alt={review.foodName}
              className="w-full md:w-[90%] h-[280px] sm:h-[350px] md:h-[420px] object-cover rounded-2xl shadow-[0_0_30px_rgba(255,100,50,0.5)] border-4 border-[#ff4d4d]/40"
            />
          </div>

          <div className="w-full md:w-1/2 text-white space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#ffb347] drop-shadow-lg">
              {review.foodName}
            </h1>

            <div className="flex items-center gap-3">
              <p className="text-3xl font-bold text-[#ff4d4d]">
                ⭐ {review.rating}
              </p>
              <span className="text-gray-400">(Customer Rating)</span>
            </div>

            <div className="space-y-1 text-gray-300">
              <p>
                <span className="font-semibold text-[#ffb347]">
                  Restaurant:
                </span>{" "}
                {review.restaurantName}
              </p>
              <p>
                <span className="font-semibold text-[#ffb347]">Location:</span>{" "}
                {review.location}
              </p>
            </div>

            <p className="text-gray-200 text-lg leading-relaxed italic">
              “{review.reviewText}”
            </p>

            <div className="bg-[#1f1f1f] border border-[#ff4d4d]/40 p-5 rounded-xl mt-3 shadow-md">
              <p className="font-semibold text-xl">{review.reviewerName}</p>
              <p className="text-gray-400">{review.reviewerEmail}</p>
              <p className="text-gray-500 text-sm mt-1">
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

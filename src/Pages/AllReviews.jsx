import React, { useEffect, useState } from "react";
import AllReviewCard from "../Components/AllReviewCard";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/food-reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);

  return (
    <div className="mx-auto w-10/12 xl:w-8/12">
      <h2 className="text-6xl text-white font-bold text-center mt-[140px] mb-[100px] slide-1">
        All Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 gap-y-20 my-14 slide-1">
        {reviews.map((review) => (
          <AllReviewCard review={review} key={review._id}></AllReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;

import React, { useEffect, useState } from "react";
import HomeReviewCard from "./HomeReviewCard";
import Loader from "./Loader/Loader";
import { toast } from "react-toastify";

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://my-assignment-10-server-sand.vercel.app/top-food-reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader></Loader>;
  return (
    <div className="mx-auto w-10/12 xl:w-8/12 my-[300px]">
      <h2 className="text-6xl text-white font-bold text-center mb-[100px]">
        Top Rated Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 gap-y-20 my-14">
        {reviews.map((review) => (
          <HomeReviewCard review={review} key={review._id}></HomeReviewCard>
        ))}
      </div>
    </div>
  );
};

export default HomeReviews;

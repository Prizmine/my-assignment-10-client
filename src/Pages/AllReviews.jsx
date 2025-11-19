import React, { useEffect, useState } from "react";
import AllReviewCard from "../Components/AllReviewCard";
import Loader from "../Components/Loader/Loader";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchAllReviews = () => {
    setLoading(true);
    fetch("https://my-assignment-10-server-sand.vercel.app/food-reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllReviews();
  }, []);

  const handleSearch = () => {
    if (search.trim() === "") {
      fetchAllReviews();
      return;
    }

    setLoading(true);
    fetch(
      `https://my-assignment-10-server-sand.vercel.app/search-reviews?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-10/12 xl:w-8/12">
      <h2 className="text-6xl text-white font-bold text-center mt-[140px] mb-[50px] slide-1">
        All Reviews
      </h2>

      <div className="flex gap-3 mb-10 slide-1">
        <input
          type="text"
          placeholder="Search by food name..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button onClick={handleSearch} className="btn buttonPrimery">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 my-14 slide-1">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <AllReviewCard review={review} key={review._id} />
          ))
        ) : (
          <p className="text-center text-xl text-gray-300 col-span-3">
            No reviews found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllReviews;

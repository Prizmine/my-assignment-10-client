import { useState } from "react";

const AddReview = () => {
  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    restaurantName: "",
    location: "",
    rating: "",
    reviewText: "",
    reviewerName: "",
    reviewerEmail: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/food-reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Review added:", data);
        alert("Review submitted successfully!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/90 backdrop-blur shadow-lg rounded-2xl p-8 space-y-5 border border-orange-100"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">
          🍔 Add Food Review
        </h2>

        {/* Input Style */}
        <style>
          {`
            .input-box {
              @apply w-full px-4 py-3 rounded-xl border border-orange-200 
              focus:ring-2 focus:ring-orange-400 focus:outline-none 
              text-gray-700 shadow-sm;
            }
          `}
        </style>

        <input
          type="text"
          name="foodName"
          placeholder="Food Name"
          className="input-box"
          value={formData.foodName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="foodImage"
          placeholder="Food Image URL"
          className="input-box"
          value={formData.foodImage}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="restaurantName"
          placeholder="Restaurant Name"
          className="input-box"
          value={formData.restaurantName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location (e.g. Dhanmondi, Dhaka)"
          className="input-box"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (1 - 5)"
          className="input-box"
          value={formData.rating}
          min="1"
          max="5"
          step="0.1"
          onChange={handleChange}
          required
        />

        <textarea
          name="reviewText"
          placeholder="Write your review..."
          className="input-box h-28 resize-none"
          value={formData.reviewText}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="reviewerName"
          placeholder="Reviewer Name"
          className="input-box"
          value={formData.reviewerName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="reviewerEmail"
          placeholder="Reviewer Email"
          className="input-box"
          value={formData.reviewerEmail}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          className="input-box"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition-all"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;

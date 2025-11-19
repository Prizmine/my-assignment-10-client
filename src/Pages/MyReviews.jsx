import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader/Loader";
import { toast } from "react-toastify";
import { Link } from "react-router";

export default function MyReviews() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://my-assignment-10-server-sand.vercel.app/my-food-reviews?email=${user.email}`,
        {
          headers: {
            authorization: `bearer ${user.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.message);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    fetch(
      `https://my-assignment-10-server-sand.vercel.app/food-reviews/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then(() => {
        setReviews(reviews.filter((r) => r._id !== id));
        toast.success("Review Deleted");
        setSelected(null);
      })
      .catch((err) => toast.error(err.message));
  };

  if (loading) return <Loader />;

  if (reviews.length === 0)
    return (
      <p className="text-center mt-20 sm:mt-40 text-white font-bold text-2xl sm:text-4xl">
        No Review Found
      </p>
    );

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
        My Reviews
      </h1>

      <div className="rounded-2xl shadow-lg bg-base-100/50">
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left text-white">
            <thead className="bg-base-100/50 text-sm uppercase">
              <tr>
                <th className="p-4">Food</th>
                <th className="p-4">Restaurant</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-[#222] hover:bg-[#1a1a1a7f] transition"
                >
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.foodImage}
                      alt={item.foodName}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-xl shadow-lg hover:scale-110 transition duration-300"
                    />
                    <span className="font-semibold">{item.foodName}</span>
                  </td>
                  <td className="p-4">{item.restaurantName}</td>
                  <td className="p-4">{item.date}</td>

                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-4">
                      <Link
                        to={`/edit-review/${item._id}`}
                        className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-md text-sm"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => setSelected(item)}
                        className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 transition shadow-md text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden space-y-4 p-2 sm:p-4">
          {reviews.map((item) => (
            <div
              key={item._id}
              className="bg-[#1a1a1a7f] p-4 rounded-xl shadow-lg border border-[#222]"
            >
              <div className="flex items-start gap-4 mb-3 border-b border-[#222] pb-3">
                <img
                  src={item.foodImage}
                  alt={item.foodName}
                  className="w-16 h-16 object-cover rounded-xl shadow-lg shrink-0"
                />
                <div className="grow">
                  <p className="font-bold text-lg text-white">
                    {item.foodName}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Restaurant: {item.restaurantName}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-300 text-sm">
                  Date: <span className="font-medium">{item.date}</span>
                </p>
                <p className="text-sm">
                  Rating:{" "}
                  <span className="font-semibold text-yellow-400">
                    ⭐ {item.rating || "N/A"}
                  </span>
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <Link
                  to={`/edit-review/${item._id}`}
                  className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-md text-sm font-semibold"
                >
                  Edit
                </Link>

                <button
                  onClick={() => setSelected(item)}
                  className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 transition shadow-md text-sm font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1f1f1f] p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md border border-[#333]">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              Confirm Delete
            </h2>
            <p className="text-gray-300 text-center mb-6 text-sm sm:text-base">
              Are you sure you want to delete the review for **
              {selected.foodName}**?
            </p>

            <div className="flex justify-center gap-4 sm:gap-6">
              <button
                onClick={() => handleDelete(selected._id)}
                className="px-4 sm:px-6 py-2 text-white font-semibold bg-red-600 hover:bg-red-700 rounded-xl shadow-lg transition text-sm sm:text-base"
              >
                Confirm
              </button>

              <button
                onClick={() => setSelected(null)}
                className="px-4 sm:px-6 py-2 text-white bg-gray-600 font-semibold hover:bg-gray-700 rounded-xl shadow-lg transition text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

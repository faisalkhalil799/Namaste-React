import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import FakeCard from "./FakeCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const apiListData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantsArray =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantsArray);
    setFilteredRestaurantList(restaurantsArray);
  };

  useEffect(() => {
    apiListData();
  }, []);

  const buttonClickhandler = () => {
    const filteredList = restaurantList?.filter(
      (restaurant) => restaurant.info.avgRating > 4.1
    );
    setFilteredRestaurantList(filteredList);
  };

  const searchHandler = () => {
    const searchResult = restaurantList?.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(searchResult);
  };

  if (restaurantList?.length === 0) {
    return <FakeCard />;
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchHandler()}
            className="w-72 px-4 py-2 rounded-md border border-slate-300 
                 focus:outline-none focus:ring-2 focus:ring-emerald-500 
                 text-slate-700 placeholder-slate-400"
          />

          <button
            onClick={() => {
              setSearchText("");
              setFilteredRestaurantList(restaurantList);
            }}
            className="px-3 py-2 rounded-md bg-slate-200 
                   hover:bg-slate-300 text-slate-700 
                   transition"
          >
            ✕
          </button>

          <button
            onClick={searchHandler}
            className="px-5 py-2 rounded-md bg-emerald-600 
                 text-white font-medium 
                 hover:bg-emerald-700 transition"
          >
            Search
          </button>
        </div>

        <button
          onClick={buttonClickhandler}
          className="px-5 py-2 rounded-md bg-slate-800 
               text-slate-100 font-medium 
               hover:bg-slate-900 transition"
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      <div className="body-container flex flex-wrap">
        {filteredRestaurantList?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;

import { useEffect, useState } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import FakeCard from "./FakeCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedLabelCard = WithPromotedLabel(RestaurantCard);
  const apiListData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurantsArray =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    //NORMALIZE DATA FOR MATCHING THE DATA GENERATED VIA MOCKED MENU ITEMS
    const normalizedRestaurants = restaurantsArray?.map((res, index) => ({
      appResId: `R${index + 1}`, // internal stable ID
      swiggyId: res.info.id, // external ID
      name: res.info.name,
      cuisines: res.info.cuisines,
      avgRating: res.info.avgRating,
      costForTwoMessage: res.info.costForTwoMessage,
      cloudinaryImageId: res.info.cloudinaryImageId,
    }));

    setRestaurantList(normalizedRestaurants);
    setFilteredRestaurantList(normalizedRestaurants);
  };

  useEffect(() => {
    apiListData();
  }, []);

  // FILTER TOP RATED
  const buttonClickhandler = () => {
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant.avgRating > 4.4
    );
    setFilteredRestaurantList(filteredList);
  };

  // SEARCH
  const searchHandler = () => {
    const searchResult = restaurantList.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(searchResult);
  };

  if (!restaurantList?.length) return <FakeCard />;

  return (
    <>
      {/* SEARCH & FILTER BAR */}
      <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchHandler()}
            className="w-72 px-4 py-2 rounded-md border border-slate-300 
              focus:outline-none focus:ring-2 focus:ring-emerald-500"
            data-testid="inputBox"
          />

          <button
            onClick={() => {
              setSearchText("");
              setFilteredRestaurantList(restaurantList);
            }}
            className="px-3 py-2 rounded-md bg-slate-200 hover:bg-slate-300"
          >
            ✕
          </button>

          <button
            onClick={searchHandler}
            className="px-5 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Search
          </button>
        </div>

        <button
          onClick={buttonClickhandler}
          className="px-5 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-900"
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      {/* RESTAURANT LIST */}
      <div className="flex flex-wrap gap-6 pb-10">
        {filteredRestaurantList?.map((restaurant) => (
          <Link
            key={restaurant.appResId}
            to={`/restaurant/${restaurant.appResId}`}
          >
            {
              //due to api being blocked we are using the avg rating to filter out some restaurants to show promoted label on them
              restaurant.avgRating > 4.2 ? (
                <PromotedLabelCard {...restaurant} />
              ) : (
                <RestaurantCard {...restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;

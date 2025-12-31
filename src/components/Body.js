import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import FakeCard from "./FakeCard";

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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantsArray);
    setFilteredRestaurantList(restaurantsArray);
  };

  useEffect(() => {
    apiListData();
  }, []);

  const buttonClickhandler = () => {
    const filteredList = filteredRestaurantList?.filter(
      (restaurant) => restaurant.info.avgRating > 4.1
    );
    setFilteredRestaurantList(filteredList);
  };

  const searchHandler = () => {
    const searchResult = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(searchResult);
  };

  if (restaurantList.length === 0) {
    return <FakeCard />;
  }

  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search for restaurants..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="search-btn" onClick={searchHandler}>
        Search
      </button>
      <button className="filter-btn" onClick={buttonClickhandler}>
        Top Rated Restaurants
      </button>
      <div className="body-container">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );
};
export default Body;

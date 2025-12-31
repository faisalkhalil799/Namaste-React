import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import FakeCard from "./FakeCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const apiListData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantsArray =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantsArray);
  };

  useEffect(() => {
    apiListData();
  }, []);
  const buttonClickhandler = () => {
    const filteredList = restaurantList?.filter(
      (restaurant) => restaurant.info.avgRating > 4.1
    );
    setRestaurantList(filteredList);
  };

  if (restaurantList.length === 0) {
    return <FakeCard />;
  }

  return (
    <>
      <button className="filter-btn" onClick={buttonClickhandler}>
        Top Rated Restaurants
      </button>
      <div className="body-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );
};
export default Body;

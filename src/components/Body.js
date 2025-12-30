import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  const buttonClickhandler = () => {
    const filteredList = resList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setRestaurantList(filteredList);
  };

  const resetHandler = () => {
    setRestaurantList(resList);
  };

  return (
    <>
      <button className="filter-btn" onClick={buttonClickhandler}>
        Top Rated Restaurants
      </button>
      <button className="reset-btn" onClick={resetHandler}>
        Reset
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

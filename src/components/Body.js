import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
      ))}
    </div>
  );
};
export default Body;

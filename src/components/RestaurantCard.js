import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = props;
  return (
    <div className="food-item">
      <img src={CDN_URL + cloudinaryImageId} />
      <h3>{cuisines.join(", ")}</h3>
      <p>{name}</p>
      <span>Price: {costForTwo}</span>
      <span>Rating: {avgRating} ⭐</span>
    </div>
  );
};
export default RestaurantCard;

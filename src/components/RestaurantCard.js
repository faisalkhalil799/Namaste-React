import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = props;

  return (
    <div className="food-item">
      <img
        src={
          cloudinaryImageId
            ? CDN_URL + cloudinaryImageId
            : "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
        }
        alt="Food Item Image"
      />
      <h3>{cuisines.join(", ")}</h3>
      <p>{name}</p>
      <span>Price: {costForTwo}</span>
      <span>Rating: {avgRating} ⭐</span>
    </div>
  );
};
export default RestaurantCard;

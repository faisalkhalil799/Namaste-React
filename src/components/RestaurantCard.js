import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating = 3.5,
    costForTwo,
  } = props;

  return (
    <div
      className="w-56 h-75 m-4 rounded-lg border border-gray-200 
                 hover:shadow-lg transition-shadow duration-300 
                 cursor-pointer flex flex-col"
      data-testid="restaurantCard"
    >
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={
          cloudinaryImageId
            ? CDN_URL + cloudinaryImageId
            : "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
        }
        alt="Food Item"
      />

      <div className="p-3 flex flex-col grow">
        <h3 className="text-sm text-gray-600 font-medium line-clamp-1">
          {cuisines.join(", ")}
        </h3>

        <p className="text-base font-semibold text-gray-800 line-clamp-2 mt-1">
          {name}
        </p>

        <div className="mt-auto flex justify-between text-sm text-gray-700">
          <span>{costForTwo}</span>
          <span className="flex items-center gap-1">⭐ {avgRating}</span>
        </div>
      </div>
    </div>
  );
};

//Higher order component
export const WithPromotedLabel = (RestaurantWithLabel) => {
  return (props) => {
    return (
      <>
        <label className="m-2 p-2 bg-black text-white absolute rounded  -lg">
          Promoted✨
        </label>
        <RestaurantWithLabel {...props} />
      </>
    );
  };
};

export default RestaurantCard;

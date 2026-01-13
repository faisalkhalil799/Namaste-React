import { useState, useEffect } from "react";
import mockedMenus from "../utils/restaurantsMockData";
import { useParams } from "react-router-dom";
import FakeCard from "./FakeCard"; /* Blocker : we are not able to fetch the data for each restaurants as swiggy blocked their api from usage on localhost Swiggy blocked our local code because browsers enforce security rules, and Swiggy intentionally does not allow your origin. So we will be using mocked menu cards data */
import AccordionMenuCategory from "./AccordionMenuCategory";

const MenuCard = () => {
  const [menuList, setMenuList] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const { resId } = useParams(); // const fetchMenuList = async () => { // const fetchedData = await fetch( // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1211230" // ); // const text = await fetchedData.json(); // const jsonData = await fetchedData.json(); // setMenuList(jsonData); // };

  useEffect(() => {
    setMenuList(mockedMenus);
  }, []);

  if (!menuList) return <FakeCard />;

  const restaurant = menuList.find((item) => item.appResId === resId);

  if (!restaurant) return <p>Restaurant not found</p>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-5 p-2 text-3xl font-extrabold">{restaurant.name}</h1>

      <h2 className="mb-6 font-bold">
        {restaurant.cuisines.join(", ")} : {restaurant.costForTwoMessage}
      </h2>

      {restaurant.categories.map((category, index) => (
        <AccordionMenuCategory
          key={category.id}
          {...category}
          isOpen={openIndex === index}
          setIsOpen={() =>
            setOpenIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default MenuCard;

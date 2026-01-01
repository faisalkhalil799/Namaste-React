import { useState, useEffect } from "react";
import mockedMenus from "../utils/restaurantsMockData";
import { useParams } from "react-router-dom";
import FakeCard from "./FakeCard"; /* Blocker : we are not able to fetch the data for each restaurants as swiggy blocked their api from usage on localhost Swiggy blocked our local code because browsers enforce security rules, and Swiggy intentionally does not allow your origin. So we will be using mocked menu cards data */
const MenuCard = () => {
  const [menuList, setMenuList] = useState(null);
  const { resId } = useParams(); // const fetchMenuList = async () => { // const fetchedData = await fetch( // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1211230" // ); // const text = await fetchedData.json(); // const jsonData = await fetchedData.json(); // setMenuList(jsonData); // };
  const fetchMenuList = () => {
    setMenuList(mockedMenus);
  };
  useEffect(() => {
    fetchMenuList();
  }, []);
  if (menuList === null) return <FakeCard />;
  console.log(menuList);
  return menuList.map((listItem) => {
    if (listItem.resId !== resId) return null;

    return (
      <div key={listItem.resId}>
        <h1>{listItem.name}</h1>
        <h2>
          {listItem.cuisines.join(", ")} : {listItem.costForTwoMessage}
        </h2>
      </div>
    );
  });
};
export default MenuCard;

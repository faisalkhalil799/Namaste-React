import RestaurantCard, {
  WithPromotedLabel,
} from "../components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import mockedRestaurantsList from "../utils/mockedRestaurantsList";
import "@testing-library/jest-dom";

test("get restaurant card on the main page load of our app", () => {
  render(<RestaurantCard {...mockedRestaurantsList[0].info} />);
  const card = screen.getByTestId("restaurantCard");
  expect(card).toBeInTheDocument();
});

test("should show Promoted label when rating is above 4.2", () => {
  const mockRestaurant = {
    ...mockedRestaurantsList[0].info,
    avgRating: 4.5,
  };
  const RestaurantCardWithLabel = WithPromotedLabel(RestaurantCard);
  render(<RestaurantCardWithLabel {...mockRestaurant} />);

  const promotedLabel = screen.getByText("Promoted✨");
  expect(promotedLabel).toBeInTheDocument();
});

test("should NOT show Promoted label when rating is 4.2 or below", () => {
  const mockRestaurant = {
    ...mockedRestaurantsList[0].info,
    avgRating: 4.2,
  };

  render(<RestaurantCard {...mockRestaurant} />);

  const promotedLabel = screen.queryByText("Promoted");
  expect(promotedLabel).not.toBeInTheDocument();
});

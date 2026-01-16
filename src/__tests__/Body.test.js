import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import mockedRestaurantsList from "../utils/mockedRestaurantsList";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {},
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: mockedRestaurantsList,
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

test("Should render search input field and filter cards", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  // Wait for cards to appear AFTER mocked fetch resolves
  const cards = await screen.findAllByTestId("restaurantCard");
  expect(cards.length).toBeGreaterThan(2);

  const inputBox = screen.getByTestId("inputBox");

  fireEvent.change(inputBox, {
    target: { value: "Mr. Gurung Momo & Chinese Corner" },
  });

  const searchButton = screen.getByRole("button", { name: /search/i });

  fireEvent.click(searchButton);

  const filteredCards = await screen.findAllByTestId("restaurantCard");
  expect(filteredCards.length).toBe(1);
});

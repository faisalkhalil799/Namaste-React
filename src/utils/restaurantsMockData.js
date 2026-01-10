const generateItems = (baseName, isVeg = true) =>
  Array.from({ length: 5 }, (_, i) => ({
    id: `${baseName}-${i + 1}`,
    name: `${baseName} ${i + 1}`,
    price: 150 + i * 30,
    rating: Number((4 + (i % 2) * 0.5).toFixed(1)),
    ratingCount: 10 + i * 5,
    isVeg,
    isCustomisable: i % 2 === 0,
  }));

const mockMenus = Array.from({ length: 20 }, (_, i) => ({
  appResId: `R${1 + i}`,
  name: `Restaurant ${i + 1}`,
  cuisines: ["Indian", "Chinese"],
  costForTwoMessage: `₹${200 + (i + 1) * 10} for two`,
  categories: [
    {
      id: "starters",
      title: "Starters",
      items: generateItems("Starter", true),
    },
    {
      id: "main",
      title: "Main Course",
      items: generateItems("Main Dish", i % 2 === 0),
    },
    {
      id: "desserts",
      title: "Desserts",
      items: generateItems("Dessert", true),
    },
  ],
}));

export default mockMenus;

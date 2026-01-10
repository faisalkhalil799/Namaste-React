const restaurantNames = [
  "Spice Route",
  "Royal Biryani House",
  "Urban Tadka",
  "Masala Junction",
  "The Curry Leaf",
  "Dragon Wok",
  "Punjabi Dhaba",
  "Bombay Street Kitchen",
  "South Express",
  "Tandoori Nights",
  "Flavours of India",
  "Wok & Roll",
  "Biryani Blues",
  "The Hungry Owl",
  "Café Masala",
  "Curry Kingdom",
  "Street Treats",
  "Chilli & Garlic",
  "Foodie Hub",
  "The Spice Factory",
];
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

const mockMenus = restaurantNames.map((name, index) => ({
  appResId: `R${index + 1}`,
  name,
  cuisines: ["Indian", "Chinese"],
  costForTwoMessage: `₹${200 + (index + 1) * 10} for two`,
  categories: [
    {
      id: "starters",
      title: "Starters",
      items: generateItems("Starter", true),
    },
    {
      id: "main",
      title: "Main Course",
      items: generateItems("Main Dish", index % 2 === 0),
    },
    {
      id: "desserts",
      title: "Desserts",
      items: generateItems("Dessert", true),
    },
  ],
}));

export default mockMenus;

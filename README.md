#Namaste React
//Swiggy API format might change with time, so we might need to refactor the data fetching accordingly afterwards.
/\*\*

- Structure of our food ordering app

- Header
  - Logo
  - NavBar Items
- Body
  - Search
  - Restaurant Container
    - Restautant Card
      - Image
      - Name of restaurant, rating, cuisines, delivery time and cost of item
- Footer
  - Copyright
  - Links
  - Address
  - Contact
    \*\*/

#Redux

- Install @reduxjs/toolkit and react-redux
- Build our store
- connect our store with app
- slice (cart slice)
- dispatch(action)
- selectors

#Setting up testing in our app

- Install React Testing Library
- Install Jest
- Install babel-jest dependencies
- Configure babel
- Configure parcel babel file to disable default babel transpilation
- Jest npx jest --init
- Install jsdom library
- install @babel/preset-react => this is done to enable jsx in the test files else we won't be able to find the jsx in the document.
- Configure @babel/preset-react into babel.config.js
  //to get toBeInTheDocument & similar function for matching the desired results
- install @testing-library/jest-dom

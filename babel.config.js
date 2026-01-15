module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    //done to convert jsx into html for test cases assertion matching
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

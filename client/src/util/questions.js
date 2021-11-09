const questions = {
  "1": {
    question: "Name some CSS properties",
    answer:
      "Some to talk about: font-weight, will allow you to make font thinner or bolder, font-size to change the pixel value. margin is used to create space outside of defined borders, padding is used to create space within defined borders, border can change the dimension of the borders, and each of these can be specified in terms of direction. display which could make an element displayed inlined with the rest of the row or blocked which gives it a new row, position which allows for absolute positioning, to fix an element relative to its first positioned parent. box-sizing will allow for a border box to account for borders of other elements to fix its size accordingly.",
  },
  "2": {
    question: "visibility: hidden v display: none",
    answer:
      "if you had 2 150x150px divs on top of each other, the top green and the bottom red each with its own id for background-color, you could apply visibility: hidden on the green and it'd keep the red div in place as it simply looks invisible with its height and width still applied. However, display: none will make it appear as if the div has disappeared altogether, and the red div would move up in its place.",
  },
};

export default questions;

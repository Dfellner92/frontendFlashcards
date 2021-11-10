const questions = {
  1: {
    question: "Name some CSS properties",
    answer:
      "Some to talk about: font-weight, will allow you to make font thinner or bolder, font-size to change the pixel value. margin is used to create space outside of defined borders, padding is used to create space within defined borders, border can change the dimension of the borders, and each of these can be specified in terms of direction. display which could make an element displayed inlined with the rest of the row or blocked which gives it a new row, position which allows for absolute positioning, to fix an element relative to its first positioned parent. box-sizing will allow for a border box to account for borders of other elements to fix its size accordingly.",
  },
  2: {
    question: "visibility: hidden v display: none",
    answer:
      "if you had 2 150x150px divs on top of each other, the top green and the bottom red each with its own id for background-color, you could apply visibility: hidden on the green and it'd keep the red div in place as it simply looks invisible with its height and width still applied. However, display: none will make it appear as if the div has disappeared altogether, and the red div would move up in its place.",
  },
  3: {
    question: "CSS Terminology",
    answer:
      "A CSS file typically contains defined selctors (id, classes, and tags within the HTML) The selectors contain properties, which cause the selector to alter, usually specified by the property name. The way the properties are altered is through assigning them a value. For example we could have the property font-height: and give it the value 20px. Together, the property and its value form a declaration. Together, all the declarations of selector class form the rules",
  },
  4: {
    question: "Class v ID",
    answer:
      "a class is denoted by the . prefix, an id is denoted by the # prefix. id is meant to be more specific than a class, used only for one (although you could use it for more than one but most would consider this bad practice) Due to id having a higher specificity, it can overwrite class styles.",
  },
};

export default questions;

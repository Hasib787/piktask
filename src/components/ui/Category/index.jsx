import React from "react";
import { CategoryButton, Item } from "./Category.styles";

const Category = ({ photo }) => {
  console.log(photo);
  return (
    <Item>
      <img src={photo.urls.regular} alt="" />

      <CategoryButton>Category</CategoryButton>
    </Item>
  );
};

export default Category;

import React from "react";
import { CategoryButton, Item } from "./Category.styles";

const Category = ({ photo }) => {
  return (
    <Item>
      <img src={photo?.thumbnail} alt="" />
      <CategoryButton>{photo?.name}</CategoryButton>
    </Item>
  );
};

export default Category;

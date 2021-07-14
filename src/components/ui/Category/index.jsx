import React from "react";
import { CategoryButton, Item } from "./Category.styles";

const Category = ({ photo }) => {
  console.log(photo);
  return (
    <Item>
      <img src={"https://i.ibb.co/hsysXV4/luke-stackpoole-m-OEq-Otmu-PG8-unsplash.jpg"} alt="" />
      <CategoryButton>{photo?.name}</CategoryButton>
    </Item>
  );
};

export default Category;

import React from "react";
import { Link } from "react-router-dom";
import { CategoryButton, Item } from "./Category.styles";

const Category = ({ photo }) => {
  return (
    <Item>
      <img src={photo?.thumbnail} alt="" />
      <Link to={`/category/${photo?.slug}`}>
        <CategoryButton>{photo?.name}</CategoryButton>
      </Link>
    </Item>
  );
};

export default Category;

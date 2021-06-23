import React from "react";
import { CategoryButton, Item } from "./Category.styles";
import Typography from '@material-ui/core/Typography';

const Category = ({ photo }) => {
  console.log(photo);
  return (
    <Item>
      {/* <img src={photo.urls.regular} alt="" /> */}
      <Typography >{photo.name}</Typography>
      <Typography >{photo.slug}</Typography>

      {/* <CategoryButton>Category</CategoryButton> */}
    </Item>
  );
};

export default Category;

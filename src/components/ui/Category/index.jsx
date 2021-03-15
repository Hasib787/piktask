import React from 'react';
import { CategoryButton, Item } from './Category.styles';

const Category = ({ category }) => {
    return (
        <Item>            
            <img src={category.image} alt={category.name} />            

            <CategoryButton>{category.name}</CategoryButton>
        </Item>
    )
}

export default Category

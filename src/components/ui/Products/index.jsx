import { Grid } from '@material-ui/core';
import React from 'react';
import data from '../../../data/products.json';
import Product from './Product';

const Products = () => {
    const { products } = data;

    return (
        <Grid container spacing={2}>
            {products.length > 0 && products.map(product => (
                <Grid key={product._id} item xs={12} sm={4} md={3}>
                    <Product key={product._id} product={product} />
                </Grid>
            ))}
        </Grid>
    )
};

export default Products;

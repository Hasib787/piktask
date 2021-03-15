import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Footer from '../../../components/ui/Footer';
import productData from '../../../data/products.json';
import AdminHeader from '../../components/Header';
import Heading from '../../components/Heading';
import Sidebar from '../../components/Sidebar';
import useStyles from "./Revision.styles";

    const Revision = () => {
        const classes = useStyles();        
        const [products, setProducts] = useState(productData.products);

          return (
            <>
                <AdminHeader />
                
                <div className={classes.adminRoot}>
                    <Sidebar />
    
                    <main className={classes.content}>
                        <div className={classes.headingWrapepr}>
                            <Heading tag="h2">Under Revision</Heading>
                        </div>

                        <Grid container spacing={4}>
                            {products.length > 0 ? products.map(product => (
                                <Grid key={product._id} item xs={3}>
                                    <Card className={classes.cardWrapper}>
                                        <img src={product.image} alt={product.name} />
                                        <CardContent>
                                            <Typography variant="h3">{product.name}</Typography>
                                            <Typography variant="subtitle1">Under Revision</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )) : (
                                <div className={classes.noItemsFound}>
                                    <Typography>No products are in pending</Typography>
                                </div>
                            )}
                        </Grid>
                    </main>
                </div>
                
                <Footer addminFooter />
            </>
        )
    }
    
    export default Revision;   

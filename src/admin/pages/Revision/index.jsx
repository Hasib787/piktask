import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "../../../components/ui/Footer";
import productData from "../../../data/products.json";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./Revision.styles";

const Revision = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(productData.products);

  return (
    <Layout title={"Under Revision || Piktask"}>

      <div className={classes.adminRoot}>
        <Sidebar />

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.cardContentWrapper}>
            <div className={classes.headingWrapepr}>
              <Heading tag="h2">Under Revision</Heading>
            </div>

            <Grid container spacing={2}>
              {products.length > 0 ? (
                products.map((product) => (
                  <Grid key={product._id} item xs={12} sm={6} md={2} lg={3}>
                    <Card className={classes.cardWrapper}>
                      <img src={product.image} alt={product.name} />
                      <CardContent className={classes.cardContent}>
                        <Typography variant="h3">{product.name}</Typography>
                        <Typography variant="subtitle1">
                          Submission: 01 April, 2021
                          <span style={{marginLeft: "5rem"}}>type: jpg</span>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <div className={classes.noItemsFound}>
                  <Typography>No products are in pending</Typography>
                </div>
              )}
            </Grid>
          </div>
          <Footer />
        </main>
      </div>

    </Layout>
  );
};

export default Revision;

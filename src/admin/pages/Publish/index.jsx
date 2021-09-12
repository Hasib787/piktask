import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "../../../components/ui/Footer";
import productData from "../../../data/products.json";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./Publish.styles";

const Publish = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(productData.products);

  return (
    <Layout title={"Publish || Piktask"}>
      <div className={classes.adminRoot}>
        <Sidebar />

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.headingWrapepr}>
            <Heading tag="h2">Publish File</Heading>
          </div>

          <Grid container spacing={4}>
            {products.length > 0 ? (
              products.map((product) => (
                <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                  <Card className={classes.cardWrapper}>
                    <img src={product.image} alt={product.name} />
                    <CardContent>
                      <Typography variant="h3">{product.name}</Typography>
                      <div className={classes.itemFooter}>
                        <span>Published</span>
                        <span>Download(01)</span>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <div className={classes.noItemsFound}>
                <Typography>No products are published yet</Typography>
              </div>
            )}
          </Grid>
          <Footer addminFooter />
        </main>
      </div>

    </Layout>
  );
};

export default Publish;

import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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

  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <Layout title={"Under Revision || Piktask"}>

      <div className={classes.adminRoot}>
        {mobileView ? null : <Sidebar className={classes.adminSidebar} />}

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.cardContentWrapper}>
            <div className={classes.headingWrapepr}>
              <Heading tag="h2">Under Revision</Heading>
            </div>

            <Grid container spacing={2}>
              {products.length > 0 ? (
                products.map((product) => (
                  <Grid key={product._id} item xs={3} sm={2} md={2} className={classes.productItem}>
                    <Card className={classes.cardWrapper}>
                      <div className={classes.cardImage}>
                        <img src={product.image} alt={product.name} />
                      </div>
                      <CardContent className={classes.cardContent}>
                        <Typography variant="h3">Revision</Typography>
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

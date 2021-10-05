import { Container, Grid } from "@material-ui/core";
import React from "react";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import Layout from "../../../Layout";
import UserSideBar from "../../components/UserSideBar";

const UserSubscription = () => {
  return (
    <Layout title="Subscription || Piktask">
      <Header />
      
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <Grid container spacing={4}>
          <Grid item md={9} sm={9} xs={12}>
            <UserSideBar />
          </Grid>
          <Grid item md={9} sm={9} xs={12}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut inventore nesciunt laborum error a voluptatem, quam cum dolore officiis deserunt iste facere tenetur incidunt?</p>
          </Grid>
        </Grid>
      </Container>
      <Spacing space={{ height: "5rem" }} />
      <Footer />
    </Layout>
  )
};

export default UserSubscription;

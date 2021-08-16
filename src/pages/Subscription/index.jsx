import React from "react";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Layout from "../../Layout";
import useStyles from "./Subscription.style";

const Subscription = () => {
    const classes = useStyles();
  return (
    <Layout title="Subscription page piktask" description="This is subscription page">
      <Header />
      <HeroSection />
      <h1 className={classes.headerText}>
        Subscription page are coming soon....
      </h1>
      <Footer />
    </Layout>
  );
};

export default Subscription;

import React from "react";
import CallToAction from "../../components/ui/CallToAction";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import PopularKeyWords from "../../components/ui/PopularKeyWords";
import Layout from "../../Layout";

export const TrendingSearch = () => {
  return (
    <Layout>
      <Header />
      <HeroSection
        size="large"
        creativeWorksDone
        title="Graphic Resource for Free Download"
      />
      <PopularKeyWords />
      <CallToAction
        title="Join Piktask team"
        subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
        buttonText="Join Us"
        uppercase
      />
      <Footer />
    </Layout>
  );
};

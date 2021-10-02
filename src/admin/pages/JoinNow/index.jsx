import React from "react";
import HeroSection from "../../../components/ui/Hero";
import Layout from "../../../Layout";

const JoinNow = () => {
  return (
    <Layout title={"Join Now || Piktask"}>
      <HeroSection
        size="large"
        contributor
        isSearch
      />
    </Layout>
  );
};

export default JoinNow;

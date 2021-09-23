import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Spacing from '../../components/Spacing';
import Footer from '../../components/ui/Footer';
import Header from '../../components/ui/Header';
import HeroSection from '../../components/ui/Hero';
import Layout from '../../Layout';
import useStyles from "./CopyrightInfo.style"


export const CopyrightInfo = () => {
    const classes = useStyles();
    return (
      <Layout title={" Copyright information || Piktask"}>
        <Header />
  
        <HeroSection copyrightInfo size="medium" isSearch />
        <Spacing space={{ height: "5rem" }} />
        <Container>
          <div className={classes.termsWrapper}>
            <div>
              <div className={classes.guidLineTitle}>
                <Typography variant="h2">What we own : </Typography>
              </div>
              <Spacing space={{ height: "1rem" }} />
              <div className={classes.guidLineContent}>
                <Typography className={classes.description}>
                  We own all the Piktask content that we have put on Piktask. This
                  includes the design,Software,Website, Theme, Template,Idea,
                  Feelings, and look and feel of the Piktask sites, and copyright,
                  trademarks, designs and other intellectual property on Piktask.
                  We own all the Softwares, Application, logos, service marks and
                  trade names on Piktask site. You will not copy, distribute,
                  modify or make derivative works of any of our Piktask Content or
                  use any of our intellectual property in any way not expressly
                  stated in these terms.
                </Typography>
                <Spacing space={{ height: "3rem" }} />
                <div className={classes.guidLineTitle}>
                  <Typography variant="h2">Copyright : </Typography>
                </div>
                <Spacing space={{ height: "1rem" }} />
                <Typography className={classes.description}>
                  Copyright, trademark and intellectual property claims: We
                  respect the intellectual property rights of others and we tried
                  to develop our softwares and application based on others
                  company's property.If anybody see any issues or any propoerty
                  matches with your property then we will remove it.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
        <Spacing space={{ height: "4rem" }} />
        <Footer />
      </Layout>
    );
};

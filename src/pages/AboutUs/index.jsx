import { Container, Typography } from "@material-ui/core";
import React from "react";
import Spacing from "../../components/Spacing";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Layout from "../../Layout";
import useStyles from "./AboutUs.style";

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Header />
      <HeroSection aboutUs isSearch />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <div className={classes.supportWrapper}>
          <div>
            <div className={classes.supportTitle}>
              <Typography variant="h2">About Our Company</Typography>
            </div>
            <Spacing space={{ height: "1rem" }} />

            <div>
              <Typography className={classes.description}>
                Piktask is one of the leading Software Company in Bangladesh. At
                Piktask we work with cutting edge technology to support our
                clients and also bring the best quality product in the market.
                Currently, we have 7000 square feet well-decorated office with a
                cool working environment situated at B-25, Mannan Plaza, 4th
                Floor, Khilkhet Dhaka-1229. Just as we are very serious about
                our product quality, we also make sure every team member finds
                the working place as a place of comfort, fun and learning den.
                Since its inception, Piktask has played a major role in some of
                the largest IT projects in the country. Internationally, Piktask
                has established itself as a key player in the small enterprise
                solution with reasonable price even affordable to LDC (Least
                Developed Countries). Our diverse expertise extends beyond
                deployment to provide operational, maintenance, support and
                business outsourcing services. Our technology specialists have
                years of experience delivering successful solutions in different
                platform.
              </Typography>
              <Spacing space={{ height: "3rem" }} />
              <div className={classes.termsTitle}>
                <Typography variant="h2">Piktast Support </Typography>
              </div>
              <Spacing space={{ height: "2rem" }} />
              <Typography variant="h3">Personal Premium FAQs :</Typography>
              <Spacing space={{ height: "2rem" }} />

              <Typography variant="h3">
                1.Can I use the content for My Business?
              </Typography>
              <Spacing space={{ height: "1rem" }} />
              <Typography className={classes.description}>
                Yes, you can use piktask content for your business in digital
                marketing and media (Exposure Limit: up to 50,000 impressions;
                Print Limit: 50 copies) If the license entitlement for the
                Personal Premium Plan is not able to meet your needs, please
                refer to our Business Premium Plan.
              </Typography>
              <Spacing space={{ height: "2rem" }} />
              <Typography variant="h3">
                2.Can I use the content for My Clients?{" "}
              </Typography>
              <Spacing space={{ height: "1rem" }} />
              <Typography className={classes.description}>
                You can only custom work for one specific client. According to
                the principle of Single-seat License, if you want to create
                custom work for more than one client using piktask content, you
                will need to re-subscribe a new account for your principal's
                eligibility.
              </Typography>
              <Spacing space={{ height: "2rem" }} />
              <Typography variant="h3">
                3.Can I use the content in Social Media posts?
              </Typography>
              <Spacing space={{ height: "1rem" }} />
              <Typography className={classes.description}>
                Yes, you can use piktask content to create social media posts
                for sites like Facebook, Instagram, Twitter, etc., as a private
                user or for your own business. The exposure is limited to 50,000
                impressions.
              </Typography>
              <Spacing space={{ height: "2rem" }} />
              <Typography variant="h3">
                4.Can I use the content in YouTube videos?
              </Typography>
              <Spacing space={{ height: "1rem" }} />
              <Typography className={classes.description}>
                Yes, you can use piktask content to create your videos on
                YouTube, as a personal user or for your own business. The
                exposure is limited to 50,000 impressions.
              </Typography>
              <Spacing space={{ height: "2rem" }} />
              <Typography variant="h3">
                5.Can I use the content in blogs and websites?
              </Typography>
              <Spacing space={{ height: "1rem" }} />
              <Typography className={classes.description}>
                Yes, you are authorized to use Pikbest content for your own blog
                and website. This can be applied to support for the posts and
                contents that you publish, as long as our original and editable
                images are not redistributed. The exposure is limited to 50,000
                impressions.
              </Typography>
              <Spacing space={{ height: "2rem" }} />
              <Typography variant="h3">
                6.Can I use the content in Ready-to-Print files?
              </Typography>
              <Spacing space={{ height: "1rem" }} />
              <Typography className={classes.description}>
                At Pikbest you can find many templates to create invitations,
                flyers, business cards, posters, etc. For personal purposes,you
                can use these contents without any restriction, for example, as
                an invitation for your own wedding.
                <Spacing space={{ height: "1rem" }} />
                For commercial purposes, you are allowed to use a content for
                one specific client, but the same design cannot be offered to
                multiple clients. The offline printing is limited to 50 copies.
                <Spacing space={{ height: "1rem" }} />
                If the license entitlement for the Personal Premium Plan is not
                able to meet your needs, please refer to our Business Premium
                Plan.
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

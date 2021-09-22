import { Container, Typography } from "@material-ui/core";
import React from "react";
import Spacing from "../../components/Spacing";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Layout from "../../Layout";
import useStyles from "./LicenseAgreement.style";

export const LicenseAgreement = () => {
  const classes = useStyles();
  return (
    <Layout title={" License Agreement || Piktask"}>
      <Header />

      <HeroSection license size="medium" isSearch />
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
                <Typography variant="h2">License Description : </Typography>
              </div>
              <Spacing space={{ height: "1rem" }} />
              <Typography className={classes.description}>
                Piktask authorizes the User in a non-transferable, non-exclusive
                manner and on a worldwide basis for the duration of the relevant
                rights; to download, use and modify the Piktask Content, as
                expressly permitted by the applicable license and subject to
                this document. The licence is a single-seat license that
                authorizes only one natural person to download and use the
                content. No other person (including employees, colleagues) may
                use your account or use content authorized through your account.
                If you want to purchase authorized content for your principal,
                you will need to re-subscribe to a new account for your
                principal's eligibility. For the sake of clarity, if the user is
                in an employment relationship, the employer will be considered
                the licensee of the license.
                <br />
                The Piktask Authorization differs upon different situations.
                <br />
                1.If you are a Free User, you can utilize Piktask content only
                for personal use and you are required to indicate the source and
                attribute the author for using the content. <br />
                2.If you are a Personal Premium User, you are entitled a License
                of Individual Authorization. The Individual Authorization
                authorizes you to use Piktask Content in the following
                situations with limitations: I.Digital Marketing: online
                advertising, social media platform (e.g. Facebook, Instagram,
                Twitter, etc.), h5 page, email, e-card, sildes, electronic
                publications (e-books, e-magazines, blogs, etc.), third-party
                e-commerce platform. II.Online Media: video sharing services
                such as YouTube, Dailymotion, Vimeo, etc. III.Print: newspapers,
                ads on paper media, covers, flyers, posters, coupons, roll-ups,
                CD/DVD covers. Exposure Limit: Up to 50,000 impressions Print
                Limit: Up to 50 copies
                <br />
                3.If you are a Business Premium User, you are entitled a License
                of Business Authorization. The Business Authorization authorizes
                you to use Piktask content in the following situations with
                limitations based on the type of Business Premium Plan you
                purchase: I.Digital Marketing: online advertising, social media
                platform (e.g. Facebook, Instagram, Twitter, etc.), h5 page,
                email, e-card, slides, electronic publications (e-books,
                e-magazines, blogs, etc.), third-party e-commerce platform.
                II.Online Media: video sharing services such as YouTube,
                Dailymotion, Vimeo, etc. III.Print: newspapers, ads on paper
                media, covers, flyers, posters, coupons, roll-ups, CD/DVD
                covers. IV.Decoration (only applicable to Advanced and
                Enterprise Business Plan): 3D design, CAD drawing, interior
                design (e.g. home renovation renderings, brick surface drawings,
                etc.), home design (e.g. wall galleries, wallpaper, paintings,
                screens, etc.) V.Outdoor Advertising (only applicable to
                Enterprise Business Plan): buildings, auto ads, light boxes,
                window displays, signage banners, billboards, conventions,
                events, conferences, public places.
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

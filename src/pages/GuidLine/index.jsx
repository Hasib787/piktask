import { Container, Typography } from '@material-ui/core';
import React from 'react';
import AdminHeader from '../../admin/components/Header';
import Spacing from '../../components/Spacing';
import Footer from '../../components/ui/Footer';
import HeroSection from '../../components/ui/Hero';
import Layout from '../../Layout';
import useStyles from './guidLine.styles';
import GuidLineImage from "../../assets/banner/hans.jpg";

const GuidLine = () => {
  const classes = useStyles();
  return (
    <Layout title={"Guidline || Piktask"}>
      <AdminHeader />
      <Spacing space={{marginTop: "7rem"}} />
      <HeroSection
        size="medium"
        isSearch
        title="Piktask Guidline"
      />
      <Spacing space={{height: "3rem"}} />
      <Container>
        <div className={classes.guidLineWrapper}>
          <div>
            <div className={classes.guidLineImage}>
              <img src={GuidLineImage} alt="GuidLine_Image" />
            </div>
          </div>
          <div>
            <div className={classes.guidLineTitle}>
              <Typography variant="h1">Piktask Guidline</Typography>
            </div>
            <Spacing space={{height: "3rem"}} />
            <div className={classes.guidLineContent}>
              <Typography>
                All fonts used for the designs must be free for commercial use. The fonts can only be outlined in the following circumstances: - When the style and shape of the font is an essential part of the design. - In the case the font has an effect applied to it that does not allow the text to remain without being traced. - If the font is created by the same author as the design. Texts that do not fall into these categories must remain editable so our users are able to use them correctly.
              </Typography>
              <Spacing space={{height: "3rem"}} />
              <Typography>
                All fonts used for the designs must be free for commercial use. The fonts can only be outlined in the following circumstances: - When the style and shape of the font is an essential part of the design. - In the case the font has an effect applied to it that does not allow the text to remain without being traced. - If the font is created by the same author as the design. Texts that do not fall into these categories must remain editable so our users are able to use them correctly.
              </Typography>
              <Spacing space={{height: "3rem"}} />
              <Typography>
                All fonts used for the designs must be free for commercial use. The fonts can only be outlined in the following circumstances: - When the style and shape of the font is an essential part of the design. - In the case the font has an effect applied to it that does not allow the text to remain without being traced. - If the font is created by the same author as the design. Texts that do not fall into these categories must remain editable so our users are able to use them correctly.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
      <Spacing space={{height: "3rem"}} />
      <Footer />
    </Layout>
  );
};

export default GuidLine;
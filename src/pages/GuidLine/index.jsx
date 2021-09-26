import { Box, Container, Grid, Tab, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Spacing from '../../components/Spacing';
import Footer from '../../components/ui/Footer';
import HeroSection from '../../components/ui/Hero';
import Layout from '../../Layout';
import useStyles from './guidLine.styles';
import GuidLineImage from "../../assets/banner/hans.jpg";
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import Header from '../../components/ui/Header';

const GuidLine = () => {
  const classes = useStyles();
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout title={"Guidline || Piktask"}>
      <Header />
      <HeroSection
        size="medium"
        isSearch
        guidLine
      />
      <Spacing space={{height: "3rem"}} />
      <Container>
        <Grid className={classes.guidLineMenu}>
          <Box sx={{ width: '100%', typography: 'body1', }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center" }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Vector" value="1" />
                  <Tab label="PSD" value="2" />
                  <Tab label="Photo" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel centered value="3">
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
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Container>
      <Spacing space={{height: "3rem"}} />
      <Footer />
    </Layout>
  );
};

export default GuidLine;
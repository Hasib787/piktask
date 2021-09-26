import { Box, Container, Grid, Tab, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Spacing from '../../components/Spacing';
import Footer from '../../components/ui/Footer';
import HeroSection from '../../components/ui/Hero';
import Layout from '../../Layout';
import useStyles from './guidLine.styles';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import Header from '../../components/ui/Header';
import VectorImage from "../../assets/guidLine-Images/vector.jpg"
import PSDImage from "../../assets/guidLine-Images/psd.jpg"
import PhotoImage from "../../assets/guidLine-Images/photo.jpg"

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
              <Box sx={{ borderBottom: "2px solid #ddd", boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)", borderColor: 'divider', display: "flex", justifyContent: "center" }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab disableRipple label="Vector" value="1" />
                  <Tab disableRipple label="PSD" value="2" />
                  <Tab disableRipple label="Photo" value="3" />
                </TabList>
              </Box>
              <Spacing space={{height: "2rem"}} />
              <TabPanel value="1">
                <div className={classes.guidLineWrapper}>
                  <div className={classes.guidLineTitle}>
                    <Typography variant="h1">Vector guidelines</Typography>
                  </div>
                  <Spacing space={{height: "3rem"}} />
                  <div className={classes.guidLineContent}>
                    <Typography><span>1. TECHNICAL REQUIREMENTS</span></Typography>
                    <Typography><span>1.1 Technical requirements for the vector file:</span></Typography>
                    <Typography>
                      <span>1.2 Live tracing: </span>
                      Vectors designed using Live Trace are permitted as long as they are presented organized and tidy. Vectors made using a Live Trace that have not been cleaned up will not be accepted. The exception to this are high quality scanned images of watercolor, ink, grunge effects, etc. (the author must own the rights to the original image).
                    </Typography>
                    <Typography>
                      <span>1.3 Organizing layers: </span>
                      The layers must be arranged properly, using various layers if necessary. The names of each layer must be written correctly in English.
                    </Typography>
                    <Typography>
                      <span>1.4 Fonts: </span>
                      All fonts used for the designs must be free for commercial use. The fonts can only be outlined in the following circumstances: - When the style and shape of the font is an essential part of the design. - In the case the font has an effect applied to it that does not allow the text to remain without being traced. - If the font is created by the same author as the design. Texts that do not fall into these categories must remain editable so our users are able to use them correctly.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography><span>2. BAD PRACTICES</span></Typography>
                    <Typography>
                      <span>2.1 Rejected designs: </span>
                      Images that were rejected in a previous selection will not be accepted.
                    </Typography>
                    <Typography>
                      <span>2.2 Content associated with holidays and important dates: </span>
                      A resource is most visible when it has just been published. That is why the latest publications must take into account important holidays, festivities and events. Once the holiday is over, designs that reference this theme won’t be accepted until the date comes around again. FOR EXAMPLE: Halloween illustrations in November will not be accepted.
                    </Typography>
                    <Typography>
                      <span>2.3 Content that has already been published: </span>
                      It is not permitted to send in content that is already published on the website.
                    </Typography>
                    <Typography>
                      <span>2.4 Texts and languages: </span>
                      If the design contains messages or texts, it is preferable that these are in English. With the exception of messages relating to holidays or events of specific locations, countries or cultures.
                    </Typography>
                    <Typography>
                      <span>2.5 Social media: </span>
                      If the design contains social media logos, these must be updated. 2.6 USE OF FREEPIK CONTENT: Designs that contain elements that have already been published at Freepik, whether by the same author or (especially) by other authors, will not be accepted.
                    </Typography>
                    <Typography>
                      <span>2.7 Repetitions: </span>
                      Content that has been duplicated in various designs will not be accepted. A design is not considered different to another if all that has been modified is the position, the color or the size of the elements. Designs must have substantial differences between one another. It’s important that the designer makes sure they are not sending in duplicate content.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>2.8 Simple designs: </span>
                      Designs with only one element or elements that are too simple will not be accepted. In the case that the element is correct but too simple, it is recommended to present it in a themed pack with other similar designs.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>2.9 Updated dates: </span>
                      If the design contains a year (e.g. 2017), it will only be accepted if this coincides with the current year. In the case that year is coming to an end, designs will be accepted that include the following year.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography><span>3. LEGAL ISSUES AND RIGHTS</span></Typography>
                    <Typography>
                      <span>3.1 Plagiarism and copyright: </span>
                      Designs that are too similar to others in concept or technique will not be accepted. In the case a published design is thought to copy or plagiarize the content of another author, it will be removed immediately. This infraction is very severe and if committed by any user, the offer of collaboration may be finalized.
                    </Typography>
                    <Typography>
                      <span>3.2 Logos, trademarked brands and characters: </span>
                      Designs that contain logos or brands with Copyright will not be accepted. The same applies to designs containing fictional characters that are too similar to those registered by other companies. The only exception to this rule are social media icons.
                    </Typography>
                    <Typography>
                      <span>3.3 Fonts: </span>
                      All fonts used in the designs must be free for commercial use. The only exception are those fonts created by the author of the design.
                    </Typography>
                    <Typography>
                      <span>3.4 Editorial design and images with templates: </span>
                      Photos cannot be included in the the editable files. The photo may only be included in the design preview JPG shown on the website and it must be free for commercial use. In this case, the message IMAGE NOT INCLUDED must be displayed on the preview image.
                    </Typography>
                    <Typography>
                      If this message does not appear, the file will be rejected with the reason "MISSING IMAGE NOT INCLUDED".
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography><span>4. AESTHETIC REQUIREMENTS</span></Typography>
                    <Typography>
                      <span>4.1 Icons and pictograms: </span>
                      Icons and pictograms will only be accepted when they are presented as part of a collection and have some complexity regarding color, details, etc.
                    </Typography>
                    <Typography>
                      <span>4.2 Order and presentation: </span>
                      Packs and groups of elements should be tidy and well presented. The objects mustn’t be too close to the edges of the design. The distribution of the design’s elements should be carefully organized.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={VectorImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography><span>5. ETHICS</span></Typography>
                    <Typography>
                      <span>5.1 Sensitive themes: </span>
                      Designs containing violent, pornographic or sensitive content that we consider could in some way offend our users, will not be accepted.
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className={classes.guidLineWrapper}>
                  <div className={classes.guidLineTitle}>
                    <Typography variant="h1">PSD guidelines</Typography>
                  </div>
                  <Spacing space={{height: "3rem"}} />
                  <div className={classes.guidLineContent}>
                    <Typography><span>1. MOCKUPS</span></Typography>
                    <Typography>
                      <span>1.1 Technical requirements</span>
                    </Typography>
                    <Typography>
                      <span>Color mode: </span>
                      The color mode must be RGB. The accepted color profiles are SRGB and Adobe RGB.
                    </Typography>
                    <Typography>
                      <span>File size:  </span><br />
                      1,5 MB minimum <br />325 MB maximum
                    </Typography>
                    <Typography>
                      <span>Version: </span>
                      The accepted version of PSD is CC.
                    </Typography>
                    <Typography>
                      <span>Dimensions: </span>
                      The preview image (.jpg) must measure a maximum of 10000px and a minimum of 2000px (height or width) <br />The PSD file must be over 1.000 pixels (height or width) and less than 5.000 pixels (height or width)
                    </Typography>
                    
                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>1.2 Bad practices</span>
                    </Typography>
                    <Typography>
                      <span>Text: </span>
                      If the design contains messages or texts, these should preferably be in English. The exceptions are messages relating to holidays, festivities, or special events in specific countries or areas. 
                    </Typography>
                    <Typography>
                      <span>Preview image: </span>
                      The format of the preview image must be JPG. This image should include a design or a text in the area of the mockup that is meant to be replaced. Mockups that indicate the editable area using only color will not be accepted. 
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>Layers: </span>
                      Each editable element or object inside the file must have its own group or folder and be named accordingly. Inside this folder, it must be easy to identify the editable layer (highlighted with a color). The names of the layers and folders must be written correctly in English. <br />Each object must be inside a group, and everything must be named as the following:
                    </Typography>
                    <Typography>
                      <span>1.3 Recommendations</span>
                    </Typography>
                    <Typography>
                      <span>Editable background: </span>
                      An editable background adds more versatility to the file. Everything should be done to make the experience as easy as possible for the user. 
                    </Typography>
                    <Typography>
                      <span>Fonts: </span>
                      In case your PSD file has text, this must be editable. Also, please make sure it is a font free for commercial purposes. 
                    </Typography>
                    <Typography>
                      <span>Social Media: </span>
                      If the design contains social media logos, these must be updated.
                    </Typography>
                    <Typography>
                      <span>Brands: </span>
                      Any brand should be removed from the image before submitting the mockup (Apple, Samsung, Sony, etc.)
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <Typography>
                      <span>2. TEMPLATES</span>
                    </Typography>
                    <Typography>
                      <span>2.1 Technical requirements</span>
                    </Typography>
                    <Typography>
                      <span>Color mode: </span>
                      The color mode must be CMYK. The accepted color profile is COATED FOGRA 27.
                    </Typography>
                    <Typography>
                      <span>File size: </span>
                      250 MB maximum.
                    </Typography>
                    <Typography>
                      <span>Version: </span>
                      The accepted version of PSD is CC.
                    </Typography>
                    <Typography>
                      <span>Dimensions: </span>
                      The preview image (.jpg) must measure a maximum of 10000px and a minimum of 2000px (height or width). The size of the file depends on the product type: business card, corporate letterhead (A4), poster (A3), etc. The dimensions must correspond with international paper sizes.
                    </Typography>
                    <Typography>
                      <span>Resolution: </span>
                      The resolution must be a maximum of 300dpi and a minimum of 150dpi.
                    </Typography>
                    
                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>2.2 Bad practices </span>
                    </Typography>
                    <Typography>
                      <span>Preview image: </span>
                      The format of the preview image must be JPG. This image should resemble the final product as much as possible.
                    </Typography>
                    <Typography>
                      <span>Editorial design and images with templates: </span>
                      Photos cannot be included in the editable files. The photo may only be included in the design preview JPG shown on the website and it must be free for commercial use. In this case, the message IMAGE NOT INCLUDED must be displayed on the preview image.
                    </Typography>
                    
                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>Layers: </span>
                      The layers should be properly organized, and the names of these should be written correctly in English.
                    </Typography>
                    <Typography>
                      <span>Text: </span>
                      If the design contains messages or text, these should appear preferably in English.
                    </Typography>
                    <Typography>
                      <span>Social Media: </span>
                      If the design contains social media logos, these must be updated.
                    </Typography>

                    <Typography>
                      <span>2.3 Recommendations</span>
                    </Typography>
                    <Typography>
                      <span>Editable text: </span>
                      We recommend that any text that appears on the design should be editable, making the experience as easy as possible for the user.
                    </Typography>
                    <Typography>
                      <span>Colors: </span>
                      As the files are meant for print, we recommend using colors that won’t confuse the user, such as special inks, fluorescents or others that aren’t possible to distinguish when printed.
                    </Typography>
                    <Typography>
                      <span>Font size: </span>
                      The size of the font must correspond to the type of product. For example, a corporate letterhead (A4) shouldn’t contain text with a font above 12pt, except for titles.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <Typography>
                      <span>3. GRAPHIC ELEMENTS </span>
                    </Typography>
                    <Typography>
                      <span>3.1 Technical requirements</span>
                    </Typography>
                    <Typography>
                      <span>Color mode: </span>
                      The color mode must be RGB. Accepted color profiles are SRGB and Adobe RGB.
                    </Typography>
                    <Typography>
                      <span>Version: </span>The accepted PSD version is CC.
                    </Typography>
                    <Typography>
                      <span>File size: </span>250MB maximum
                    </Typography>
                    <Typography>
                      <span>Dimension: </span>
                      The preview image must be a JPG file and should be a minimum of 2000 pixels and a maximum of 10000 pixels (on any of its sides). The PSD file must be over 1000 pixels (height or width) and less than 5000 pixels (height or width).
                    </Typography>
                    <Typography>
                      <span>3.2 Bad practices</span>
                    </Typography>
                    <Typography>
                      <span>Individual elements: </span>
                      The elements that make up the image must be correctly cut out and separated into layers.
                    </Typography>
                    <Typography>
                      <span>Layers: </span>
                      The layers must be properly organized. Each element in the composition should be on its own layer along with a mask (when necessary).
                    </Typography>
                    <Typography>
                      <span>Texts: </span>Images containing text will not be accepted.
                    </Typography>
                    <Typography>
                      <span>Preview image: </span>
                      The format of the preview image must be JPG. It must be evident that the image is of one element or various elements that have been cut out. For this reason, the background of the image must be checkered.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PSDImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>3.3 Recommendations</span>
                    </Typography>
                    <Typography>
                      <span>Transparency: </span>
                      We recommend that the individual elements should be transparent so they can adjust to the applied background.
                    </Typography>
                    <Typography>
                      <span>Balanced  Composition: </span>
                      When including various elements in the same file, the composition should be clean and balanced, and the elements shouldn’t overlap over another.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <Typography>
                      <span>4. LEGAL ISSUES AND RIGHTS</span>
                    </Typography>
                    <Typography>
                      <span>Copyright: </span>
                      If the mockup includes an image, you must own the rights of it to be able to include it in the PSD file. If you don’t own the image, you must include a text indicating that this image is not included in the mockup.  
                    </Typography>
                    <Typography>
                      <span>Logos and Trademarks: </span>
                      Designs that contain any kind of logo or trademarked brand will not be accepted. This also applies to the brand, website or personal details of the mockup’s designer. The only exception to this is social media logos.
                    </Typography>
                    <Typography>
                      <span>Fonts: </span>The fonts used must be free for commercial use.
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div className={classes.guidLineWrapper}>
                  <div className={classes.guidLineTitle}>
                    <Typography variant="h1">Photo guidelines</Typography>
                  </div>

                  <div className={classes.guidLineContent}>
                    <Spacing space={{height: "3rem"}} />
                    <Typography>
                      <span>1. TECHNICAL REQUIREMENTS</span>
                    </Typography>
                    <Typography>
                      <span>1.1 File type: </span>
                      JPEG must be the format of the image and the compression, the lowest, so the photos can contain as much information as possible.
                    </Typography>
                    <Typography>
                      <span>1.2 Color profile: </span>
                      Accepted color profiles are: sRGB, Adobe RGB, Prophoto RGB or P3. The profile must be embedded in the photo.
                    </Typography>
                    <Typography>
                      <span>1.3 File size and dimensions: </span>
                      The weight of the file must be over 500 KB and its size must be above 2,000 pixels and below 10,000 pixels on any of its sides.
                    </Typography>
                    <Typography>
                      <span>1.4 Metadata: </span>
                      All images must have the title and tags included in the metadata. The metadata must be in English and the titles of the photos have to be unique. Tags attached to the image must correspond to the content of that image itself and not other images that have been included in the shooting. More information: How to tag a photo?
                    </Typography>
                    <Typography>
                      <span>1.5 Artifacts: </span>
                      Artifacts appear when an image is saved with a very low compression quality. In the examples below you can observe these artifacts as halos of light or flat color blocks. That is the reason why JPEG files must be saved with the lowest possible compresion.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>1.7 Sharpening: </span>
                      The use of digital sharpening should be reduced to a minimum. Abuse of the digital sharpening creates halos in the areas of high contrast. This excess of sharpening produces unwanted alterations in the image that will not be accepted.
                    </Typography>
                    
                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>1.9 Resize: </span>
                      Resizing images to meet the size requirements will not be accepted. This causes the reinvention of pixels and, as a consequence, it reduces the quality of the image.
                    </Typography>
                    
                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>2. AESTHETICS</span>
                    </Typography>
                    <Typography>
                      <span>2.1 Aspects to bear in mind:</span>
                    </Typography>
                    <Typography>
                      <span>• </span>Less is more. We are looking for simplicity; one concept per photo is preferred.
                    </Typography>
                    <Typography>
                      <span>• </span>The white balance should be harmonious, without aggressive dominants.
                    </Typography>
                    <Typography>
                      <span>• </span> Avoid, unless for the purpose of the composition, cutting off people or objects on the edges of the image.
                    </Typography>
                    <Typography>
                      <span>• </span>The depth of field should always relate to the message of the photo.
                    </Typography>
                    <Typography>
                      <span>• </span>Ethnic diversity is always an added value to the photo.
                    </Typography>
                    <Typography>
                      <span>2.2 Filters: </span>
                      Images that have an aggressive filter applied could be refused if this effect limits its later use. Filters must add to the meaning of the photo and not be the focus of the photo.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>2.3 Vignetting: </span>
                      Vignetting occurs when there is a decrease in brightness around the edges of a photo. This can be easily corrected during he editing process or, if wanted, the effect can also be increased until corners become white. You can even take it further and make the corners appear overexposed. This kind of vignetting is very obvious and although it can add to the style of the image, excessive vignetting may be considered poor taste.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>2.4 Dutch angle or tilting: </span>
                      Sometimes this inclination of the horizon can achieve an aesthetic value, but this is not always the case. Images that have been unintentionally tilted will not be accepted.
                    </Typography>
                    
                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>2.5 Electronic devices: </span>
                      If you are taking a photo of electronic devices, these must be updated or not have been on the market for more than two years. If it has a screen, it should show a photographer’s design or a flat color, mainly white or black.
                    </Typography>
                    
                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>3. BAD PRACTICES</span>
                    </Typography>
                    <Typography>
                      Repeated observance of these practices could have consequences and lead to the end of the collaboration agreement.
                    </Typography>
                    <Typography>
                      <span>3.1 Repeated images: </span>
                      Images that have already been sent in will not be accepted, whether they were selected for publication or not.
                    </Typography>
                    <Typography>
                      <span>3.2 Ethical issues: </span>
                      Photographs containing violent, pornographic or sensitive content that we consider could, in some way, offend our users will not be accepted.
                    </Typography>
                    <Typography>
                      <span>3.3 Using models without releases: </span>
                      The photos which include other people who are not the models of the photo and do not have a model release signed with the photographer, will not be accepted. Any person that appears in the photo must sign a model release with the photographer where they consent the commercial use of the photo(s) for third parties.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>3.4 Recycling images: </span>
                      Images that have been rotated, flipped or reframed will not be considered or original and will not be selected.
                    </Typography>

                    <Spacing space={{height: "3rem"}} />
                    <div className={classes.guidLineImageWrapper}>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                      <div className={classes.guidLineImage}>
                        <img src={PhotoImage} alt="GuidLine_Image" />
                      </div>
                    </div>
                    <Spacing space={{height: "3rem"}} />

                    <Typography>
                      <span>4. LEGAL ISSUES AND RIGHTS</span>
                    </Typography>
                    <Typography>
                      <span>4.1 Model release: </span>
                      The release for each person that appears in the images of the shooting must be included as evidence of their consent.
                    </Typography>
                    <Typography>
                      <span>4.2 Model release for under 18's: </span>
                      The parents or guardians of models under the age of 18, must sign a consent release that is to be included in the shooting.
                    </Typography>
                    <Typography>
                      <span>4.3 Property release: </span>
                      When the photo is taken on private property, a release must be included that authorizes the commercial use of the photos taken on the property by the owner. An example of this could be a zoo; photos can be allowed but using them commercially requires permission from the owner of the premises.
                    </Typography>
                    <Typography>
                      <span>4.4 Animals: </span>
                     We accept photos of wild animals as long as these are not put at risk in any way. Images of domestic pets require a property release of the owner to use these for commercial purposes.
                    </Typography>
                    <Typography>
                      <span>4.5 Money: </span>
                      It can be included as part of the image, but never flat, as if it had been scanned, and it should never appear whole.
                    </Typography>
                    <Typography>
                      <span>4.6 Vehicles: </span>
                      Vehicles may be used as long as they are not the main element in the photo.
                    </Typography>
                    <Typography>
                      <span>4.7 Isolated products: </span>
                      As a general rule, photos depicting an individual registered product, as the only or main element in the image, will not be accepted. Examples of this can be any electronic device, designer furniture or brand jewelry.
                    </Typography>
                    <Typography>
                      <span>4.8 Logos and trademarked brands: </span>
                      Designs that contain logos or brands with Copyright will not be accepted. The only exceptions to this rule are social media icons.
                    </Typography>
                    <Typography>
                      <span>4.9 Protected work: </span>
                      To make commercial use of a photo where copyrighted work appears as an important element, authorization is required from the author of the work. These are some examples of copyright protected work that requires permission for commercial use:
                    </Typography>
                    <Typography>
                      <span>• </span>Literary works (books, newspapers, catalogues y magazines).
                    </Typography>
                    <Typography>
                      <span>• </span>Artwork (caricatures, painting, sculpture, statues, architecture).
                    </Typography>
                    <Typography>
                      <span>• </span>Photography (photos, prints, posters).
                    </Typography>
                    <Typography>
                      <span>• </span>Maps, globes, navigation charts, graphs and technical drawings.
                    </Typography>
                    <Typography>
                      <span>• </span>Advertisements, posters, signs and labels.
                    </Typography>
                    <Typography>
                      <span>• </span>Moving pictures (films, documentaries and television commercials).
                    </Typography>
                    <Typography>
                      <span>• </span>Performing arts (dance, theatre, mime).
                    </Typography>
                    <Typography>
                      <span>• </span>pplied arts (jewelry, wallpaper, carpets, toys and textiles).
                    </Typography>
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

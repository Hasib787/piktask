import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import useStyles from "./ContributorPricePlan.styles";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pricePlanImage from "../../../assets/banner/profile-banner.jpg";
import Heading from "../../components/Heading";

const ContributorPricePlan = () => {
  const classes = useStyles();
  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 769
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Layout title="Contributor Price Plan || Piktask">
      <div className={classes.adminRoot}>
        {mobileView ? null : <Sidebar className={classes.adminSidebar} />}

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.pricePlanGridContainer}>
            <Heading tag="h2">Contributor Price Plan</Heading>
            <Spacing space={{height: "2rem"}} />
            <div>
              <Grid container spacing={2}>
                <Grid item sm={4} md={4} xs={12}>
                  <Card sx={{ maxWidth: 345 }}>
                    {/* <CardMedia
                      component="img"
                      height="194"
                      image="../../../assets/banner/profile-banner.jpg"
                      alt="Paella dish"
                    /> */}
                    <div className={classes.pricePlanImage}>
                      <img src={pricePlanImage} alt="" />
                    </div>
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                          Heat 1/2 cup of the broth in a pot until simmering,
                          add saffron and set aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                          Heat oil in a (14- to 16-inch) paella pan or a large,
                          deep skillet over medium-high heat. Add chicken,
                          shrimp and chorizo, and cook, stirring occasionally
                          until lightly browned, 6 to 8 minutes.
                        </Typography>
                        <Typography>
                          Set aside off of the heat to let rest for 10 minutes,
                          and then serve.
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
          <Spacing space={{ height: "2rem" }} />
          <Footer />
        </main>
      </div>
    </Layout>
  );
};

export default ContributorPricePlan;

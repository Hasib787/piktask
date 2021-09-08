import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/piktaskLogo.svg";
import useStyles from "./CopyRight.styles";
import heroBG from "../../../../assets/banner/frank-eiffert-2LjdRhVElBw-unsplash.jpg";

const CopyRight = () => {
  const classes = useStyles();

  return (
    <div 
      className={classes.copyrightWrapper}
      style={{
        backgroundImage: `url(${heroBG})`,
      }}
    >
      <Container className={classes.root}>
        <Grid className={classes.gridRoot}>
          <Grid item xs={12} sm={2} className={classes.logoWrapper}>
            <Link to="/">
              <img className={classes.logo} src={logo} alt="Piktask" />
            </Link>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography className={classes.copyRightText}>
              &copy; Piktask International Ltd. {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CopyRight;

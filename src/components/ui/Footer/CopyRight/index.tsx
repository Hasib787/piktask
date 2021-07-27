import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg";
import useStyles from "./CopyRight.styles";

const CopyRight = () => {
  const classes = useStyles();

  return (
    <div className={classes.copyrightWrapper}>
      <Container className={classes.root}>
        <Grid className={classes.gridRoot}>
          <Grid item xs={12} sm={2} className={classes.logoWrapper}>
            <Link to="/">
              <img className={classes.logo} src={logo} alt="Piktask" />
            </Link>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography className={classes.copyRightText}>
              &copy; Designhill International Ltd. {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CopyRight;

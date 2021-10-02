import { Button, Container, Typography } from "@material-ui/core";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import ContributorSignUp from "../../../admin/pages/ContributorSignUp";
import useStyles from "./CallToAction.styles";

const CallToAction = (props) => {
  const classes = useStyles();
  const {title, subtitle, buttonText, buttonLink, buttonClicked, uppercase, contributorJoinNow,} = props;
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
        <Typography className={classes.subtitle} variant="body1">
          {subtitle}
        </Typography>

        {contributorJoinNow ? (
          <Button
            className={classes.moreButton}
            style={{ textTransform: uppercase ? "uppercase" : "capitalize" }}
            onClick={() => setOpenAuthModal(true)}
          >
            {buttonText}
          </Button>
        ) : (
          <Link
            to={buttonLink && `${buttonLink}`}
            className={classes.moreButton}
            style={{ textTransform: uppercase ? "uppercase" : "capitalize" }}
            onClick={buttonClicked}
          >
            {buttonText}
          </Link>
        )}
      </Container>
      <ContributorSignUp
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
    </div>
  );
};

export default CallToAction;

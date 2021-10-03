import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import heroBG from "../../../assets/banner/lucas-wesney-s-y2HJElONo-unsplash.jpg";
import contributorBG from "../../../assets/banner/contributorBG.jpg";
import contributorLogo from "../../../assets/Logo/piktask-6.png";
import SearchKeyWords from "../SearchKeyWords";
import { Link } from "react-router-dom";
import SectionHeading from "../Heading";
import useStyles from "./Hero.styles";
import Search from "../Search";
import ContributorSignUp from "../../../admin/pages/ContributorSignUp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CustomPopper from "../CustomPopper";
import { useSelector } from "react-redux";

const HeroSection = (props) => {
  const classes = useStyles();
  const recentButtonRef = useRef();
  const anchorRef = useRef(null);
  const popularButtonRef = useRef();
  const {
    size,
    popularKeywords,
    creativeWorksDone,
    title,
    heroButton,
    isSearch,
    terms,
    copyrightInfo,
    license,
    cookiesPolicy,
    support,
    blogsTitle,
    guidLine,
    contact,
    contributorUser,
  } = props;

  // const user = useSelector((state) => state.user);
  const contributor = useSelector((state) => state.contributor);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [open, setOpen] = useState(false);

  // const [menuSate, setMenuSate] = useState({ mobileView: false });
  // const { mobileView } = menuSate;

  useEffect(() => {
    const recentImage = recentButtonRef?.current?.baseURI.split("/").pop();
    if (recentImage === "recent_images") {
      recentButtonRef?.current?.classList?.add("active");
    } else {
      popularButtonRef?.current?.classList?.add("active");
    }

    // const setResponsiveness = () => {
    //   return window.innerWidth < 576
    //     ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
    //     : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    // };

    // setResponsiveness();
    // window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };
  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };
  const handleListKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  return (
    <>
      {contributorUser ? (
        <div
          className={classes.contributorHero}
          style={{
            backgroundImage: `url(${contributorBG})`,
            minHeight: size === "large" ? "50rem" : "25rem",
          }}
        >
          <Container>
            <div className={classes.contributorMenu}>
              <Button
                className={classes.contributorLogo}
                component={Link}
                to="/"
              >
                <img src={contributorLogo} alt="contributorLogo" />
              </Button>

              {contributor && contributor?.isLogged ? (
                <div
                  className={classes.userAvatarArea}
                  onClick={handleToggle}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  ref={anchorRef}
                >
                  {contributor && contributor?.avatar ? (
                    <img
                      className={classes.avatar}
                      src={contributor?.avatar}
                      alt="UserPhoto"
                    />
                  ) : (
                    <AccountCircleIcon className={classes.avatar} />
                  )}
                  <ArrowDropDownIcon className={classes.arrowDown} />
                </div>
              ) : (
                <Button
                  className={classes.contributorLogin}
                  onClick={() => setOpenAuthModal(true)}
                >
                  Login or Join Now
                </Button>
              )}
            </div>
            <div>
              <div className={classes.contributorContent}>
                <Typography variant="h2">Become a Contributor</Typography>
                <Typography variant="h1">
                  Share your creations and earn money doing what you love
                </Typography>
                <Button
                  className={classes.joinNowBtn}
                  onClick={() => setOpenAuthModal(true)}
                >
                  JOIN NOW
                </Button>
              </div>
            </div>
          </Container>

          <ContributorSignUp
            openAuthModal={openAuthModal}
            setOpenAuthModal={setOpenAuthModal}
          />

          <CustomPopper
            open={open}
            handleToggle={handleToggle}
            anchorRef={anchorRef}
            handleClose={handleClose}
            handleListKeyDown={handleListKeyDown}
          />
        </div>
      ) : (
        <div
          className={classes.heroWrapper}
          style={{
            backgroundImage: `url(${heroBG})`,
            minHeight: size === "large" ? "30rem" : "15rem",
          }}
        >
          <Container>
            <div className={classes.contentWrapper}>
              {title && (
                <SectionHeading
                  title={title}
                  color="white"
                  center
                  size={size}
                />
              )}
              {terms && (
                <Typography
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                >
                  Terms And Condition
                </Typography>
              )}
              {copyrightInfo && (
                <Typography
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                  variant="h1"
                >
                  Copyright Information
                </Typography>
              )}
              {license && (
                <Typography
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                  variant="h1"
                >
                  License Agreement
                </Typography>
              )}
              {cookiesPolicy && (
                <Typography
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                  variant="h1"
                >
                  Cookies Policy
                </Typography>
              )}
              {support && (
                <Typography
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                  variant="h1"
                >
                  Support
                </Typography>
              )}
              {contact && (
                <Typography
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                  variant="h1"
                >
                  How can we help you?
                </Typography>
              )}
              {blogsTitle && (
                <Typography
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                  variant="h1"
                >
                  Piktask Blog
                </Typography>
              )}
              {guidLine && (
                <Typography
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                  variant="h1"
                >
                  Piktask GuidLine
                </Typography>
              )}

              {!isSearch && <Search />}
              <SearchKeyWords
                popularKeywords={popularKeywords}
                heroButton={heroButton}
                creativeWorksDone={creativeWorksDone}
              />
              {heroButton && (
                <div className={classes.heroButtonWrapper}>
                  <Button
                    ref={popularButtonRef}
                    className={classes.popularButton}
                    component={Link}
                    to="/"
                  >
                    Popular
                  </Button>
                  <Button
                    ref={recentButtonRef}
                    className={classes.recentButton}
                    component={Link}
                    to="/images/recent_images"
                  >
                    Recent
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default HeroSection;

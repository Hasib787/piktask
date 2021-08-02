import { AppBar, Button, Container, Grid, Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../../assets/author.png";
import crownIcon from "../../../assets/icons/crown.svg";
import logo from "../../../assets/piktaskLogo.svg";
import CustomPopper from "../../../components/ui/CustomPopper";
import useStyles from "./AdminHeader.styles";
import { useSelector } from "react-redux";

const AdminHeader = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const user = useSelector((state) => state.user);

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
      <AppBar position="fixed" className={classes.appbarHeader}>
        <div className={classes.fullwidth}>
          <Container classes={{ root: classes.root }}>
            <Grid
              container
              spacing={2}
              classes={{ container: classes.container }}
              alignItems="center"
            >
              <Grid item xs={2}>
                <Link to="/" className={classes.adminLogoLink}>
                  <img className={classes.adminLogo} src={logo} alt="Piktask" />
                </Link>
              </Grid>

              <Grid item xs={10} classes={{ item: classes.item }}>
                <div className={classes.headerInfo}>
                  <Typography className={classes.earningAmount} variant="h4">
                    UnpaiD Earning : $0.20
                  </Typography>
                  <Button
                    className={classes.uploadBtn}
                    component={Link}
                    to="/admin/upload"
                  >
                    <img
                      className={classes.ButtoncrownIcon}
                      src={crownIcon}
                      alt="Upload"
                    />
                    Upload
                  </Button>

                  <div
                    className={classes.userProfile}
                    onClick={handleToggle}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    ref={anchorRef}
                  >
                    {user && user?.avatar ? (
                      <img
                        className={classes.adminPhoto}
                        src={user.avatar}
                        alt="UserPhoto"
                      />
                    ) : (
                      <img
                        className={classes.adminPhoto}
                        src={userPhoto}
                        alt="UserPhoto"
                      />
                    )}
                    <Typography className={classes.userName} variant="h4">
                      {user ? user.username : "Design Studio"}
                    </Typography>
                    <ArrowDropDownIcon className={classes.arrowDown} />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>

        <CustomPopper
          open={open}
          handleToggle={handleToggle}
          anchorRef={anchorRef}
          handleClose={handleClose}
          handleListKeyDown={handleListKeyDown}
        />
      </AppBar>
    </>
  );
};

export default AdminHeader;

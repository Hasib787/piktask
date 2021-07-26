import {
  AppBar,
  Container,
  Button,
  Drawer,
  makeStyles,
  MenuItem,
  MenuList,
  Toolbar
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import React, {
  useEffect,
  useRef,
  useState
} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import crownIcon from "../../../assets/icons/crown.svg";
import logo from "../../../assets/piktaskLogo.png";
import CustomPopper from "../CustomPopper";
import DesktopMenu from "./DesktopMenu";
import useStyles from "./Header.styles";

const customStyles = makeStyles({
  menuWrapper: {
    top: "1.8rem",
    marginTop: 20,
    color: "#FFF",
    display: "flex",
    justifyContent: "space-between",
  },
  closeIconWrapper: {
    marginRight: "auto",
    padding: "1rem",
  },
  menuIcon: {
    fontSize: "4rem",
    cursor: "pointer",
    color: "#FFF",
  },
});

const Header = () => {
  const classes = useStyles();
  const iconClass = customStyles();

  const [open, setOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const user = useSelector(state => state.user);
  const anchorRef = useRef(null);

  const { mobileView } = menuSate;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClose = (e) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(e.target)
    ) {
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

  const handleMobileMenu = () => {
    setOpenMobileMenu(true);
  };

  return (
    <>
      <div className={classes.headerBottom}>
      <AppBar position="static">

      {mobileView ? (
        <Container>
          <div className={iconClass.menuWrapper}>
            <div>
              <Button
                component={Link}
                to="/"
                className={classes.logoWrapper}
                disableRipple
              >
                <img src={logo} className={classes.logo} alt="Dev" />
              </Button>
            </div>
            <div>
              <MenuIcon onClick={handleMobileMenu} className={iconClass.menuIcon} />
            </div>
          </div>
        </Container>
      ) : (
        <DesktopMenu />
      )}

      </AppBar>
      <CustomPopper
        open={open}
        handleToggle={handleToggle}
        anchorRef={anchorRef}
        handleClose={handleClose}
        handleListKeyDown={handleListKeyDown}
      />
    </div>

      <Drawer
        anchor="right"
        classes={{ paper: classes.paper }}
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
      >
        <div className={iconClass.closeIconWrapper}>
          <CloseIcon
            onClick={() => setOpenMobileMenu(false)}
            className={iconClass.menuIcon}
          />
        </div>
        <Toolbar disableGutters className={classes.menuWrapper}>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.mobileMenuLogo}
          >
            <img src={logo} alt="Piktask" />
          </Button>

          <MenuList className={classes.navItems}>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/vector">Vectors</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/photos">Photos</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/psd">PSD</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/png image">PNG Image</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/illustration">Illustration</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/templates">Templates</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/background">Background</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/3d models">3d Models</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/sell your content">Sell your content</Link>
            </MenuItem>
            <MenuItem
              onClick={() => setOpenMobileMenu(false)}
              classes={{ selected: classes.selected }}
            >
              <Link to="/help">Help</Link>
            </MenuItem>
          </MenuList>

          <Button
            component={Link}
            disableRipple
            to="/"
            className={classes.mobileBtn}
            onClick={() => setOpenMobileMenu(false)}
          >
            <img src={crownIcon} alt="Crown" />
            Premium
          </Button>
        </Toolbar>
      </Drawer>

      <CustomPopper
        open={open}
        handleToggle={handleToggle}
        anchorRef={anchorRef}
        handleClose={handleClose}
        handleListKeyDown={handleListKeyDown}
      />
    </>
  );
};

export default Header;

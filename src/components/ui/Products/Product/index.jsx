import {
  Button,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import downloadIcon from "../../../../assets/download.svg";
import crownIcon from "../../../../assets/icons/crown.svg";
import SignUpModal from "../../../../pages/Authentication/SignUpModal";
import {
  ButtonWrapper,
  CardFooter,
  CardWrapper,
  useStyles,
} from "./Product.styles";

const Product = ({ photo }) => {
  const classes = useStyles();
  const likeRef = useRef();
  // const history = useHistory();
  const user = useSelector((state) => state.user);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [likeUnlike, setLikeUnlike] = useState();

  const handleLikeUnlike = () => {};

  const handleClick = () => {
    if (!user.token) {
      setOpenAuthModal(true);
      // history.push("/login");
    } else if (!likeRef.current.className.includes("disabled")) {
      likeRef.current.classList.add("disabled");
    } else if (likeRef.current.classList.value.includes("disabled")) {
      likeRef.current.classList.remove("disabled");
    }
  };

  return (
    <>
      <CardWrapper className={classes.container}>
        <div className={classes.buttonsWrapper}>
          {photo?.item_for_sale === "sale" && (
            <IconButton
              disableRipple
              classes={{ root: classes.premiumIcon }}
              className={classes.iconBtn}
              title="Premium for Commercial Use"
            >
              <img src={crownIcon} alt="Premium" />
            </IconButton>
          )}

          <IconButton
            ref={likeRef}
            classes={{ root: classes.favouriteIcon }}
            className={classes.iconBtn}
            onClick={handleClick}
          >
            <FavoriteBorderIcon fontSize={"large"} />
          </IconButton>
        </div>

        <div className={classes.itemContainer}>
          <Link
            className={classes.singlePageLink}
            to={`/photo/${photo?.image_id}`}
          />
          <Link to={`/photo/${photo?.image_id}`}>
            <img className={classes.image} src={photo?.thumbnail} alt="" />
          </Link>
        </div>

        <div className={classes.itemFooter}>
          <CardContent className={classes.productTitle}>
            <Link
              className={classes.titleLink}
              to={`/photo/${photo?.image_id}`}
            >
              <Typography variant="h2" className={classes.title}>
                {photo?.title}
              </Typography>
            </Link>
          </CardContent>

          <CardContent className={classes.cardFooter}>
            <CardFooter>
              <Link to={`/author/${photo?.user_id}`}>
                {photo?.avatar ? (
                  <CardMedia
                    component="img"
                    className={classes.authorImage}
                    image={photo?.avatar}
                    title={photo?.name}
                  />
                ) : (
                  <AccountCircleIcon className={classes.authorImage} />
                )}
              </Link>

              <Typography
                paragraph
                className={classes.profileName}
                component={Link}
                to={`/author/${photo?.user_id}`}
              >
                {photo?.username}
              </Typography>
            </CardFooter>

            <Typography variant="body1" className={classes.itemStatus}>
              <img
                className={classes.downloadIcon}
                src={downloadIcon}
                alt="Total Download"
              />
              {photo?.total_download}
              <FavoriteBorderIcon className={classes.heartIcon} />{" "}
              {photo?.total_likes}
            </Typography>

            <ButtonWrapper>
              <Button
                className={classes.categoryButton}
                component={Link}
                to={`/photo/${photo?.image_id}`}
              >
                Download
              </Button>
            </ButtonWrapper>
          </CardContent>
        </div>
      </CardWrapper>
      <SignUpModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
    </>
  );
};

export default Product;

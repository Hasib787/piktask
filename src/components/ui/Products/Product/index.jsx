import {
  Button,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";
// import crownIcon from "../../../../assets/icons/crown.svg";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import downloadIcon from "../../../../assets/download.svg";
import { getBaseURL, getWords } from "../../../../helpers";
import SignUpModal from "../../../../pages/Authentication/SignUpModal";
import {
  ButtonWrapper,
  CardFooter,
  CardWrapper,
  useStyles,
} from "./Product.styles";

const Product = ({ photo = null }) => {
  const classes = useStyles();
  const likeRef = useRef();
  const user = useSelector((state) => state.user);

  const title = photo?.title;
  const titleLength = title?.split(" ");

  const [likeCount, setLikeCount] = useState(photo?.total_likes);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isLike, setLike] = useState(false);

  const handleLikeBtn = () => {
    if (!user.token) {
      setOpenAuthModal(true);
    } else if (user.id !== photo?.user_id && user.token) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/images/${photo?.image_id}/like`,
          {},
          { headers: { Authorization: user.token },}
        )
        .then(({ data }) => {
          if (data?.status) {
            setLike(true);
            setLikeCount((prevState) => prevState + 1);
          } else if (!data?.status) {
            toast.error(data.message);
            setLike(true);
          } else {
            console.log("Something wrong with the like");
          }
        });
    }
  };

  function pikTaskEncodeURI(data) {
    if (data) {
      // `/images/${photo?.title.replace(/ /g, "_")}&id=${photo?.image_id}`;

      return encodeURI(
        `/images/${data?.title.toLowerCase().replace(/\s/g , "-")}&id=${data?.image_id}`
      );
    }
  }

  return (
    <>
      <CardWrapper className={classes.container}>
        <div className={classes.buttonsWrapper}>
          {/* {photo?.item_for_sale === "sale" && (
            <IconButton
              disableRipple
              classes={{ root: classes.premiumIcon }}
              className={classes.iconBtn}
              title="Premium for Commercial Use"
              component={Link}
              to={`/subscription`}
            >
              <img src={crownIcon} alt="Premium" />
            </IconButton>
          )} */}

          {!photo?.isLike && !isLike ? (
            <IconButton
              ref={likeRef}
              classes={{ root: classes.favouriteIcon }}
              className={classes.iconBtn}
              onClick={handleLikeBtn}
            >
              <FavoriteBorderIcon fontSize={"large"} />
            </IconButton>
          ) : (
            <IconButton
              ref={likeRef}
              classes={{ root: classes.favouriteIconBtn }}
              className={classes.iconBtn}
              onClick={handleLikeBtn}
            >
              <FavoriteBorderIcon fontSize={"large"} />
            </IconButton>
          )}
        </div>

        {photo?.extension === "png" ? (
          <div className={classes.itemTransparent}>
            <Link to={pikTaskEncodeURI(photo)}>
              <img
                className={classes.image}
                src={encodeURI(getBaseURL().bucket_base_url + getBaseURL().images + photo?.preview)}
                alt="previewImage"
              />
            </Link>
          </div>
        ) : (
          <div className={classes.itemContainer}>
            <Link to={pikTaskEncodeURI(photo)}>
              <img
                className={classes.image}
                src={encodeURI(getBaseURL().bucket_base_url + getBaseURL().images + photo?.preview)}
                alt=""
              />
            </Link>
          </div>
        )}

        <div className={classes.itemFooter}>
          <CardContent className={classes.productTitle}>
            <Link
              className={classes.titleLink}
              to={pikTaskEncodeURI(photo)}
              title={photo.title}
            >
              <Typography variant="h2" className={classes.title}>
                {titleLength?.length > 7 ? (
                  <>{getWords(6, photo?.title)}...</>
                ) : (
                  <>{photo?.title}</>
                )}
              </Typography>
            </Link>
          </CardContent>

          <CardContent className={classes.cardFooter}>
            <CardFooter className={classes.cardAuthorInfo}>
              <Link
                to={`/author/${photo?.username}`}
                className={classes.avatar}
              >
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
                to={`/author/${photo?.username}`}
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
              <FavoriteBorderIcon className={classes.heartIcon} /> {likeCount}
            </Typography>

            <ButtonWrapper>
              <Button
                className={classes.categoryButton}
                component={Link}
                to={pikTaskEncodeURI(photo)}
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

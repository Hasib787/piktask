import {
  Button,
  CardContent,
  // CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import downloadIcon from "../../../../assets/download.svg";
import {
  ButtonWrapper,
  CardFooter,
  CardWrapper,
  useStyles,
} from "./Product.styles";

const Product = ({ photo }) => {
  const classes = useStyles();
  const likeRef = useRef();

  const handleClick = () => {
    if (!likeRef.current.className.includes("disabled")) {
      likeRef.current.classList.add("disabled");
    } else if (likeRef.current.classList.value.includes("disabled")) {
      likeRef.current.classList.remove("disabled");
    }
  };

  return (
    <CardWrapper className={classes.container}>
      {/* {photo.isPremium ? (
        <IconButton
          disableRipple
          classes={{ root: classes.premiumIcon }}
          title="Premium for Commercial Use"
        >
          <img src={crownIcon} alt="Premium" />
        </IconButton>
      ) : null} */}

      <IconButton
        ref={likeRef}
        classes={{ root: classes.favouriteIcon }}
        className="favourite"
        onClick={handleClick}
      >
        <FavoriteBorderIcon />
      </IconButton>

      <div className={classes.itemContainer}>
        <Link className={classes.singlePageLink} to={`/photo/${photo?.id}`} />
        <Button
          href={`${photo?.links?.download}?force=true`}
          disableRipple
          classes={{ root: classes.downloadItem }}
        >
          Download
        </Button>
        <Link to={`/photo/${photo?.id}`}>
          {/* <img className={classes.image} src={photo?.urls.regular} alt="" /> */}
          <img className={classes.image} src={"https://i.ibb.co/hsysXV4/luke-stackpoole-m-OEq-Otmu-PG8-unsplash.jpg"} alt="" />
        </Link>
      </div>

      <div className={classes.itemFooter}>
        <CardContent>
          <Link className={classes.titleLink} to={`/photo/${photo?.id}`}>
            <Typography variant="h2" className={classes.title}>
              {photo?.alt_description}
            </Typography>
          </Link>
          <Typography variant="body1" className={classes.itemStatus}>
            Download:{" "}
            <img
              className={classes.downloadIcon}
              src={downloadIcon}
              alt="Total Download"
            />{" "}
            {/* {photo?.total_downloads} */}
            /66
            <FavoriteBorderIcon className={classes.heartIcon} /> {photo?.likes}
          </Typography>
        </CardContent>

        <CardContent className={classes.cardFooter}>
          <CardFooter>
            {/* <CardMedia
              component="img"
              className={classes.authorImage}
              image={photo?.user.profile_image.medium}
              title={photo?.user.name}
            /> */}
            <Typography paragraph className={classes.profileName}>
              {photo.name}
            </Typography>
          </CardFooter>

          <ButtonWrapper>
            <Button className={classes.categoryButton}>
              <ArrowDownwardIcon className={classes.buttonIcon} />
              Vector
            </Button>
            <Button className={classes.productStatusButton}>Free</Button>
          </ButtonWrapper>
        </CardContent>
      </div>
    </CardWrapper>
  );
};

export default Product;

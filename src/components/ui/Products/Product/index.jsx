import {
  Button,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import downloadIcon from "../../../../assets/download.svg";
import crownIcon from "../../../../assets/icons/crownGreenIcon.svg";
import {
  ButtonWrapper,
  CardFooter,
  CardWrapper,
  useStyles,
} from "./Product.styles";

const Product = ({ product }) => {
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
      {product.isPremium ? (
        <IconButton
          disableRipple
          classes={{ root: classes.premiumIcon }}
          title="Premium for Commercial Use"
        >
          <img src={crownIcon} alt="Premium" />
        </IconButton>
      ) : null}

      <IconButton
        ref={likeRef}
        classes={{ root: classes.favouriteIcon }}
        className="favourite"
        onClick={handleClick}
      >
        <FavoriteBorderIcon />
      </IconButton>

      <div className={classes.itemContainer}>
        <Link
          className={classes.singlePageLink}
          to={`/${product.category.toLowerCase()}/${product._id}`}
        />
        <Button disableRipple classes={{ root: classes.downloadItem }}>
          Download
        </Button>
        <Link to={`/${product.category.toLowerCase()}/${product._id}`}>
          <img
            className={classes.image}
            src={product.image}
            alt={product.name}
          />
        </Link>
      </div>

      <div>
        <CardContent>
          <Link
            className={classes.titleLink}
            to={`/${product.category.toLowerCase()}/${product._id}`}
          >
            <Typography variant="h2" className={classes.title}>
              {product.name}
            </Typography>
          </Link>
          <Typography variant="body1" className={classes.itemStatus}>
            Download:{" "}
            <img
              className={classes.downloadIcon}
              src={downloadIcon}
              alt="Total Download"
            />{" "}
            {product.total_downloads}
            <FavoriteBorderIcon className={classes.heartIcon} /> {product.likes}
          </Typography>
        </CardContent>

        <CardContent className={classes.cardFooter}>
          <CardFooter>
            <CardMedia
              className={classes.authorImage}
              image={product.author.profile_image}
              title={product.author.name}
            />
            <Typography paragraph className={classes.profileName}>
              {product.author.profile_name}
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

import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './SellerInfo.styles';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import coverImage from "../../../../assets/banner/sellerCoverPhoto.jpg";

const SellerInfo = ({photo}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.sellerWrapper}>
        <div className={classes.sellerItem}>
          <Link to={`/${photo.username}`}>
            <div className={classes.sellerImage}>
              <div className={classes.sellerCoverImage}>
                {photo?.avatar ? (
                  <img
                    className={classes.coverImage}
                    src={photo?.avatar}
                    alt="author images"
                  />
                ) : (
                  <img
                    className={classes.coverImage}
                    src={coverImage}
                    alt="author images"
                  />
                )}
              </div>
              <div className={classes.sellerProfileImage}>
                {photo?.avatar ? (
                  <img
                    className={classes.profileImage}
                    src={photo?.avatar}
                    alt="author images"
                  />
                ) : (
                  <AccountCircleIcon className={classes.profileImage} />
                )}
              </div>
            </div>
          </Link>
          <div className={classes.sellerInfo}>
            <Typography variant="h2">{photo?.username}</Typography>
            {/* <Typography>Resources: {photo?.total_images}</Typography> */}
            <div className={classes.resourceDetails}>
              <Typography className={classes.infoItem} variant="body2">
                Resources
                <span>{photo?.total_images}</span>
              </Typography>
              <Typography className={classes.infoItem} variant="body2">
                Followers
                <span>{photo?.total_followers}</span>
              </Typography>
              <Typography className={classes.infoItem} variant="body2">
                Downloads
                <span>{photo?.total_downloads}</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerInfo;
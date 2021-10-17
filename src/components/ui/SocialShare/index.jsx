import { List, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./SocialShare.styles";
import facebookLogo from '../../../assets/icons/facebook-round.svg';
import instagramLogo from '../../../assets/icons/instagram-round.svg';
import twitterLogo from '../../../assets/icons/twitter-round.svg';


const SocialShare = ({ title, textCase, socialMedias, position, profileInfo }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
    >
      <Typography
        className={classes.title}
        style={{
          textTransform: textCase === "uppercase" ? "uppercase" : "capitalize",
        }}
      >
        {title}
      </Typography>

      <List>
        {profileInfo?.facebook && (
          <a href={profileInfo?.facebook} target="_blank">
            <img
              className={classes.socialIcon}
              src={facebookLogo}
              alt={facebookLogo}
            />
          </a>
        )}

        {profileInfo?.instagram && (
          <a href={profileInfo?.instagram} target="_blank">
            <img
              className={classes.socialIcon}
              src={instagramLogo}
              alt={instagramLogo}
            />
          </a>
        )}

        {profileInfo?.twitter && (
          <a href={profileInfo?.twitter} target="_blank">
            <img
              className={classes.socialIcon}
              src={twitterLogo}
              alt={twitterLogo}
            />
          </a>
        )}
      </List>

      <List>
        {socialMedias && socialMedias.map((media, index) => (
          <a key={index} href={media.url} target="_blank">
            <img
              className={classes.socialIcon}
              src={media.image}
              alt={media.name}
            />
          </a>
        ))}
      </List>
    </div>
  );
};

export default SocialShare;

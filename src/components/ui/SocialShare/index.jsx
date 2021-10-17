import { List, Typography, Link as MuiLink } from "@material-ui/core";
import React from "react";
import useStyles from "./SocialShare.styles";
import facebookLogo from "../../../assets/icons/facebook-round.svg";
import instagramLogo from "../../../assets/icons/instagram-round.svg";
import twitterLogo from "../../../assets/icons/twitter-round.svg";
import { Link } from "react-router-dom";

const SocialShare = ({
  title,
  textCase,
  socialMedias,
  position,
  profileInfo,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
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
            <MuiLink  href={profileInfo?.facebook} target="_blank">
              <img
                className={classes.socialIcon}
                src={facebookLogo}
                alt={facebookLogo}
              />
            </MuiLink>
        )}

        {profileInfo?.instagram && (
          <MuiLink href={profileInfo?.instagram} target="_blank">
            <img
              className={classes.socialIcon}
              src={instagramLogo}
              alt={instagramLogo}
            />
          </MuiLink>
        )}

        {profileInfo?.twitter && (
          <MuiLink href={profileInfo?.twitter} target="_blank">
            <img
              className={classes.socialIcon}
              src={twitterLogo}
              alt={twitterLogo}
            />
          </MuiLink>
        )}
      </List>

      <List>
        {socialMedias &&
          socialMedias.map((media, index) => (
            <Link key={index} to={media.url} target="_blank">
              <img
                className={classes.socialIcon}
                src={media.image}
                alt={media.name}
              />
            </Link>
          ))}
      </List>
    </div>
  );
};

export default SocialShare;

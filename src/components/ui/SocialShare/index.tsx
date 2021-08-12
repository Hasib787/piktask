import { List, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./SocialShare.styles";

type Media = {
  name: string;
  url: string;
  image: string;
};

type Props = {
  title: string;
  socialMedias: Media[];
  position?: string;
  textCase?: string;
};

const SocialShare = ({ title, socialMedias, textCase, position }: Props) => {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
      style={{
        justifyContent: position === "left" ? "flex-start" : "flex-start",
        display: "flex",
      }}
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
        {socialMedias.map((media: Media, index: number) => (
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

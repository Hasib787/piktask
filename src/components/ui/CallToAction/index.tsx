import { Container, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import useStyles from "./CallToAction.styles";

interface Props {
  title: string;
  subtitle: string;
  buttonLink?: any;
  buttonText?: string;
  uppercase?: boolean;
}

const CallToAction: FC<Props> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  uppercase,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
        <Typography className={classes.subtitle} variant="body1">
          {subtitle}
        </Typography>

        <Link
          to={`${buttonLink}`}
          className={classes.moreButton}
          style={{ textTransform: uppercase ? "uppercase" : "capitalize" }}
        >
          {buttonText}
        </Link>
      </Container>
    </div>
  );
};

export default CallToAction;

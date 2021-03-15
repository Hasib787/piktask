import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import useStyles from "./HectionHeading.styles";

type Props = {
  title: string;
  subtitle?: string;
  color?: string;
  children?: any;
  center?: boolean;
  size?: string;
};

const SectionHeading: FC<Props> = ({
  title,
  subtitle,
  color,
  children,
  center,
  size,
}) => {
  const primaryColor: string = "#1B3F4E";
  const classes = useStyles();
  const whiteColor: string = "#FFFFFF";

  return (
    <div
      className={classes.headingContainer}
      style={{
        flexDirection: center ? "column" : "row",
        padding:
          size === "large"
            ? "4.5rem 0"
            : size === "medium"
            ? ".5rem 0"
            : "4.5rem 0",
      }}
    >
      <div>
        <Typography
          className={classes.headingH1}
          variant="h1"
          style={{
            color: color === "white" ? whiteColor : primaryColor,
            textAlign: "left",
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            className={classes.headingSubtitle}
            variant="subtitle2"
            style={{
              color: color === "white" ? whiteColor : primaryColor,
              textAlign: "left",
            }}
          >
            {subtitle}
          </Typography>
        )}
      </div>

      {children}
    </div>
  );
};

export default SectionHeading;

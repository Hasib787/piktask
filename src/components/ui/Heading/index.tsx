import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import useStyles from "./Heading.styles";

type Props = {
  title?: string;
  color?: string;
  children?: any;
  center?: boolean;
  size?: string;
};

const SectionHeading: FC<Props> = (props) => {
  const { title, color, children, center, size } = props;

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
            ? "0 0 3rem"
            : size === "medium"
            ? ".5rem 0"
            : "0 0 3rem",
      }}
    >
      <div
        style={
          center
            ? {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }
            : undefined
        }
      >
        <Typography
          className={classes.headingH1}
          variant="h1"
          style={{
            color: color === "white" ? whiteColor : primaryColor,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </div>

      {children}
    </div>
  );
};

export default SectionHeading;

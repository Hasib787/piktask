import { Grid, Typography } from "@material-ui/core";
import React, { FC } from "react";
import useStyles from "./Heading.styles";

type Props = {
  title?: string;
  color?: string;
  children?: any;
  center?: boolean;
  size?: string;
  uppercase?: boolean;
};

const SectionHeading: FC<Props> = (props) => {
  const { title, color, children, center, size, uppercase } = props;

  const primaryColor: string = "#1B3F4E";
  const classes = useStyles();
  const whiteColor: string = "#FFFFFF";

  return (
    <Grid
      container
      spacing={2}
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
          variant="h2"
          style={{
            color: color === "white" ? whiteColor : primaryColor,
            textAlign: "center",
            textTransform: `${uppercase ? "uppercase" : "inherit"}`,
          }}
        >
          {title}
        </Typography>
      </div>

      {children}
    </Grid>
  );
};

export default SectionHeading;

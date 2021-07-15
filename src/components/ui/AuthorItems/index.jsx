import { Container, Grid, Tab, Tabs } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import Pagination from "../Pagination";
import Products from "../Products";
import useStyles from "./AuthorItems.styles";

type ItemTags = {
  id: string;
  name: string;
  amount: number;
};

const itemTags: ItemTags[] = [
  {
    id: "01",
    name: "Png Images",
    amount: 23,
  },
  {
    id: "02",
    name: "Templates",
    amount: 29,
  },
  {
    id: "03",
    name: "Art Font",
    amount: 204,
  },
  {
    id: "04",
    name: "Illustration",
    amount: 30,
  },
  {
    id: "05",
    name: "Backgrounds",
    amount: 354,
  },
];

const AuthorItems = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleActiveButton = (e: ChangeEvent<{}>, index: number) => {
    setValue(index);
  };

  const tabProps = (id: string) => {
    return {
      id,
      "aria-controls": `simple-tabpanel-${id}`,
    };
  };

  return (
    <Container>
      <Grid container className={classes.authorItemTags}>
        <Tabs
          value={value}
          onChange={handleActiveButton}
          aria-label="Author item count"
          classes={{
            root: classes.root,
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
          }}
        >
          {itemTags.length > 0 &&
            itemTags.map((tag) => (
              <Tab
                key={tag.id}
                label={`${tag.name} (${tag.amount})`}
                {...tabProps(tag.id)}
                className={classes.tagButton}
                classes={{ selected: classes.selected }}
              />
            ))}
        </Tabs>
      </Grid>

      <Products />
      <Pagination />
    </Container>
  );
};

export default AuthorItems;

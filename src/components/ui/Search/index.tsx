import { FormControl, Input, NativeSelect } from "@material-ui/core";
import React, { useRef } from "react";
import searchIcon from "../../../assets/search.svg";
import { categories } from "../../../data/demoData";
import useStyles from "./Search.styles";

const Search = () => {
  const classes = useStyles();
  const searchRef = useRef("");

  return (
    <>
      <FormControl className={classes.searchWrapper}>
        <Input
          fullWidth
          className={classes.inputield}
          id="search"
          aria-describedby="search-resources"
          placeholder="Search All Resources"
          disableUnderline
          ref={searchRef}
        />

        <FormControl>
          <NativeSelect className={classes.selectContainer} disableUnderline>
            <option value="" disabled>
              All Resources
            </option>
            {categories.length > 0 &&
              categories.map((category, index) => (
                <option key={index} value={index}>
                  {category}
                </option>
              ))}
          </NativeSelect>
        </FormControl>
        <div className={classes.searchIconWrapper}>
          <img className={classes.searchIcon} src={searchIcon} alt="Search" />
        </div>
      </FormControl>
    </>
  );
};

export default Search;

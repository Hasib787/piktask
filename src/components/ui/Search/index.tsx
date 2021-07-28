import { FormControl, Input, NativeSelect } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../../../assets/search.svg";
import { categories } from "../../../data/demoData";
import useStyles from "./Search.styles";

const Search = ({mobileView}: {mobileView: boolean}) => {
  const classes = useStyles();
  const searchRef = useRef("");

  const [search, setSearch] = useState();

  useEffect(() => {
    try {
      axios
      .get(`${process.env.REACT_APP_API_URL}/client/search/nature?collection_title=collection1&limit=10&page=1`)
      .then(({data}) => {
        if (data?.status) {
          setSearch(data);
        }
      })
    } catch (error) {
      console.warn("Search api error", error)
    }
  }, []);

  return (
    <>
      <FormControl className={classes.searchWrapper}>
        <Input
          fullWidth
          className={classes.inputField}
          id="search"
          aria-describedby="search-resources"
          placeholder="Search All Resources"
          disableUnderline
          ref={searchRef}
        />
        {
          !mobileView && 
          <FormControl>
            <NativeSelect className={classes.selectContainer} disableUnderline>
              <option value="">
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
        }
        
        <div className={classes.searchIconWrapper}>
          <img className={classes.searchIcon} src={searchIcon} alt="Search" />
        </div>
      </FormControl>
    </>
  );
};

export default Search;

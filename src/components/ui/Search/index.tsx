import { IconButton, Input, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useClickOutside } from "react-click-outside-hook";
import searchIcon from "../../../assets/search.svg";
import { useDebounce } from "../../../lib/hooks/debounceHook";
import useStyles from "./Search.styles";
import SearchItem from "./SearchItem";

const containerVariants = {
  expanded: {
    height: "30rem",
  },
  collapsed: {
    height: "3.9rem",
  },
};

const containerTransition = {
  type: "spring",
  damping: 22,
  stiffness: 150,
};

const Search = ({ mobileView }: { mobileView: boolean }) => {
  const classes = useStyles();
  const searchRef = useRef("");

  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [parentRef, isClickedOutside] = useClickOutside();

  const [noSearchResults, setNoSearchResults] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const isEmpty = !searchResults || searchResults.length === 0;

  const expandContainer = () => {
    setIsExpanded(true);
  };

  const collapseContainer = () => {
    setIsExpanded(false);
    setLoading(false);
    setSearchQuery("");
    setSearchResults([]);
    setNoSearchResults(false);

    if (searchRef.current) searchRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const prepareSearchQuery = (query: string) => {
    const url = `${process.env.REACT_APP_API_URL}/client/search/?title=${query}&limit=12`;

    return encodeURI(url);
  };

  const searchPhotos = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    setLoading(true);

    const URL = prepareSearchQuery(searchQuery);

    const response = await axios.get(URL).catch((err) => {
      console.log("Error", err);
    });

    if (response) {
      if (response.data && response.data.length === 0) setNoSearchResults(true);

      setSearchResults(response.data.results);
    }
    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchPhotos);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const loadCategories = () => {
    if (categories.length === 0) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories`)
        .then(({ data }) => {
          if (data?.status) {
            const sortedData = data?.categories.sort((a, b) => a.id - b.id);
            setCategories(sortedData);
          }
        })
        .catch((error) => console.log("Categories loading error: ", error));
    }
  };

  const borderStyles = {
    WebkitBorderBottomLeftRadius: isExpanded ? 0 : ".3rem",
    MozBorderRadiusBottomleft: isExpanded ? 0 : ".3rem",
  };

  return (
    <>
      <motion.div
        className={classes.searchWrapper}
        variants={containerVariants}
        transition={containerTransition}
        ref={parentRef}
      >
        <Input
          fullWidth
          className={classes.inputField}
          id="search"
          aria-describedby="search-resources"
          placeholder="Search All Resources"
          disableUnderline
          ref={searchRef}
          onFocus={expandContainer}
          style={borderStyles}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className={classes.closeIcon}
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={collapseContainer}
            >
              <IconButton>
                <CloseIcon />
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>

        {!mobileView && (
          <div>
            <TextField
              onClick={loadCategories}
              className={classes.selectContainer}
              variant="outlined"
              select
              onChange={handleCategory}
              SelectProps={{
                native: true,
              }}
            >
              {/* <option>Se</option> */}
              {categories.length ? (
                categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))
              ) : (
                <option>All Resources</option>
              )}
            </TextField>
          </div>
          // // <FormControl>
          // //   <Select
          // //     className={classes.selectContainer}
          // //     labelId="demo-simple-select-outlined-label"
          // //     id="demo-simple-select-outlined"
          // //     label="Age"
          // //   >
          // //     {categories.length !== 0 ? (
          // //       categories.map((category, index) => (
          // //         <MenuItem key={index} value={index}>
          // //           {category}
          // //         </MenuItem>
          // //       ))
          // //     ) : (
          // //       <MenuItem value="">All Resources</MenuItem>
          // //     )}
          // //   </Select>
          //   {/* <NativeSelect className={classes.selectContainer} disableUnderline>
          //     <option value="">All Resources</option>
          //     {categories.length !== 0 ? (
          //       categories.map((category, index) => (
          //         <option key={index} value={index}>
          //           {category}
          //         </option>
          //       ))
          //     ) : (
          //       <option value="">All Resources</option>
          //     )}
          //   // </NativeSelect> */}
          // // </FormControl>
        )}

        <div className={classes.searchIconWrapper}>
          <img className={classes.searchIcon} src={searchIcon} alt="Search" />
        </div>

        {isExpanded && (
          <div className={classes.searchResultWrapper}>
            <div className={classes.searchContent}>
              {/* Show this while typing */}
              {isLoading && (
                <div className={classes.loadingWrapper}>
                  <p>Loading...</p>
                </div>
              )}

              {!isLoading && isEmpty && !noSearchResults && (
                <div className={classes.loadingWrapper}>
                  <p>Start typing to search</p>
                </div>
              )}

              {!isLoading && noSearchResults && (
                <div className={classes.loadingWrapper}>
                  <p>No resources found</p>
                </div>
              )}

              {!isLoading && !isEmpty && (
                <>
                  {searchResults.map((item, index) => (
                    <SearchItem key={index} item={item} />
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Search;

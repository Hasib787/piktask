import {
  Button,
  ClickAwayListener,
  Grow,
  IconButton,
  Input,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
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
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

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

  const handleToggle = () => {
    console.log("anchorRef", anchorRef);

    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

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
          <>
            <Button
              ref={anchorRef}
              onClick={() => {
                handleToggle();
                loadCategories();
              }}
              className={classes.searchCats}
            >
              All Resources
              <div className={classes.searchBorder} />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper className={classes.categoryPaper}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="search-category-lists"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                        {categories.length !== 0 ? (
                          categories.map((category) => (
                            <MenuItem key={category.id} data-id={category.id}>
                              {category.name}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem value="">All Resources</MenuItem>
                        )}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
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

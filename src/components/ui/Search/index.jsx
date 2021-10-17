import {
  ClickAwayListener,
  Grow,
  IconButton,
  Input,
  MenuItem,
  Paper,
  Popper,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useDebounce } from "../../../lib/hooks/debounceHook";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import React, { useEffect, useRef, useState } from "react";
import { useClickOutside } from "react-click-outside-hook";
import { AnimatePresence, motion } from "framer-motion";
import searchIcon from "../../../assets/search.svg";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import useStyles from "./Search.styles";
import SearchItem from "./SearchItem";
import axios from "axios";
import { toast } from "react-toastify";

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

const Search = () => {
  const classes = useStyles();
  const history = useHistory();
  const searchRef = useRef("");
  const anchorRef = useRef("");

  const [searchCategoryName, setSearchCategoryName] = useState("All Resources");
  const [searchCategoryID, setSearchCategoryID] = useState("");
  const [parentRef, isClickedOutside] = useClickOutside();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const [noSearchResults, setNoSearchResults] = useState(false);
  const [openSearchCategory, SearchCategory] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const isEmpty = !searchResults || searchResults.length === 0;

  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;

  useEffect(() => {

    const setResponsiveness = () => {
      return window.innerWidth < 576
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const expandContainer = () => { setIsExpanded(true); };
  const handleSearchToggle = () => { SearchCategory((prevOpen) => !prevOpen); };
  const handleCloseCatSearch = () => { SearchCategory(false) };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef?.current.contains(e.target)) {
      return;
    }
    SearchCategory(false);
  };

  function handleListKeyDown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      SearchCategory(false);
    }
  }

  const collapseContainer = () => {
    setIsExpanded(false);
    setLoading(false);
    setSearchQuery("");
    setSearchResults([]);
    setSearchCategoryName("All Resources");
    setNoSearchResults(false);
    if (searchRef.current) searchRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const prepareSearchQuery = (query) => {
    let url;

    if (searchCategoryID) {
      url = `${process.env.REACT_APP_API_URL}/client/search/?title=${query}&category_id=${searchCategoryID}&limit=12`;
    } else {
      url = `${process.env.REACT_APP_API_URL}/client/search/?title=${query}&limit=12`;
    }

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

  const handleCategoryItem = (e) => {
    const categoryID = e.target.getAttribute("data-id");
    const textValue = e.target.textContent;
    setSearchCategoryName(textValue);
    setSearchCategoryID(categoryID);
  };

  const loadCategories = () => {
    if (categories.length === 0) {
      axios
      .get(`${process.env.REACT_APP_API_URL}/categories?limit=50`)
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
    MozBorderRadiusBottomLeft: isExpanded ? 0 : ".3rem",
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      toast.error("The search field is required");
      return
    };

    searchPhotos();
    setSearchQuery("");
    setIsExpanded(false);

    if(searchCategoryID) {
      history.push(`/search/title=${searchQuery}&category_id=${searchCategoryID}`);
    } else {
      history.push(`/search/title=${searchQuery}`);
    }
  };
  

  return (
    <>
      <form action="" autoComplete="off" onSubmit={handleSearch} className={classes.formSubmit}>
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
              <div className={classes.searchBorder} />
              <div
                ref={anchorRef}
                onClick={() => {
                  handleSearchToggle();
                  loadCategories();
                }}
                className={classes.searchCats}
              >
                <span>{searchCategoryName}</span>
                {openSearchCategory ? (
                  <ArrowDropUpIcon fontSize="large" />
                ) : (
                  <ArrowDropDownIcon fontSize="large" />
                )}
              </div>
              <Popper
                open={openSearchCategory}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                style={{ zIndex: 9999 }}
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
                        <ul
                          id="search-category-lists"
                          onKeyDown={handleListKeyDown}
                          className={classes.searchCatItem}
                        >
                          {categories.length !== 0 ? (
                            categories.map((category) => (
                              <li
                                key={category?.id}
                                data-id={category?.id}
                                className={classes.categoryList}
                                onClick={(e) => {
                                  handleCategoryItem(e);
                                  handleCloseCatSearch()
                                }}
                              >
                                {encodeURI(category?.name)}
                              </li>
                            ))
                          ) : (
                            <MenuItem value="">All Resources</MenuItem>
                          )}
                        </ul>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          )}

          <button type="submit" className={classes.searchIconWrapper}>
            <img className={classes.searchIcon} src={searchIcon} alt="Search" />
          </button>

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
                  <div onClick={collapseContainer}>
                    {searchResults.map((item, index) => (
                      <SearchItem key={index} item={item} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </form>
    </>
  );
};

export default Search;

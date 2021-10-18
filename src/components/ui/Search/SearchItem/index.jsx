// import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./SearchItem.styles";

const SearchItem = ({ item }) => {
  const classes = useStyles();
  

  return (
    <Link to={encodeURI(`/images/${item?.title.toLowerCase().replace(/\s/g , "-")}&id=${item?.image_id}`)} className={classes.searchItemWrapper}>
      <div className={classes.searchLeft}>
        <div className={classes.thumbnail}>
          <img src={encodeURI(item?.thumbnail)} alt={item?.title} />
        </div>
        <h2>{item?.title}</h2>
      </div>
      {/* <div className={classes.itemIcons}>
        <div>
          <CloudDownloadIcon fontSize="medium" />: {item.total_download}
        </div>
        <div>
          <FavoriteIcon fontSize="medium" />: {item.total_likes}
        </div>
      </div> */}
    </Link>
  );
};

export default SearchItem;

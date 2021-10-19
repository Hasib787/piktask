import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import Spacing from "../../Spacing";
import useStyles from "./Pagination.style";

const Paginations = (props) => {
  const classes = useStyles();
  // const [pageCount, setPageCount] = useState(1);

  const { count, pageCount, onChange } = props;

  return (
    <>
      <Spacing space={{ height: "3rem" }} />
      <div className={classes.pagination}>
        <Pagination
        //  setPageCount= {onChange={(value) => setPageCount(value)}}
        onChange={onChange}
          variant="outlined"
          shape="rounded"
          color="primary"
          size="medium"
          count={count}
          page={pageCount}

        />
      </div>
    </>
  );
};

export default Paginations;

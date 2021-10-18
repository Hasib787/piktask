import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import Spacing from "../../Spacing";
import useStyles from "./Pagination.style";

const Paginations = (props) => {
  const classes = useStyles();
  // const [pageCount, setPageCount] = useState(1);

  const { count, pageCount, setPageCount } = props;
  return (
    <>
      <Spacing space={{ height: "3rem" }} />
      <div className={classes.pagination}>
        <Pagination
        //  setPageCount= {onChange={(value) => setPageCount(value)}}
          variant="outlined"
          shape="rounded"
          color="primary"
          size="medium"
          count={count}
          pageCount={pageCount}
        />
      </div>
    </>
  );
};

export default Paginations;

import { 
  Button,
  Card, 
  CardContent, 
  FormControl, 
  Grid, 
  Paper, 
  Select, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/ui/Footer";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./Publish.styles";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
import { getWords } from "../../../helpers";
import { Link } from "react-router-dom";
import premiumFileSell from '../../../assets/icons/crownEnterpriseIcon.svg';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Publish = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  const [isLoading, setLoading] = useState(false);
  const [allPublishProduct, setAllPublishProduct] = useState([]);

  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;

  useEffect(() => {
    setLoading(true);

    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());


    // Author last file API
    if(user?.token){
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/earning/images?limit=20`,
      {
        headers: { Authorization: user.token },
      })
      .then(({data}) => {
        if(data?.status) {
          setAllPublishProduct(data?.images);
          setLoading(false);
        }
      })
    }
  }, [user.token]);

  
  // Date wise API integration

  // From
  const fromMonths = moment.months();
  let [fromYear, setFromYear] = useState(moment().year());
  let [fromMonth, setFromMonth] = useState(moment().format("MMMM"));
  let [fromCurrentDate, setFromCurrentDate] = useState(moment().date());

  
  // To
  const toMonths = moment.months();
  let [toYear, setToYear] = useState(moment().year());
  let [toMonth, setToMonth] = useState(moment().format("MMMM"));
  let [toCurrentDate, setToCurrentDate] = useState(moment().date());


  const getAllDays = () => {
    const days = [];
    for (let i = 0; i < moment().daysInMonth(); i++) {
      days.push(i + 1);
    }
    return days;
  };

  const getAllYears = () => {
    const years = [];
    for (let i = 1990; i <= moment().year(); i++) {
      years.push(i);
    }
    return years.sort((a, b) => b - a);
  };


  const handleDateSubmit = (e) => {
    e.preventDefault();

    let fromDateMonths = moment().month(fromMonth).format("M");
    if(fromDateMonths < 10){
      fromDateMonths = "0" + fromDateMonths;
    }
    if(fromCurrentDate < 10){
      fromCurrentDate = "0" + fromCurrentDate;
    }
    const fromDates = (fromYear + "-" + fromDateMonths + "-" + fromCurrentDate);

    let toDateMonths = moment().month(toMonth).format("M");
    if(toDateMonths < 10){
      toDateMonths = "0" + toDateMonths;
    }
    if(toCurrentDate < 10){
      toCurrentDate = "0" + toCurrentDate;
    }
    const toDates = (fromYear + "-" + toDateMonths + "-" + toCurrentDate);


     // Current date wise publish product
     if(user?.token){
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/earning/images/?start=${fromDates}&end=${toDates}`,
      {
        headers: {Authorization: user.token},
      })
      .then(({data}) => {
        if(data?.status){
          setAllPublishProduct(data?.images);
          setLoading(false);
        }
      })
    }

  };

  return (
    <Layout title={"Publish || Piktask"}>
      <div className={classes.adminRoot}>
        {mobileView ? null : <Sidebar productLength={allPublishProduct?.length} className={classes.adminSidebar} />}

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.publishFileWrapper}>
            <div className={classes.headingWrapepr}>
              <Heading tag="h2">Publish File</Heading>
            </div>

            <div className={classes.dateRanges}>
              <Typography className={classes.formTitle} variant="h4">
                Select Period
              </Typography>

              <div className={classes.statisticsFormWrapper}>
                <div className={classes.selectPeriodFrom}>
                  <div className={classes.fields}>
                    <Typography
                      className={classes.fieldTitle}
                      variant="subtitle1"
                    >
                      From
                    </Typography>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <InputLabel htmlFor="months" >Months</InputLabel> */}
                      <Select
                        native
                        value={fromMonth}
                        onChange={(e) => setFromMonth(e.target.value)}
                        inputProps={{
                          // name: 'age',
                          id: "months",
                        }}
                      >
                        {fromMonths.length > 0 &&
                          fromMonths.map((month, index) => (
                            <option key={month} value={month}>
                              {month}
                            </option>
                          ))}
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <InputLabel htmlFor="months" >Months</InputLabel> */}
                      <Select
                        native
                        value={fromCurrentDate}
                        onChange={(e) => setFromCurrentDate(e.target.value)}
                        inputProps={{
                          id: "date",
                        }}
                      >
                        {getAllDays().map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <InputLabel htmlFor="months" >Months</InputLabel> */}
                      <Select
                        native
                        value={fromYear}
                        onChange={(e) => setFromYear(e.target.value)}
                        inputProps={{
                          id: "year",
                        }}
                      >
                        {getAllYears().map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className={classes.fields}>
                    <Typography
                      className={classes.fieldTitle}
                      variant="subtitle1"
                    >
                      To
                    </Typography>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <InputLabel htmlFor="months" >Months</InputLabel> */}
                      <Select
                        native
                        value={toMonth}
                        onChange={(e) => setToMonth(e.target.value)}
                        inputProps={{
                          // name: 'age',
                          id: "months",
                        }}
                      >
                        {toMonths.length > 0 &&
                          toMonths.map((month, index) => (
                            <option key={month} value={month}>
                              {month}
                            </option>
                          ))}
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <InputLabel htmlFor="months" >Months</InputLabel> */}
                      <Select
                        native
                        value={toCurrentDate}
                        onChange={(e) => setToCurrentDate(e.target.value)}
                        inputProps={{
                          id: "date",
                        }}
                      >
                        {getAllDays().map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <InputLabel htmlFor="months" >Months</InputLabel> */}
                      <Select
                        native
                        value={toYear}
                        onChange={(e) => setToYear(e.target.value)}
                        inputProps={{
                          id: "year",
                        }}
                      >
                        {getAllYears().map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <Button onClick={(e) => handleDateSubmit(e)}  className={classes.showMoreBtn}>
                    View More
                  </Button>
                </div>
              </div>
            </div>

            <Grid
              container
              className={classes.publishGridContainer}
            >
              <Grid item xs={12} sm={12} md={12} className={classes.loaderItem}>
                <Card className={classes.cardRoot}>
                  <CardContent className={classes.productCard}>
                    <TableContainer
                      className={classes.tableContainer}
                      component={Paper}
                    >
                      <Table
                        className={classes.table}
                        aria-label="publish data table"
                      >
                        <TableHead>
                          <TableRow className={classes.tableHead}>
                            <TableCell className={classes.tableCell}></TableCell>
                            <TableCell style={{textAlign: "left"}} className={classes.tableCell}>
                              Title
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              Type
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              Like
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              Download
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              Earning
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              Date
                            </TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {allPublishProduct?.length > 0 && (
                            allPublishProduct?.map((product) => (
                              <TableRow
                                key={product?.id}
                                className={classes.tableRowContent}
                              >
                                <TableCell className={`${classes.tableCell} ${classes.authProductWrapper}`}>
                                  <Link to={`/photo/${product?.id}`}>
                                    <img
                                      className={classes.publishImg}
                                      src={product?.preview}
                                      alt={product?.preview}
                                    />
                                  </Link>
                                  
                                  {product?.item_for_sale === "sale" && (
                                    <div className={classes.premiumIcon}>
                                      <img src={premiumFileSell} alt="Premium Product" />
                                    </div>
                                  )}
                                </TableCell>
                                <TableCell style={{textAlign: "left"}} className={classes.tableCell}>
                                  {product?.title.split(" ").length > 4 ? (
                                    <>
                                    { getWords(4, product?.title)}...
                                    </>
                                  ) : (
                                    <>
                                      {product?.title}
                                    </>
                                  )}
                                </TableCell>
                                <TableCell className={classes.tableCell}>
                                  {product?.extension}
                                </TableCell>
                                <TableCell className={classes.tableCell}>
                                  {product?.total_likes}
                                </TableCell>
                                <TableCell className={classes.tableCell}>
                                  {product?.total_downloads}
                                </TableCell>
                                <TableCell className={classes.tableCell}>
                                  <AttachMoneyIcon />{product?.earn_per_image}
                                </TableCell>
                                <TableCell className={classes.tableCell}>
                                  {moment(product?.createdAt).format("LL")}
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <Footer />
        </main>
      </div>
    </Layout>
  );
};

export default Publish;

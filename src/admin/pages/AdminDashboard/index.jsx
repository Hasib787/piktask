import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import arrowDown from "../../../assets/dashboardicons/icon1.svg";
import moneyIcon from "../../../assets/dashboardicons/money.svg";
import box from "../../../assets/dashboardicons/box.svg";
import authorBadge from "../../../assets/badge.png";
import Footer from "../../../components/ui/Footer";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./admin.styles";
import React, { useEffect, useState } from "react";
import Layout from "../../../Layout";
import Blog from "../../../components/ui/Blog";
import { TopSeller } from "../../../components/ui/TopSeller";
import SectionHeading from "../../../components/ui/Heading";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import followerIcon from '../../../assets/icons/followerIcon.png';
import Spacing from "../../../components/Spacing";
import premiumFileSell from '../../../assets/icons/crownEnterpriseIcon.svg';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const AdminDashboard = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  const [isLoading, setLoading] = useState(false);
  const [topFiles, setTopFiles] = useState([]);
  const [authorFiles, setAuthorFiles] = useState([]);
  const [earnCurrentMonth, setEarnCurrentMonth] = useState({});
  const [earnPreviousMonth, setEarnPreviousMonth] = useState({});

  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 769
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  useEffect(() => {
    setLoading(true);

    // Author current month earning
    if(user?.token){
      var newDate = new Date();
      var firstDayCurrentMonth = new Date(newDate.getFullYear(), newDate.getMonth(), 2);
      var firstDay = firstDayCurrentMonth.toISOString().substring(0, 10);
      var todayCurrentMonth = newDate.toISOString().substring(0, 10);
      
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/dashboard/summery/?start=${firstDay}&end=${todayCurrentMonth}`,
      {
        headers: {Authorization: user.token},
      })
      .then(({data}) => {
        if(data?.status){
          setEarnCurrentMonth(data?.user_statistics);
          setLoading(false);
        }
      })
    }
    
    // Author previous month earning
    if(user?.token){
      var previousDate = new Date();
      var previousMonthFirstDay = new Date(previousDate.getFullYear(), previousDate.getMonth() - 1, 2);
      var previousFirstDays = previousMonthFirstDay.toISOString().substring(0, 10);
      
      const previousMonthLastDay = new Date(previousDate.getFullYear(), previousDate.getMonth(), 1);
      var previousFirstDay = previousMonthLastDay.toISOString().substring(0, 10);

      axios
      .get(`${process.env.REACT_APP_API_URL}/user/dashboard/summery/?start=${previousFirstDays}&end=${previousFirstDay}`,
      {
        headers: {Authorization: user.token},
      })
      .then(({data}) => {
        if(data?.status){
          setEarnPreviousMonth(data?.user_statistics);
          setLoading(false);
        }
      })
    }

    // Author last file API
    if(user?.token){
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/earning/images?limit=5`,
      {
        headers: { Authorization: user.token },
      })
      .then(({data}) => {
        if(data?.status) {
          setAuthorFiles(data?.images);
          setLoading(false);
        }
      })
    }

    // Piktask top file API 
    if(user?.token){
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/dashboard/top_files?limit=5`,
      {
        headers: { Authorization: user.token },
      })
      .then(({data}) => {
        if(data?.status) {
          setTopFiles(data?.images);
          setLoading(false);
        }
      })
    }

  }, [user.token])


  return (
    <Layout title={`Dashboard || Piktask`}>
      <div className={classes.adminRoot}>
        {mobileView ? null : <Sidebar className={classes.adminSidebar} />}

        <main className={classes.content}>
            <AdminHeader />
          <div className={classes.dashboardGridContainer}>
            <div className={classes.totalStatus}>
              <Heading tag="h2">Current Month</Heading>
              <Button 
                className={classes.loadMoreBtn}
                component={Link}
                to={`/admin/earnings`}
              >More status</Button>
            </div>
            <Grid container>
              <Grid item xs={6} sm={6} md={3} className={classes.loaderItem}>
                <CardContent className={classes.statisticsContent}>
                  <div className={`${classes.arrowIcon} ${classes.statisticsIcon}`} >
                    <img src={moneyIcon} alt="Money" />
                  </div>
                  <Typography className={classes.totalCount} variant="h1">
                    {earnCurrentMonth?.total_earning}
                    <span>Earning</span>
                  </Typography>
                  <Typography className={classes.lastTotalCount}>
                      Last month: {earnPreviousMonth?.total_earning}
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item xs={6} sm={6} md={3} className={classes.loaderItem}>
                <CardContent className={classes.statisticsContent}>
                  <div className={`${classes.arrowIcon} ${classes.statisticsIcon}`} >
                    <img src={arrowDown} alt="Download" />
                  </div>
                  <Typography className={classes.totalCount} variant="h1">
                    {earnCurrentMonth?.total_downloads}
                    <span>Download</span>
                  </Typography>
                  <Typography className={classes.lastTotalCount}>
                    Last month: {earnPreviousMonth?.total_downloads}
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item xs={6} sm={6} md={3} className={classes.loaderItem}>
                <CardContent className={classes.statisticsContent}>
                  <div className={`${classes.arrowIcon} ${classes.statisticsIcon}`} >
                    <img src={followerIcon} alt="followerIcon" />
                  </div>
                  <Typography className={classes.totalCount} variant="h1">
                    {earnCurrentMonth?.total_follower}
                    <span>Follower</span>
                  </Typography>
                  <Typography className={classes.lastTotalCount}>
                    Last month: {earnPreviousMonth?.total_follower}
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item xs={6} sm={6} md={3} className={classes.loaderItem}>
                <CardContent className={classes.statisticsContent}>
                  <div
                    className={`${classes.arrowIcon} ${classes.statisticsIcon}`}
                  >
                    <img src={box} alt="Products" />
                  </div>
                  <Typography className={classes.totalCount} variant="h1">
                    {earnCurrentMonth?.total_image}
                    <span>Files</span>
                  </Typography>
                  <Typography className={classes.lastTotalCount}>
                    Last month: {earnPreviousMonth?.total_image}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </div>

          {/* Map & country wise earning statistics */}
          <Grid
            container
            className={classes.dashboardGridContainer}
          >
            <Grid item xs={12} sm={12} md={6} className={classes.loaderItem}>
              <Card className={classes.cardRoot}>
                <CardContent className={classes.authorCard}>
                  <div className={classes.cardHeading}>
                    <Heading tag="h2">Your Last File's</Heading>
                    <Button 
                      className={classes.loadMoreBtn}
                      component={Link}
                      to={`/admin/publish`}
                    >
                      Load more
                    </Button>
                  </div>
                  <TableContainer
                    className={classes.tableContainer}
                    component={Paper}
                  >
                    <Table
                      className={classes.table}
                      aria-label="earning data table"
                    >
                      <TableHead>
                        <TableRow className={classes.tableHead}>
                          <TableCell className={classes.tableCell}></TableCell>
                          <TableCell className={classes.tableCell}>
                            Type
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            Download
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            Earning
                          </TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {authorFiles?.map((authLastFile) => (
                          <TableRow
                            key={authLastFile?.id}
                            className={classes.tableRowContent}
                          >
                            <TableCell className={`${classes.tableCell} ${classes.authProductWrapper}`}>
                              <Link to={`/images/${authLastFile?.title.replace(/ /g, "_")}&id=${authLastFile?.id}`}>
                                <img
                                  className={classes.earningImg}
                                  src={authLastFile?.preview}
                                  alt={authLastFile?.preview}
                                />
                              </Link>
                              
                              {authLastFile?.item_for_sale === "sale" && (
                                <div className={classes.premiumIcon}>
                                  <img src={premiumFileSell} alt="Premium Product" />
                                </div>
                              )}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              {authLastFile?.extension}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              {authLastFile?.total_downloads}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              <AttachMoneyIcon />{authLastFile?.earn_per_image}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} className={classes.loaderItem}>
              <Card className={classes.cardRoot}>
                <CardContent className={classes.authorCard}>
                  <div className={classes.cardHeading}>
                    <Heading style={{padding: "0.4rem 0rem"}} tag="h2">Piktask Top File's</Heading>
                  </div>

                  <TableContainer
                    className={classes.tableContainer}
                    component={Paper}
                  >
                    <Table
                      className={classes.table}
                      aria-label="earning data table"
                    >
                      <TableHead>
                        <TableRow className={classes.tableHead}>
                          <TableCell className={classes.tableCell}></TableCell>
                          <TableCell className={classes.tableCell}>
                            Type
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            Downloads
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            Author
                          </TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {topFiles?.map((topFile) => (
                          <TableRow
                            key={topFile?.id}
                            className={classes.tableRowContent}
                          >
                            <TableCell className={`${classes.tableCell} ${classes.authProductWrapper}`}>
                              <Link to={`/images/${topFile?.title.replace(/ /g, "_")}&id=${topFile?.id}`}>
                                <img
                                  className={classes.earningImg}
                                  src={topFile?.thumbnail}
                                  alt={topFile?.thumbnail}
                                />
                              </Link>
                              {topFile?.item_for_sale === "sale" && (
                                <div className={classes.premiumIcon}>
                                  <img src={premiumFileSell} alt="Premium Product" />
                                </div>
                              )}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              {topFile?.extension}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              {topFile?.total_downloads}
                            </TableCell>
                            <TableCell
                              className={`${classes.tableCell} ${classes.authorImgWrapper}`}
                            >
                              <Link to={`/${topFile?.username}`}>
                                <img
                                  className={classes.authorImg}
                                  src={topFile?.avatar}
                                  alt="Author"
                                />
                              </Link>
                              <img
                                className={classes.bestAuthorBadge}
                                src={authorBadge}
                                alt="Badge"
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Spacing space={{height: "2rem"}} />

          <Container>
            <SectionHeading title="Top Selling Author" large>
              <Button
                className={classes.headingButton}
                component={Link}
                to="/sellers"
              >
                See More
              </Button>
            </SectionHeading>
          </Container>
          <TopSeller adminDashBoard />
          <Blog />
          <Footer />
        </main>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

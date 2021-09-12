import {
  Button,
  Card,
  FormControl,
  Grid,
  Paper,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@material-ui/core";
import Chart from "chart.js";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import image3 from "../../../assets/bangladesh.png";
import image1 from "../../../assets/brazil.png";
import image4 from "../../../assets/india.png";
import image2 from "../../../assets/japan.png";
import Footer from "../../../components/ui/Footer";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./EarningManagement.styles";
import TabPanel from "./TabPanel";

const rows = [
  {
    id: 1,
    image: image1,
    location: "Brazil",
    earning: 0.2,
    date: "31-1-2021",
  },
  {
    id: 2,
    image: image2,
    location: "Bangladesh",
    earning: 0.4,
    date: "31-1-2021",
  },
  {
    id: 3,
    image: image3,
    location: "Japan",
    earning: 0.35,
    date: "31-1-2021",
  },
  {
    id: 4,
    image: image4,
    location: "India",
    earning: 0.6,
    date: "31-1-2021",
  },
];

const EarningManagement = () => {
  const classes = useStyles();
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().format("MMMM"));
  const [currentDate, setCurrentDate] = useState(moment().date());
  const [earningData, setEarningData] = useState(0);
  const [onClickEvent, setOnClickEvent] = useState(true);
  const months = moment.months();
  const refChart = useRef();

  useEffect(() => {
    const canvasID = refChart.current;

    new Chart(canvasID, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Earning",
            backgroundColor: "#2195F2",
            borderColor: "#2195F2",
            fill: false,
            data: [10, 30, 39, 20, 25, 34, -10, 28, 69, 97, 321],
          },
          {
            label: "Download",
            backgroundColor: "#E74F82",
            borderColor: "#E74F82",
            fill: false,
            data: [18, 33, 22, 19, 11, 39, 30],
          },
          {
            label: "Premium",
            backgroundColor: "#8665C1",
            borderColor: "#8665C1",
            fill: false,
            data: [13, 43, 62, 29, 17, 31, 60],
          },
          {
            label: "Free",
            backgroundColor: "#180F27",
            borderColor: "#180F27",
            fill: false,
            data: [28, 23, 12, 39, 51, 69, 70],
          },
        ],
      },
      options: {
        indexAxis: "y",
        showLine: true,
        spanGaps: true,
        legend: {
          labels: {
            fontColor: "#788F9B",
            fontSize: 15,
            boxWidth: 10,
            boxHeight: 5,
          },
        },
        scales: {
          y: {
            stacked: true,
          },
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              type: "logarithmic",
              gridLines: {
                display: false,
              },
              ticks: {
                suggestedMin: 10,
                suggestedMax: 50,
              },
              // stacked: true
            },
          ],
        },
      },
    });
  }, [onClickEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e, newValue) => {
    setEarningData(newValue);
  };

  const getAllDays = () => {
    const days = [];
    for (let i = 0; i < moment().daysInMonth(); i++) {
      days.push(i + 1);
    }
    return days;
  };

  const getAllYears = () => {
    const years = [];
    for (let i = 1970; i <= moment().year(); i++) {
      years.push(i);
    }
    return years.sort((a, b) => b - a);
  };

  const selectData = (index) => {
    return {
      id: `earnin-tab-${index}`,
      "aria-controls": `earning-tabpanel-${index}`,
    };
  };

  return (
    <Layout title={"Earning Management || Piktask"}>

      <div className={classes.adminRoot}>
        <Sidebar />

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.headingWrapepr}>
            <Heading tag="h2">Earning Management</Heading>
          </div>

          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Card className={classes.cardWrapper}>
                <div className={classes.graphBox}>
                  <div className={classes.amount}>2.54$</div>
                  <span className={classes.title}>Current Earning</span>
                  <span className={classes.duration}>Last month: 1.45</span>
                </div>
                <div className={classes.graphBox}>
                  <span
                    className={`${classes.amount} ${classes.totalEarningColor}`}
                  >
                    255.00$
                  </span>
                  <span className={classes.title}>Total Earning</span>
                  <span className={`${classes.duration} ${classes.bgColor2}`}>
                    Last month: 1.45
                  </span>
                </div>
                <div className={classes.graphBox}>
                  <span
                    className={`${classes.amount} ${classes.paidDownloadColro}`}
                  >
                    255.00$
                  </span>
                  <span className={classes.title}>Paid Download</span>
                  <span className={`${classes.duration} ${classes.bgColor3}`}>
                    Last month: 1.45
                  </span>
                </div>
                <div className={classes.graphBox}>
                  <span
                    className={`${classes.amount} ${classes.freeDownloadColor}`}
                  >
                    652:00k
                  </span>
                  <span className={classes.title}>Free Download</span>
                  <span className={`${classes.duration} ${classes.bgColor4}`}>
                    Last month: 1.45
                  </span>
                </div>
                <div className={classes.graphBox}>
                  <span
                    className={`${classes.amount} ${classes.totalDownloadColor}`}
                  >
                    258.00k
                  </span>
                  <span className={classes.title}>Total Download</span>
                  <span className={`${classes.duration} ${classes.bgColor5}`}>
                    Last month: 1.45
                  </span>
                </div>
              </Card>
            </Grid>
          </Grid>

          <div>
            <Typography className={classes.formTitle} variant="h4">
              Select Period
            </Typography>

            <div className={classes.statisticsFormWrapper}>
              <form onClick={handleSubmit} className={classes.selectPeriodFrom}>
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
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      inputProps={{
                        // name: 'age',
                        id: "months",
                      }}
                    >
                      {months.length > 0 &&
                        months.map((month, index) => (
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
                      value={currentDate}
                      onChange={(e) => setCurrentDate(e.target.value)}
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
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
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
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      inputProps={{
                        // name: 'age',
                        id: "months",
                      }}
                    >
                      {months.length > 0 &&
                        months.map((month, index) => (
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
                      value={currentDate}
                      onChange={(e) => setCurrentDate(e.target.value)}
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
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
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

                <Button className={classes.statisticsBtn}>
                  Display Statistics
                </Button>
              </form>
            </div>
            {/* End Statistics form */}

            <Tabs
              value={earningData}
              onChange={handleChange}
              aria-label="Earning Chart"
              className={classes.tabsBtnWrapper}
              classes={{ indicator: classes.indicator }}
            >
              <Tab
                label="Earning Line"
                {...selectData(0)}
                onClick={() => setOnClickEvent(!onClickEvent)}
                className={`${classes.earningBtn} ${classes.earningGreenBtn}`}
              />
              <Tab
                label="Earning Table"
                {...selectData(1)}
                className={`${classes.earningBtn} ${classes.earningGrayBtn}`}
              />
            </Tabs>

            <TabPanel value={earningData} index={0}>
              <canvas
                id="earningChart"
                ref={refChart}
                width="600"
                height="200"
              ></canvas>
            </TabPanel>

            <TabPanel value={earningData} index={1}>
              <Grid item xs={12} className={classes.earningDataWrapper}>
                <div className={classes.sellerEarningTableWrapper}>
                  <Typography variant="h2">
                    Top Sellers Earning Table
                  </Typography>
                  <Button className={classes.downloadTableBtn}>
                    Download Table
                  </Button>
                </div>
                <TableContainer
                  className={classes.tableContainer}
                  component={Paper}
                >
                  <Table
                    className={`${classes.table} ${classes.dataTableCard}`}
                    aria-label="Product data table"
                  >
                    <TableHead>
                      <TableRow className={classes.earningSellingTableHead}>
                        <TableCell
                          className={`${classes.sellingTableCellHead}`}
                        >
                          Date
                        </TableCell>
                        <TableCell
                          className={`${classes.sellingTableCellHead}`}
                        >
                          Total Earning
                        </TableCell>
                        <TableCell
                          className={`${classes.sellingTableCellHead}`}
                        >
                          Premium Earning
                        </TableCell>
                        <TableCell
                          className={`${classes.sellingTableCellHead}`}
                        >
                          Free Earning
                        </TableCell>
                        <TableCell
                          className={`${classes.sellingTableCellHead}`}
                        >
                          Total Download
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {/* <tr style={{display: "block", marginTop: "2rem"}}></tr> */}
                      <TableRow className={classes.tableRowContent}>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          1/1/2020
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          30k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          20k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          5k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          9
                        </TableCell>
                      </TableRow>
                      <TableRow className={classes.tableRowContent}>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          1/1/2020
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          30k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          20k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          5k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          9
                        </TableCell>
                      </TableRow>
                      <TableRow className={classes.tableRowContent}>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          1/1/2020
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          30k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          20k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          5k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          9
                        </TableCell>
                      </TableRow>
                      <TableRow className={classes.tableRowContent}>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          1/1/2020
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          30k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          20k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          5k
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          9
                        </TableCell>
                      </TableRow>
                      <TableRow
                        className={`${classes.tableRowContent} ${classes.totalEarnings}`}
                      >
                        <TableCell
                          className={`${classes.sellingTableCell}`}
                        ></TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          Total($)
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          10.00$
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          0.8.00$
                        </TableCell>
                        <TableCell className={`${classes.sellingTableCell}`}>
                          30
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </TabPanel>
          </div>

          <Grid item xs={12} className={classes.tableWrapper}>
            <TableContainer
              className={classes.tableContainer}
              component={Paper}
            >
              <Table
                className={`${classes.table} ${classes.dataTableCard}`}
                aria-label="Product data table"
              >
                <TableHead>
                  <TableRow className={classes.tableHead}>
                    <TableCell
                      className={`${classes.tableCell} ${classes.tableCellHead}`}
                    >
                      Thumb
                    </TableCell>
                    <TableCell
                      className={`${classes.tableCell} ${classes.tableCellHead}`}
                    >
                      ID
                    </TableCell>
                    <TableCell
                      className={`${classes.tableCell} ${classes.tableCellHead}`}
                    >
                      Type
                    </TableCell>
                    <TableCell
                      className={`${classes.tableCell} ${classes.tableCellHead}`}
                    >
                      Upload Date
                    </TableCell>
                    <TableCell
                      className={`${classes.tableCell} ${classes.tableCellHead}`}
                    >
                      Earning
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <tr style={{ display: "block", marginTop: "2rem" }}></tr>
                  {rows.map((row) => (
                    <TableRow key={row.id} className={classes.tableRowContent}>
                      <TableCell
                        className={`${classes.tableCell} ${classes.tableCellRow}`}
                      >
                        <img
                          className={classes.earningImg}
                          src={row.image}
                          alt={row.location}
                        />
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.tableCellRow}`}
                      >
                        13252622
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.tableCellRow}`}
                      >
                        VECTORS
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.tableCellRow}`}
                      >
                        20/10/2021
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.tableCellRow}`}
                      >
                        0.20$
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        <Footer addminFooter />
        </main>
      </div>

    </Layout>
  );
};

export default EarningManagement;

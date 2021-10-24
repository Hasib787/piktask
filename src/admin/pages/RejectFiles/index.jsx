import {
  Button,
  Card,
  CardContent,
  Drawer,
  Grid,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../../components/ui/Footer";
import Paginations from "../../../components/ui/Pagination";
import ProductNotFound from "../../../components/ui/ProductNotFound";
import productData from "../../../data/products.json";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./RejectFiles.styles";

const RejectFiles = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState(productData.products);
  const [rejectImage, setRejectImage] = useState([]);
  const [rejectMessage, setRejectMessage] = useState();
  const [pageCount, setPageCount] = useState(1);

  const user = useSelector((state) => state.user);

  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const { mobileView } = menuSate;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
        : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  const rejectItem = 6;
  //load data
  useEffect(() => {
    if (user.token) {
      try {
        async function fetchApi() {
          let response = await fetch(
            `${process.env.REACT_APP_API_URL}/contributor/images/rejected?limit=${rejectItem}&page=${pageCount}`,
            {
              headers: {
                Authorization: user.token,
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (data?.status) {
            setRejectImage(data);
          }
        }
        fetchApi();
      } catch (error) {
        console.log(error);
      }
    }
  }, [pageCount,user.token]);

  const handleClick = (product) => {
    // Run  when the reject status is true
    if (product?.reject?.status) {
      setOpenModal(true);
      setRejectMessage();
    }
  };

  return (
    <Layout title={"RejectFiles || Piktask"}>
      <div className={classes.adminRoot}>
        {mobileView ? null : <Sidebar className={classes.adminSidebar} />}

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.rejectFilesWrapper}>
            <div className={classes.headingWrapepr}>
              <Heading tag="h2">Reject Files</Heading>
            </div>

            <Grid container spacing={2}>
              {products.length > 0 ? (
                products.map((product) => (
                  <Grid key={product._id} item xs={3} sm={2} md={2} className={classes.productItem}>
                    <Card
                      className={classes.cardWrapper}
                      onClick={() => handleClick(product)}
                    >
                      <div className={classes.cardImage}>
                        <img src={product.image} alt={product.name} />
                      </div>
                      <CardContent className={classes.cardContent}>
                        {/* <Typography variant="h3">{product.name}</Typography> */}
                        <Typography variant="h3">Reject File</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <div className={classes.noItemsFound}>
                  <ProductNotFound noCollection="Reject"/>
                </div>
              )}

            </Grid>
              {products?.length > 5 && (
                <>
                 <Paginations count={10} />
                </>
              )}
          </div>
          <Footer />
        </main>
      </div>

      <Drawer
        anchor="right"
        open={openModal}
        onClose={() => setOpenModal(false)}
        className={classes.modalContainer}
        classes={{ paper: classes.paper, root: classes.drawerRoot }}
      >
        <div className={classes.modalHeader}>
          <div className={classes.headingContent}>
            <Typography variant="h3" className={classes.title}>
              Reasons for rejection
            </Typography>
            <CloseIcon
              className={classes.closeIcon}
              onClick={() => setOpenModal(false)}
            />
          </div>
          <hr />
        </div>

        <div className={classes.rejectionMessage}>
          <div className={classes.article}>
            <Typography variant="h3" className={classes.title}>
              Similar submissions
            </Typography>
            <Typography variant="body1">
              Your content will be rejected because it has minimal differences
              from other resources sent in the same submission or is quite
              similar to other files previously submitted by the same author.{" "}
            </Typography>
          </div>
          <div className={classes.article}>
            <Typography variant="h3" className={classes.title}>
              Composition
            </Typography>
            <Typography variant="body1">
              The design does not comply with the basic composition rules. In
              order for a resource to have good composition, all elements must
              be put together coherently. Make sure they are correctly arranged
              in the artboard and have adequate size. Content with a poor
              arrangement of elements or with an unbalanced composition will be
              rejected
            </Typography>
          </div>
          <div className={classes.article}>
            <Typography variant="h3" className={classes.title}>
              Composition
            </Typography>
            <Typography variant="body1">
              The design does not comply with the basic composition rules. In
              order for a resource to have good composition, all elements must
              be put together coherently. Make sure they are correctly arranged
              in the artboard and have adequate size. Content with a poor
              arrangement of elements or with an unbalanced composition will be
              rejected
            </Typography>
          </div>
          
        </div>
        <Button variant="contained" className={classes.viewBtn}>
          View More Reasons
        </Button>
      </Drawer>
    </Layout>
  );
};

export default RejectFiles;

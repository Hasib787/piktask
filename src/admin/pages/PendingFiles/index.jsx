import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardContent,
  Drawer,
  Grid,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
// import { borderColor } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../../components/ui/Footer";
import productData from "../../../data/products.json";
import { getBaseURL } from "../../../helpers";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import EditItem from "./EditItem";
import useStyles from "./PendingFiles.styles";

const PendingFiles = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [products, setProducts] = useState(productData.products);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [notYetSubmitted, setNotYetSubmitted] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const cardRef = useRef();

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

  useEffect(() => {
    if(user?.isLogged && user?.role === "contributor"){
      try {
        axios
          .get(`${process.env.REACT_APP_API_URL}/contributor/images/not_submit`,
            { headers: {Authorization: user?.token},}
          )
          .then(({data}) => {
            // console.log("data", data);
            if(data?.status){
              setNotYetSubmitted(data.images);
            }
          })
      } catch (error) {
        console.log("Not submit", error);
      }
    }
  }, [user?.isLogged, user?.token, user?.role])

  console.log("notYetSubmitted", notYetSubmitted);
  console.log("selectedProducts", selectedProducts);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    return;
  };

  const deleteSelectionProduct = () => {
    const filteredProducts = products.filter(product => !product.isSelected);
    setProducts(filteredProducts);
    setSelectedProducts([]);
  }
  // console.log("deleteSelectionProduct", selectedProducts);

  const selectedProduct = (e, product) => {
    if (!product.isSelected) {
      product.isSelected = true;
      e.currentTarget.style.border = "2px solid #0088f2";
    } else {
      product.isSelected = false;
      e.currentTarget.style.border = "";
    }

    setSelectedProducts((prevItems) => {
      const isSelected = prevItems.find((item) => item.id === product.id);

      if (isSelected) {
        const index = prevItems.findIndex((item) => item.id === product.id);
        prevItems.splice(index, 1);
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, isSelected: false } : item
        );
      }
      return [...prevItems, { ...product }];
    });
  };

  const handleWorkInfo = () => {

    if (selectedProducts.length > 0) {
      if(selectedProducts.length > 12) {
        toast.error("You can not select more than 12");
        return;
      }
      setOpenModal(true);
    } else {
      toast.error("No product");
      setOpenModal(false);
    }
  };


  return (
    <Layout title={`Pending || Piktask`}>
      <div className={classes.adminRoot}>
        {mobileView ? null : <Sidebar className={classes.adminSidebar} />}

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.dashboardGridContainer}>
            <div className={classes.headingWrapper}>
              <Heading tag="h2">Not Yet Submit</Heading>
              <div>
                <Button onClick={() => deleteSelectionProduct()} className={`${classes.actionBtn} ${classes.deleteBtn}`}>
                  Delete File
                </Button>
                <Button
                  to={`/contributor/upload`}
                  component={Link}
                  className={`${classes.actionBtn} ${classes.addFileBtn}`}
                >
                  Add File
                </Button>
                <Button
                  className={`${classes.actionBtn} ${classes.workInfoBtn}`}
                  onClick={() => handleWorkInfo()}
                >
                  Add Work Information
                </Button>
              </div>
            </div>

            <Grid container spacing={2}>
              {notYetSubmitted.length > 0 ? (
                notYetSubmitted.map((product) => (
                  <Grid
                    key={product?.id}
                    item
                    xs={4}
                    sm={3}
                    md={2}
                    className={classes.productItem}
                  >
                    <Card
                      className={classes.pendingFileCard}
                      onClick={(e) => { selectedProduct(e, product);}}
                      classes={{ root: classes.root }}
                      ref={cardRef}
                    >
                      <div className={classes.btnWrapper}>
                        {/* <FontAwesomeIcon icon={faEdit} className={classes.editIcon} /> */}
                        <DeleteIcon
                          onClick={() => handleDelete(product.id)}
                          className={classes.deleteIcon}
                        />
                      </div>
                      <img
                        onClick={(e) => { selectedProduct(e, product);}}
                        src={getBaseURL().bucket_base_url + getBaseURL().images + product.original_file}
                        alt={product?.title}
                      />
                      <CardContent>
                        <Typography variant="h3">{product.title}</Typography>
                        <Typography variant="body2">File Size: {(product.size / 1024 / 1024).toFixed(2)} MB</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <div className={classes.noItemsFound}>
                  <Typography>No products are in pending</Typography>
                </div>
              )}
            </Grid>
          </div>

          <Drawer
            anchor="right"
            open={openModal}
            onClose={() => setOpenModal(false)}
            className={classes.editItemContainer}
          >
            <div className={classes.editItemHeader}>
              <div className={classes.headingContent}>
                <Heading>Work Details</Heading>
                <CloseIcon
                  className={classes.closeIcon}
                  onClick={() => setOpenModal(false)}
                />
              </div>
              <hr />
            </div>

            <EditItem
              setSelectedProducts={setSelectedProducts}
              setOpenModal={setOpenModal}
              products={selectedProducts}
            />
          </Drawer>
          <Footer />
        </main>
      </div>
    </Layout>
  );
};

export default PendingFiles;

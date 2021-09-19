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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/ui/Footer";
import productData from "../../../data/products.json";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import EditItem from "./EditItem";
import useStyles from "./PendingFiles.styles";

const PendingFiles = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(productData.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selected, setSelected] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editItem, setEditItem] = useState({});

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

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product._id !== id));
    return;
  };

  const selectedProduct = (e, product) => {
    // If the product is already selected stop here
    if (selectedProducts.find((item) => item._id === product._id)) {
      // return;
    }
    if (e.currentTarget) {
      setSelected((prevState) => !prevState);
    }

    selectedProducts.push(product);
    setSelectedProducts([...selectedProducts, { ...product, selected: true }]);
  };

  const editSingleItem = (product) => {
    setOpenModal(true);
    setEditItem(product);
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
                <Button className={`${classes.actionBtn} ${classes.deleteBtn}`}>
                  Delete File
                </Button>
                <Button to={`/admin/upload`} component={Link} className={`${classes.actionBtn} ${classes.addFileBtn}`}>
                  Add File
                </Button>
                <Button className={`${classes.actionBtn} ${classes.workInfoBtn}`}>
                  Add Work Information
                </Button>
              </div>
            </div>

            <Grid container spacing={2}>
              {products.length > 0 ? (
                products.map((product) => (
                  <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                    <Card
                      className={classes.pendingFileCard}
                      onClick={(e) => {
                        selectedProduct(e, product);
                      }}
                    >
                      <DeleteIcon
                        onClick={() => handleDelete(product._id)}
                        className={classes.deleteIcon}
                      />
                      <img
                        onClick={() => editSingleItem(product)}
                        src={product.image}
                        alt={product.name}
                      />
                      <CardContent>
                        <Typography variant="h3">{product.name}</Typography>
                        <Typography variant="body2">File Size: 10MB</Typography>
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

            <EditItem item={editItem} />
          </Drawer>
          <Footer />
        </main>
      </div>

    </Layout>
  );
};

export default PendingFiles;

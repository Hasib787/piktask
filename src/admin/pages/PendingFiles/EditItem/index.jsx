import { Button, Chip, TextField } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import React, { useState } from "react";
import { getBaseURL } from "../../../../helpers";
import useStyles from "./EditItem.styles";

const EditItem = ({ products, setOpenModal, setSelectedProducts }) => {
  const classes = useStyles();
  const [category, setCategory] = useState([]);
  //   const [title, setTitle] = useState(item.name);
  //   const [categoryName, setCategoryName] = useState("");

  const handleChange = () => {
    // const name = e.target.name;
    // setCategory({
    //   ...category,
    //   [name]: e.target.value,
    // });
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories?limit=50`)
      .then(({ data }) => {
        if (data?.status) {
          const sortedData = data?.categories.sort((a, b) => a.id - b.id);
          setCategory(sortedData);
        }
      })
      .catch((error) => console.log("Categories loading error: ", error));
  };

  const keyWords = [
    // { title: "Business Card" },
  ];

  const handleProductSubmit = (e) => {
    e.preventDefault();
    // TODO: After succesful the form call this function
    setSelectedProducts([]);
    setOpenModal(false);
  };

  return (
    <div className={classes.editItemWrapper}>
      <form
        onSubmit={handleProductSubmit}
        className={classes.formRoot}
        noValidate
        autoComplete="off"
      >
        <div className={classes.imgWrapper}>
          {products.length > 0 &&
            products.map((product) => (
              <div key={product.id} className={classes.productItem}>
                <img
                  className={classes.editItemImage}
                  src={getBaseURL().bucket_base_url + getBaseURL().images + product.original_file}
                  alt={product.title}
                  width={"100px"}
                />
              </div>
            ))}
        </div>

        <div className={classes.fieldGroup}>
          <label htmlFor="category">Select Category</label>
          <select
            id="category"
            // onChange={(e) => setCategoryName(e.target.value)}
            onClick={() => handleChange()}
          >
            {category.length !== 0 ? (
              category.map((categoryItem) => (
                <option key={categoryItem.id} value="">
                  {categoryItem?.name}
                </option>
              ))
            ) : (
              <option aria-label="None" value="">
                Select Category
              </option>
            )}
            {/* <option aria-label="None" value="" />
            <option value={categoryName}>Vector</option>
            <option value={20}>PSD</option>
            <option value={30}>PNG</option>
            <option value={40}>Illustration</option>
            <option value={50}>Card</option>
            <option value={60}>Business Card</option> */}
          </select>
        </div>
        <div className={classes.fieldGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={`${classes.fieldGroup}`}>
          <label htmlFor="keyword">Keyword</label>
          <Autocomplete
            multiple
            id="keyword"
            options={keyWords.map((option) => option.title)}
            // defaultValue={[keyWords[13].title]}
            fullWidth
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                placeholder="Card Design"
              />
            )}
            closeIcon={<ClearIcon />}
            classes={{
              inputRoot: classes.inputRoot,
              inputFocused: classes.inputFocused,
              tag: classes.tag,
              clearIndicator: classes.clearIndicator,
              input: classes.input,
              focused: classes.focused,
            }}
          />
        </div>

        <hr className={classes.seperator} />

        <div className={classes.buttonsWrapper}>
          <Button type="submit" className={`${classes.actionBtn} ${classes.submitBtn}`}>
            Submit
          </Button>
          {/* <Button className={`${classes.actionBtn} ${classes.saveBtn}`}>
            Save
          </Button> */}
          <Button
            className={`${classes.actionBtn} ${classes.cancelBtn}`}
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;

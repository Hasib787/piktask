import {
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextareaAutosize,
} from "@material-ui/core";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../components/ui/Footer";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./UploadFiles.styles";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const categoryItem = [
  { id: 1, value: "Animals", label: "Animals" },
  { id: 2, value: "Architecture", label: "Architecture" },
  { id: 3, value: "Backgrounds / Textures", label: "Backgrounds / Textures" },
  { id: 4, value: "Business / Finance", label: "Business / Finance" },
  {
    id: 5,
    value: "Computer / Communication",
    label: "Computer / Communication",
  },
  { id: 6, value: "Education", label: "Education" },
  { id: 7, value: "Fashion", label: "Fashion" },
  { id: 8, value: "Foods & Drinks", label: "Foods & Drinks" },
  { id: 9, value: "Health / Medical", label: "Health / Medical" },
  { id: 10, value: "Industry / Craft", label: "Industry / Craft" },
  { id: 11, value: "Music", label: "Music" },
  { id: 12, value: "Nature / Landscapes", label: "Nature / Landscapes" },
  { id: 13, value: "People", label: "People" },
  { id: 14, value: "Places", label: "Places" },
  { id: 15, value: "Religion", label: "Religion" },
  { id: 16, value: "Science / Technology", label: "Science / Technology" },
  { id: 17, value: "Sports", label: "Sports" },
  { id: 18, value: "Transportation / Cars", label: "Transportation / Cars" },
  { id: 19, value: "Travel", label: "Travel" },
  { id: 20, value: "Uncategorized", label: "Uncategorized" },
];

const ItemForSale = [
  { value: "free", label: "Item Free" },
  { value: "sale", label: "Item for sale" },
];

const usePhoto = [
  { value: "free", label: "Free for commercial use" },
  { value: "free_personal", label: "Free for personal use" },
  { value: "editorial_only", label: "Editorial use only" },
  { value: "web_only", label: "Use only on website" },
];

const typeOfImageItem = [
  { label: "Image (JPG, PNG, GIF)" },
  { label: "Image and Vector graphic (AI, EPS, PSD,SVG)" },
];

const UploadFiles = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    vectorFileExtension: false,
    vectorColor: false,
    vectorPreviewSize: false,
    vectorFileTitle: false,
    psdFileExtension: false,
    psdColor: false,
    psdPreviewSize: false,
    psdFileTitle: false,
    pngFileExtension: true,
    pngColor: true,
    pngPreviewSize: false,
    pngFileTitle: false,
  });

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(1);
  const [item_for_sale, setItem_for_sale] = useState("free");
  const [price, setPrice] = useState("0");
  const [image, setImage] = useState("");
  const [additional_image, setAdditional_image] = useState("");
  const [attribution, setAttribution] = useState("yes");
  const [usages, setUsages] = useState("free");
  const [typeOfImage, setTypeOfImage] = useState("")
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [itemForSaleError, setItemForSaleError] = useState(false);
  const [imageError, setImageError] = useState("");

  const user = useSelector((state) => state.user);
  const history = useHistory();

  //item for sale
  const [itemSale, setItemSale] = useState(false);

  //Type of Image
  const [imageType, setImageType] = useState(false);

  //for tag element
  const [tags, setTags] = useState([]);

  const addTags = (event) => {
    event.preventDefault();
    if (
      event.target.value !== " " &&
      tags.length < 10 &&
      event.target.value !== "  " &&
      event.target.value !== ","
    ) {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
    if (tags.length > 9) {
      toast.error("Tag is full / No more tag");
    }
  };

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const handleUsagesChange = (event) => {
    setUsages(event.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSaleChange = (e) => {
    setItem_for_sale(e.target.value);
    setItemSale(!itemSale);
  };

  const handleTypeOfImage=(e)=>{
    setTypeOfImage(e.target.value);
    setImageType(!imageType);
  }

  const handlePrice = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
    }
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setImage(imageFile);
    if (!imageFile) {
      setImageError("Image is required");
      return false;
    }
    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setImageError("Select valid image.");
      return false;
    } else {
      setImageError("");
    }
  };

  const handleFileChange= (e) =>{
      const additionalFile = e.target.files[0];
      setAdditional_image(additionalFile);

      if (!additionalFile.name.match(/\.(psd|svg|eps|ai)$/)) {
        setImageError("Select valid file.");
        return false;
      } else {
        setImageError("");
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setAttribution("yes");
    setItemForSaleError(false);
    setState({ ...state, [e.target.name]: e.target.checked });

    if (imageError) {
      toast.error("Please upload valid image");
    }
    if (title === "") {
      setTitleError(true);
      toast.error("The Title field is required.");
    }
    if (!title.match(/^[a-zA-Z]+$/)) {
      setTitleError(true);
      toast.error("Title should be a character");
    }
    if (title.length < 3 || title.length > 200) {
      setTitleError(true);
      toast.error("Title must be between 3 to 200 characters");
    }

    if (tags.length < 0) {
      toast.error("The tag field is required");
    }
    if (!itemSale) {
      setPrice("0");
    }
    if (itemForSaleError === "") {
      setItemForSaleError(true);
      toast.error("Item for sale status must be 'free' or 'sale'");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("tags", tags);
    formData.append("category", category);
    formData.append("item_for_sale", item_for_sale);
    formData.append("price", price);
    formData.append("usages", usages);
    formData.append("attribution", attribution);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("additional_image", additional_image);

    const url = "https://piktask.com/api/images/upload";
    axios({
      method: "post",
      url: url,
      data: formData,
      headers: {
        Authorization: user.token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Photo added successful");
        }
        if(res?.status === 401){
          localStorage.clear();
          toast.success("Please login Again");
          window.location.reload(history.replace('/login'));  
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <AdminHeader />

      <div className={classes.adminRoot}>
        <Sidebar />

        <main className={classes.content}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={classes.uploadContainer}>
              <div className={classes.basicInfo}>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className={classes.basicInfoIcon}
                      icon={faExclamationTriangle}
                    />
                    Please read the terms and conditions to avoid sanctions
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className={classes.basicInfoIcon}
                      icon={faInfoCircle}
                    />
                    You can upload 2 photos per day
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className={classes.basicInfoIcon}
                      icon={faInfoCircle}
                    />
                    It is not allowed images of violence or pornographic content
                    of any kind
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className={classes.basicInfoIcon}
                      icon={faInfoCircle}
                    />
                    Photos must be of Authoring
                  </li>
                </ul>
              </div>

              <Heading className={classes.headingTop} tag="h2">
                Upload Your Content
              </Heading>

              <div className={classes.fileUploadContainer}>
                <div className={classes.uploadIconWrapper}>
                  <label htmlFor="btn-upload">
                    <input
                      id="btn-upload"
                      name="btn-upload"
                      style={{ display: "none" }}
                      type="file"
                      files={image}
                      onChange={handleImageChange}
                    />
                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                  </label>
                </div>

                <h2 className={classes.imageErrorText}>{imageError}</h2>
                <Typography className={classes.photoUploadText} variant="body1">
                  Click to upload an photo
                </Typography>
                <Typography className={classes.subtitle} variant="body1">
                  The photo must be greater than or equal to: 1600x900 - 2MB{" "}
                </Typography>
              </div>

              {/* <ul className="list-group mt-2">
                {acceptedFiles.length > 0 &&
                  acceptedFiles.map((acceptedFile) => (
                    <li
                      key={[0]}
                      className="list-group-item list-group-item-success"
                    >
                      {acceptedFile.name}
                    </li>
                  ))}
              </ul> */}

              <Heading className={classes.formHeadText} tag="h2">
                What type of content are you going to upload?
              </Heading>

              <div className={classes.uploadForm}>
                <h4 className={classes.titleText}>Title</h4>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  className={classes.inputField}
                  placeholder="Title"
                  variant="outlined"
                  fullWidth
                  required
                  error={titleError}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <h4 className={classes.titleText}>Tag</h4>
                <div className={classes.tagsInput}>
                  <ul className={classes.tags}>
                    {tags.map((tag, index) => (
                      <li key={index} className={classes.tag}>
                        <span className={classes.tagTitle}>{tag}</span>
                        <span
                          className={classes.tagCloseIcon}
                          onClick={() => removeTags(index)}
                        >
                          x
                        </span>
                      </li>
                    ))}
                  </ul>
                  <input
                    className={classes.input}
                    type="text"
                    onKeyUp={(event) =>
                      event.code === "Space" || event.key === ","
                        ? addTags(event)
                        : null
                    }
                    placeholder="Add Tag"
                  />
                </div>
                <p className={classes.helperText}>
                  * Press Enter to add tag (Maximum 10 tags)
                </p>

                <div className={classes.category}>
                  <h4 className={classes.titleText}>Category</h4>
                  <TextField
                    id="standard-select-currency-native"
                    className={classes.inputField}
                    variant="outlined"
                    select
                    value={category}
                    onChange={handleCategoryChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {categoryItem.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <h4 className={classes.titleText}>Item for sale?</h4>
                  <TextField
                    id="standard-select-currency-native"
                    className={classes.inputField}
                    variant="outlined"
                    select
                    value={item_for_sale}
                    onChange={handleSaleChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {ItemForSale.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </div>
                {itemSale && (
                  <div>
                    <h4 className={classes.titleText}>($)Price</h4>
                    <TextField
                      className={classes.inputField}
                      variant="outlined"
                      placeholder="Price"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={price}
                      onChange={handlePrice}
                      helperText="* You will receive 95% for each sale"
                    />
                    <div className={classes.priceFormats}>
                      <h3>Price Formats:</h3>
                      <ul className={classes.listStyle}>
                        <li>Small photo price:$0</li>
                        <li>Medium photo price:$0</li>
                        <li>Large photo price:$0</li>
                        <li>
                          Vector price:$0 <span>(If included)</span>
                        </li>
                      </ul>
                      <small>Price minimum:$5 | Price maximum:$100</small>
                    </div>
                  </div>
                )}
                <div>
                  <h4 className={classes.titleText}>
                    How they can use this photo
                  </h4>
                  <TextField
                    id="standard-select-currency-native"
                    className={classes.inputField}
                    select
                    label=""
                    variant="outlined"
                    value={usages}
                    onChange={handleUsagesChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {usePhoto.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </div>

                <h4 className={classes.titleText}>Type of Image?</h4>
                <TextField
                    id="standard-select-currency-native"
                    className={classes.inputField}
                    select
                    label=""
                    variant="outlined"
                    value={typeOfImage}
                    onChange={handleTypeOfImage}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    
                    {typeOfImageItem.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                {/* <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={typeOfImage}
                  getOptionLabel={(option) => option.label}
                  onChange={() => setImageType(!imageType)}
                  defaultValue={typeOfImage.find((v) => v.label[0])}
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className={classes.inputField}
                      variant="outlined"
                    />
                  )}
                /> */}

                {imageType && (
                  <div className={classes.imageFileUploadBox}>
                    <div className={classes.uploadIconImage}>
                      <label htmlFor="additionalImageUpload">
                        <input
                          id="additionalImageUpload"
                          name="additionalImageUpload"
                          style={{ display: "none" }}
                          type="file"
                          files={additional_image}
                          onChange= {handleFileChange}
                        />
                        <FontAwesomeIcon icon={faCloudUploadAlt} />
                      </label>
                      <p className={classes.selectFileText}>
                        Select a file (AI,EPS,PSD,SVG)
                      </p>
                    </div>
                  </div>
                )}

                {!itemSale && (
                  <div>
                    <h4 className={classes.titleText}>Attribution required</h4>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="Attribution required"
                        name="Attribution required"
                        value={attribution}
                        onChange={(e) => setAttribution(e.target.value)}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                )}

                <h4 className={classes.titleText}>Description (Optional)</h4>
                <TextareaAutosize
                  className={classes.description}
                  aria-label="minimum height"
                  rowsMin={5}
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className={classes.singleBorder}></div>
                <button
                  variant="contained"
                  className={classes.uploadBtn}
                  type="submit"
                >
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    className={classes.uploadIcon}
                  />
                  Upload
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>

      <Footer addminFooter />
    </>
  );
};

export default UploadFiles;

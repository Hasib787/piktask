import {
  faCloudUploadAlt,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./UploadFiles.styles";

const categoryItem = [
  { id: 0, value: "select_category", label: "Select Category" },
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
  { value: "free", label: "Free" },
  { value: "sale", label: "Premium" },
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

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const UploadFiles = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(1);
  const [item_for_sale, setItem_for_sale] = useState("free");
  const [price, setPrice] = useState("0");
  const [image, setImage] = useState("");
  const [additional_image, setAdditional_image] = useState("");
  const [attribution, setAttribution] = useState("yes");
  const [usages, setUsages] = useState("free");
  const [typeOfImage, setTypeOfImage] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [itemForSaleError, setItemForSaleError] = useState(false);
  const [imageError, setImageError] = useState("");
  const [isLoading, setLoading] = useState(false);

  //item for sale
  const [itemSale, setItemSale] = useState(false);

  //Type of Image
  const [imageType, setImageType] = useState(false);

  //for tag element
  const [tags, setTags] = useState([]);

  const [files, setFiles] = useState([]);
  const [thumbImage, setThumbImage] = useState("");
  const [thumbWidth, setThumbWidth] = useState("");
  const [thumbHeight, setThumbHeight] = useState("");

  useEffect(
    () => () => {
      let image = new Image();
      image.onload = () => {
        setThumbWidth(image.width);
        setThumbHeight(image.height);
      };
      image.src = thumbImage.preview;

      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files, thumbImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setThumbImage(acceptedFiles[0]);

      let image = new Image();
      image.onchange = () => {
        if (
          (image.width > 360 || image.width < 360) &&
          (image.height > 210 || image.height < 210)
        ) {
          toast.error("The thumbnail dimension should be 360x210 asdfa");
          return;
        }
      };
      image.src = thumbImage.preview;

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} alt="thumbnail" style={img} />
      </div>
    </div>
  ));

  const isActive = isDragActive && "2px dashed #26AA10";

  const thumbnailDimension = () => {
    if (
      (thumbWidth > 360 || thumbWidth < 360) &&
      (thumbHeight > 210 || thumbHeight < 210)
    ) {
      toast.error("The thumbnail dimension should be 360x210");
      return;
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // }

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
      toast.error("Tag is full / No more tags");
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
    if (e.target.value === "sale") {
      setPrice("5");
    } else {
      setPrice("0");
    }
  };

  const handleTypeOfImage = (e) => {
    setTypeOfImage(e.target.value);
    setImageType(!imageType);
  };

  const handlePrice = (e) => {
    if (e.target.value < 5) {
      toast.error("Minimum price should be 5");
      return;
    }
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setImage(imageFile);
    if (!imageFile || imageFile === "") {
      setImageError("Image is required");
      toast.error("Image is required");
      return false;
    }

    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setImageError("Select valid image.");
      return false;
    } else {
      setImageError("");
    }
  };

  const handleFileChange = (e) => {
    const additionalFile = e.target.files[0];
    setAdditional_image(additionalFile);

    if (!additionalFile.name.match(/\.(psd|svg|eps|ai)$/)) {
      setImageError("Select valid file.");
      return false;
    } else {
      setImageError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTitleError(false);

    if (!user.token) {
      toast.error("You have no authorizatoin");
      return;
    }

    // if (thumbs.length === 0) {
    //   setLoading(false);
    //   toast.error("Please upload a thumbnail with the dimention of 360 x 210");
    //   return;
    // } else if (!title) {
    //   setLoading(false);
    //   toast.error("The Title field is required.");
    //   return;
    // } else if (title.length < 3 || title.length > 200) {
    //   setLoading(false);
    //   toast.error("Title must be between 3 and 200 characters");
    //   return;
    // } else if (tags.length === 0) {
    //   setLoading(false);
    //   toast.error("The tag field is required");
    //   return;
    // } else if (category === "0") {
    //   toast.error("Please select your item category");
    //   setLoading(false);
    //   return;
    // } else if (item_for_sale !== "free") {
    //   toast.error("Item for sale status must be Free or Sale");
    //   setLoading(false);
    //   return;
    // } else if (price) {
    //   toast.error("Item for sale status must be Free or Sale");
    //   setLoading(false);
    //   return;
    // }

    console.log("thumbImage", thumbImage);
    const formData = new FormData();
    formData.append("title", "this is title");
    formData.append("tags", tags.toString());
    formData.append("category", category);
    formData.append("item_for_sale", item_for_sale);
    formData.append("price", price);
    formData.append("usages", usages);
    formData.append("attribution", attribution);
    formData.append("description", description);
    formData.append("image", thumbImage);
    formData.append("additional_image", additional_image);

    return;

    const url = `${process.env.REACT_APP_API_URL}/images/upload`;
    axios({
      method: "post",
      url,
      data: formData,
      headers: {
        Authorization: user.token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("res", res);
        if (res?.status === 200) {
          toast.success(res.data.message);
          setLoading(false);
          setTitle("");
          setDescription("");
          setImage("");
          setAdditional_image("");
          setTags([]);
          setCategory("");
          setPrice("");
          setUsages("");
          setAttribution("");
          setItem_for_sale("");
        }
        if (res?.status === 401) {
          localStorage.removeItem("token");
          toast.success("Please login Again");
          history.replace("/login");
          setLoading(false);
        }
      })
      .catch((error) => {
        // console.log(error.message.data.errors);
        toast.error(error.message);
        setLoading(false);
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

              <label
                htmlFor="btn-upload"
                className={classes.fileUploadContainer}
                {...getRootProps({
                  onClick: (e) =>
                    (e.currentTarget.style.border = "2px dashed #26AA10"),
                })}
                style={{ border: isActive }}
              >
                <div className={classes.uploadIconWrapper}>
                  <input
                    {...getInputProps({
                      multiple: false,
                    })}
                  />
                  <FontAwesomeIcon icon={faCloudUploadAlt} />

                  <h2 className={classes.imageErrorText}>{imageError}</h2>

                  <Typography
                    className={classes.photoUploadText}
                    variant="body1"
                  >
                    Click to upload an photo
                  </Typography>
                  <Typography className={classes.subtitle} variant="body1">
                    The photo must be greater than or equal to: 1600x900 - 2MB{" "}
                  </Typography>
                </div>
              </label>

              {thumbs}

              <Heading className={classes.formHeadText} tag="h2">
                What type of content are you going to upload?
              </Heading>

              <Spacing space={{ height: "2.5rem" }} />

              <div className={classes.uploadForm}>
                <h4 className={classes.titleText}>Title</h4>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  className={classes.inputField}
                  placeholder="Title"
                  variant="outlined"
                  fullWidth
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
                  * Press Space or comma to add tag (Maximum 10 tags)
                </p>

                <div>
                  <h4 className={classes.titleText}>Category</h4>
                  <TextField
                    id="standard-select-currency-native"
                    className={classes.categoryInput}
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
                    className={classes.itemSaleInput}
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
                    className={classes.usagesInput}
                    select
                    label=""
                    variant="outlined"
                    value={usages}
                    onChange={handleUsagesChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {usePhoto.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </div>

                <h4 className={classes.titleText}>Type of Image?</h4>
                <TextField
                  id="standard-select-currency-native"
                  className={classes.typeOfImageInput}
                  select
                  label=""
                  variant="outlined"
                  value={typeOfImage}
                  onChange={handleTypeOfImage}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {typeOfImageItem.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                {imageType && (
                  <div className={classes.imageFileUploadBox}>
                    <div className={classes.uploadIconImage}>
                      <input
                        id="additionalImageUpload"
                        name="additionalImageUpload"
                        // style={{ display: "none" }}
                        type="file"
                        files={additional_image}
                        onChange={handleFileChange}
                      />
                      <label htmlFor="additionalImageUpload">
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
                  disabled={isLoading}
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

import {
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextareaAutosize,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
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

const category = [
  { label: "Animals" },
  { label: "Architecture" },
  { label: "Backgrounds / Textures" },
  { label: "Business / Finance" },
  { label: "Computer / Communication" },
  { label: "Education" },
  { label: "Fashion" },
  { label: "Foods & Drinks" },
  { label: "Health / Medical" },
  { label: "Industry / Craft" },
  { label: "Music" },
  { label: "Nature / Landscapes" },
  { label: "People" },
  { label: "Places" },
  { label: "Religion" },
  { label: "Science / Technology" },
  { label: "Sports" },
  { label: "Transportation / Cars" },
  { label: "Travel" },
  { label: "Uncategorized" },
];

const ItemForSale = [{ label: "Item Free" }, { label: "Item for sale" }];

const usePhoto = [
  { label: "Free for commercial use" },
  { label: "Free for personal use" },
  { label: "Editorial use only" },
  { label: "Use only on website" },
];

const typeOfImage = [
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
    pngFileExtension: false,
    pngColor: false,
    pngPreviewSize: false,
    pngFileTitle: false,
  });
  const [imageSelected, setImageSelected] = useState("");
  const [title, setTitle] = useState("");
  const [itemForSale, setItemForSale] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [additionalImage, setAdditionalImage] = useState("");
  const [attribution, setAttribution] = useState("yes");
  const [titleError, setTitleError] = useState(false);

  //item for sale
  const [itemSale, setItemSale] = useState(false);

  //Type of Image
  const [imageType, setImageType] = useState(false);

  //for tag element
  const [tags, setTags] = useState([]);

  const addTags = (event) => {
    if (event.target.value !== "" && tags.length < 8) {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
    if (tags.length > 7) {
      toast.error("Tag is full / No more tag");
    }
  };

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const handlePrice = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
    }
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitleError(false);
    setState({ ...state, [e.target.name]: e.target.checked });

    const formData = new FormData();
    formData.append("file", imageSelected);
    axios
      .post("http://174.138.30.55/api/images/upload", {
        formData,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Photo added successful");
        }
      });

    if (title === "") {
      setTitleError(true);
      toast.error("The Title field is required.");
    }

    if (tags.length < 0) {
      toast.error("The tag field is required");
    }

    console.log("I'm clicked");
  };

  const onDrop = useCallback((acceptedFiles) => {
    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path}
        {/* <img src={file.path} alt="Dropped file"/> */}
      </li>
    ));

    return files;
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <AdminHeader />

      <div className={classes.adminRoot}>
        <Sidebar />

        <main className={classes.content}>
          <form autoComplete="off">
            <div className={classes.uploadContainer}>
              <div className={classes.basicInfo}>
                <ul>
                  <li>
                    <FontAwesomeIcon className={classes.basicInfoIcon} icon={faExclamationTriangle} />
                    Please read the terms and conditions to avoid sanctions
                  </li>
                  <li>
                    <FontAwesomeIcon className={classes.basicInfoIcon} icon={faInfoCircle} />
                    You can upload 2 photos per day
                  </li>
                  <li>
                    <FontAwesomeIcon className={classes.basicInfoIcon} icon={faInfoCircle} />
                    It is not allowed images of violence or pornographic content
                    of any kind
                  </li>
                  <li>
                    <FontAwesomeIcon className={classes.basicInfoIcon} icon={faInfoCircle} />
                    Photos must be of Authoring
                  </li>
                </ul>
              </div>
              <Heading className={classes.headingTop} tag="h2">
                Upload Your Content
              </Heading>

              <div
                className={classes.fileUploadContainer}
                {...getRootProps()}
                style={isDragActive ? { borderColor: "#117A00" } : undefined}
              >
                <div
                  className={classes.uploadIconWrapper}
                  style={
                    isDragActive ? { backgroundColor: "#117A00" } : undefined
                  }
                >
                  <input
                    {...getInputProps()}
                    // onDrop={handleDrop}
                  />
                  <FontAwesomeIcon icon={faCloudUploadAlt} />
                </div>

                {isDragActive ? (
                  <Heading tag="h2">Drop the files here...</Heading>
                ) : (
                  <Heading tag="h2">
                    Drag and drop or click to upload an photo
                  </Heading>
                )}
                <Typography className={classes.subtitle} variant="body1">
                  The photo must be greater than or equal to: 1600x900 - 2MB{" "}
                </Typography>
              </div>

              <Heading tag="h2">
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
                      event.key === "Enter" ? addTags(event) : null
                    }
                    placeholder="Add Tag"
                  />
                </div>
                <p className={classes.helperText}>
                  * Press Enter to add tag (Maximum 8 tags)
                </p>

                <div className={classes.category}>
                  <h4 className={classes.titleText}>Category</h4>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={category}
                    getOptionLabel={(option) => option.label}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={classes.inputField}
                        variant="outlined"
                        placeholder="Animals"
                      />
                    )}
                  />
                  <h4 className={classes.titleText}>Item for sale?</h4>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={ItemForSale}
                    getOptionLabel={(option) => option.label}
                    onChange={() => setItemSale(!itemSale)}
                    defaultValue={ItemForSale.find((v) => v.label[0])}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={classes.inputField}
                        variant="outlined"
                        value={itemForSale}
                        onChange={(e) => setItemForSale(e.target.value)}
                      />
                    )}
                  />
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
                {!itemSale && (
                  <div>
                    <h4 className={classes.titleText}>
                      How they can use this photo
                    </h4>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={usePhoto}
                      getOptionLabel={(option) => option.label}
                      style={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={classes.inputField}
                          variant="outlined"
                          placeholder="Free for commercial use"
                        />
                      )}
                    />
                  </div>
                )}
                <h4 className={classes.titleText}>Type of Image?</h4>
                <Autocomplete
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
                />
                {imageType && (
                  <div
                    className={classes.imageFileUploadBox}
                    {...getRootProps()}
                    style={
                      isDragActive ? { borderColor: "#117A00" } : undefined
                    }
                  >
                    <div
                      className={classes.uploadIconImage}
                      style={
                        isDragActive
                          ? { backgroundColor: "#117A00" }
                          : undefined
                      }
                    >
                      <input {...getInputProps()} />
                      <FontAwesomeIcon icon={faCloudUploadAlt} />
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
                          value="Yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="No"
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
                />
                <div className={classes.singleBorder}></div>
                <button
                  variant="contained"
                  className={classes.uploadBtn}
                  onClick={handleSubmit}
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

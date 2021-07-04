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
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../components/ui/Footer";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./UploadFiles.styles";
import { array } from "prop-types";

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

  const [value, setValue] = useState("yes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //for tag element
  const [tags, setTags] = useState([]);
  const [text, setText] = useState("");

  const pushTextToTags = (inputText) => {
    if (inputText.length === 0 || inputText.key === 'enter' ) {
      return setText("");
    }
      if (inputText[inputText.length - 1] === ",") {
        setTags([...tags, text]);
        setText("");
      } else {
        setText(inputText);
    }
   
    // if(setTags.length === 10){
      
    // }
    
  };

  const handleCloseTag = (index) => {
    let newTags = tags;
    newTags.splice(index, 1);
    setTags([...tags]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.checked });
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
          <div className={classes.uploadContainer}>
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
                <input {...getInputProps()} />
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
            {onDrop.map}

            <Heading tag="h2">
              What type of content are you going to upload?
            </Heading>

            <div className={classes.uploadForm}>
              <form
                autoComplete="off"
                className={classes.form}
                onSubmit={handleSubmit}
              >
                <h4 className={classes.titleText}>Title</h4>
                <TextField
                  className={classes.inputField}
                  placeholder="Title"
                  variant="outlined"
                  fullWidth
                  id="fullWidth"
                />

                <h4 className={classes.titleText}>Tag</h4>
                <div className={classes.textArea}>
                  <div className={classes.tagContainer}>
                    {Array.isArray(tags) &&
                      tags.length !== 0 &&
                      tags.map((tag, index) => (
                        <div key={index} className={classes.singleTag}>
                          {tag}
                          <button
                            className={classes.closeBtn}
                            onClick={() => handleCloseTag(index)}
                          >
                            <div className={classes.closeIcon}>
                              <FontAwesomeIcon icon={faTimesCircle} />
                            </div>
                          </button>
                          
                        </div>
                      ))}
                  </div>

                  <TextField
                    className={classes.tag}
                    onChange={(event) => pushTextToTags(event.target.value)}
                    placeholder="Add a tag"
                    variant="outlined"
                    fullWidth
                    helperText="* Press Enter or comma to add tag (Maximum 10 tags)"
                    value={text}
                  />
                </div>

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
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className={classes.inputField}
                        variant="outlined"
                        placeholder="Item Free"
                      />
                    )}
                  />
                </div>
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
                <h4 className={classes.titleText}>Type of Image?</h4>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={typeOfImage}
                  getOptionLabel={(option) => option.label}
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className={classes.inputField}
                      variant="outlined"
                      placeholder="Image (JPG, PNG, GIF)"
                    />
                  )}
                />
                <h4 className={classes.titleText}>Attribution required</h4>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="Attribution required"
                    name="Attribution required"
                    value={value}
                    onChange={handleChange}
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

                <h4 className={classes.titleText}>Description (Optional)</h4>
                <TextareaAutosize
                  className={classes.description}
                  aria-label="minimum height"
                  rowsMin={5}
                  placeholder="Description"
                />
                <div className={classes.singleBorder}></div>
                <button variant="contained" className={classes.uploadBtn}>
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    className={classes.uploadIcon}
                  />
                  Upload
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>

      <Footer addminFooter />
    </>
  );
};

export default UploadFiles;

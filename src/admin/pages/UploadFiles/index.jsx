import {
  faCloudUploadAlt,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, LinearProgress } from "@mui/material";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import fileThumbnail from "../../../assets/icons/fileThumpnail.png";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Layout from "../../../Layout";
import AdminHeader from "../../components/Header";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import useStyles from "./UploadFiles.styles";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const UploadFiles = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const [item_for_sale, setItem_for_sale] = useState("free");
  const [archivedFileSrc, setArchivedFileSrc] = useState("");
  const [typeOfImage, setTypeOfImage] = useState("image");
  const [categoryItems, setcategoryItems] = useState([]);
  const [imageFileSrc, setImageFileSrc] = useState("");
  const [description, setDescription] = useState("");
  const [imageError, setImageError] = useState("");
  const [usages, setUsages] = useState("free");
  const [category, setCategory] = useState(1);
  const [price, setPrice] = useState("0");
  const [title, setTitle] = useState("");

  const [isArchivedFile, setArchivedFile] = useState(true);
  const [titleError, setTitleError] = useState(false);
  const [isImageFile, setImageFile] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [itemSale, setItemSale] = useState(false);

  //for tag element
  const [tags, setTags] = useState([]);
  const [files, setFiles] = useState([]);
  const [thumbImage, setThumbImage] = useState("");
  const [menuSate, setMenuSate] = useState({ mobileView: false });
  const [isImageDimensionOkay, setImageDimensionOkay] = useState(false);

  const { mobileView } = menuSate;
  // 200 x 200
  // useEffect(() => {
  //     let image = new Image();
  //     image.onload = () => {
  //       // if (image.size ===2000 ) {
  //       //   setImageDimensionOkay(true);
  //       // } else {
  //       //   setImageDimensionOkay(false);
  //       // }
  //     };
  //     image.src = thumbImage.preview;

  //     // Make sure to revoke the data uris to avoid memory leaks
  //     // files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   },
  //   [files, thumbImage]
  // );

  //mobile responsive
  // useEffect(() => {
  //   const setResponsiveness = () => {
  //     return window.innerWidth < 900
  //       ? setMenuSate((prevState) => ({ ...prevState, mobileView: true }))
  //       : setMenuSate((prevState) => ({ ...prevState, mobileView: false }));
  //   };

  //   setResponsiveness();
  //   window.addEventListener("resize", () => setResponsiveness());
  // }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*, .ai,.eps,.psd,.svg ",
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setThumbImage(acceptedFiles[0]);

      const fileData = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      if (files.length === 0) {
        setFiles(fileData);
      } else {
        setFiles((prevFiles) => [...fileData, ...prevFiles]);
      }
    },
  });

  //ProgressBar
  const [progress, setProgress] = useState(0);

  useCallback(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const thumbs = files.map((file, index) => (
    <div className="files-wrapper" key={file.name}>
      <div className={classes.thumb}>
        <div className={classes.thumbInner}>
          <div className={classes.thumbImg}>
            {file?.name?.match(/\.(ai|eps|psd|svg)$/) ? (
              <img
                src={fileThumbnail}
                alt="thumbnail"
                className={classes.fileThumbnail}
              />
            ) : (
              <img src={file.preview} alt="thumbnail" />
            )}
          </div>
          <Typography className={classes.imageTitle}>
            {file.name} <br />
            <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
          </Typography>

          <Box className={classes.progressBar}>
            <LinearProgressWithLabel value={progress} />
          </Box>
          <div className={classes.deleteBtn}>
            <DeleteForeverIcon
              onClick={(e) => removeFile(file, index)}
              className={classes.deleteIcon}
            />
          </div>
        </div>
      </div>
    </div>
  ));

  const removeFile = (file, itemIndex) => {
    const index = files.indexOf(file);

    const removeFiles = files.splice(index, 1);
    setFiles((prevFiles) => [...prevFiles]);
  };

  const isActive = isDragActive && "2px dashed #26AA10";

  const addTags = (event) => {
    event.preventDefault();
    let tag = event.target.value;
    tag = tag.split(",")[0].trim();
    if (tag.length && tags.length < 10) {
      setTags([...tags, tag]);
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

  const loadCategories = (e) => {
    if (categoryItems.length === 0) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories?limit=50`)
        .then(({ data }) => {
          if (data?.status) {
            const sortedData = data?.categories.sort((a, b) => a.id - b.id);
            setcategoryItems(sortedData);
          }
        })
        .catch((error) => console.log("Categories loading error: ", error));
    }
  };

  // const handleSaleChange = (e) => {
  //   setItem_for_sale(e.target.value);
  //   setItemSale(!itemSale);
  //   if (e.target.value === "sale") {
  //     setPrice("5");
  //   } else {
  //     setPrice("0");
  //   }
  // };

  // const handleTypeOfImage = (e) => {
  //   setTypeOfImage(e.target.value);
  // };

  // const handleImageFiles = (e) => {
  //   const file = e.target.files[0];

  //   if (!file?.name?.match(/\.(jpg|jpeg|png|gif)$/) && file !== undefined) {
  //     toast.error("You can only upload .jpg, .jpeg, .png, .gif etc");
  //     setImageFile(false);
  //     return;
  //   } else {
  //     setImageFile(true);
  //     setImageFileSrc(file);
  //   }
  // };

  // const handleArchivedFile = (e) => {
  //   const archivedFile = e.target.files[0];

  //   if (!archivedFile?.name?.match(/\.(zip|ai|eps|psd|svg)$/)) {
  //     toast.error("You can only upload .ai, .eps, .psd, .svg, .zip, .rar");
  //     setArchivedFile(false);
  //     return;
  //   } else {
  //     setArchivedFile(true);
  //     setArchivedFileSrc(archivedFile);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTitleError(false);

    if (!user?.token) {
      toast.error("You have no authorizatoin");
      return;
    }

    if (thumbs.length === 0) {
      setLoading(false);
      toast.error(
        "Please upload a thumbnail preview with the dimention of 850 x 531"
      );
      return;
    } else if (!title) {
      setLoading(false);
      toast.error("The Title field is required.");
      return;
    } else if (title.length < 3 || title.length > 200) {
      setLoading(false);
      toast.error("Title must be between 3 and 200 characters");
      return;
    } else if (tags.length === 0) {
      setLoading(false);
      toast.error("The tag field is required");
      return;
    } else if (category === "0") {
      toast.error("Please select your item category");
      setLoading(false);
      return;
    } else if (!isImageFile) {
      toast.error("Please upload an image file.");
      setLoading(false);
      return;
    } else if (!isArchivedFile) {
      toast.error("The file format should be .zip");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title.toString());
    formData.append("tags", tags.toString());
    formData.append("category", category);
    formData.append("item_for_sale", item_for_sale);
    formData.append("price", price);
    formData.append("usages", usages);
    formData.append("description", description);
    formData.append("preview", thumbImage);
    if (typeOfImage === "image") {
      formData.append("original_file", imageFileSrc);
    } else if (typeOfImage === "zip") {
      formData.append("isZip", true);
      formData.append("zip_folder", archivedFileSrc);
    }
    const url = `${process.env.REACT_APP_API_URL}/images/upload`;
    axios({
      method: "post",
      url,
      data: formData,
      headers: {
        Authorization: user?.token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res?.status === 200) {
          toast.success(res.data.message);
          setLoading(false);
          setTitle("");
          setDescription("");
          setTags([]);
          setCategory("");
          setPrice("");
          setUsages("");
          setItem_for_sale("");
          setFiles([]);
          setTypeOfImage("");
        }
        if (res?.status === 401) {
          localStorage.removeItem("token");
          toast.success("Please login Again");
          history.replace("/login");
          setLoading(false);
        }
      })
      .catch((error) => {
        const { errors } = error.response.data;
        for (let key in errors) {
          toast.error(errors[key]);
        }
        setLoading(false);
      });
  };

  return (
    <Layout title={`Upload || Piktask`}>
      <div className={classes.adminRoot}>
        {mobileView ? null : <Sidebar className={classes.adminSidebar} />}

        <main className={classes.content}>
          <AdminHeader />
          <div className={classes.uploadContainer}>
            <form autoComplete="off" onSubmit={handleSubmit}>
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

              <Heading tag="h2">Upload Your Content</Heading>

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
                      multiple: true,
                    })}
                  />
                  <FontAwesomeIcon icon={faCloudUploadAlt} />

                  <h2 className={classes.imageErrorText}>{imageError}</h2>

                  <Typography
                    className={classes.photoUploadText}
                    variant="body1"
                  >
                    Drag and drop or click to upload an photo
                  </Typography>

                  {isImageDimensionOkay ? (
                    <Typography
                      className={classes.subtitle}
                      variant="body1"
                      style={{ color: "red" }}
                    >
                      Your image dimension exceeds the limit. Preview files must
                      be between 2000px and 10000px on any of the sides.
                    </Typography>
                  ) : (
                    <Typography className={classes.subtitle} variant="body1">
                      Preview files must be between 2000px and 10000px on any of
                      the sides.
                    </Typography>
                  )}
                </div>
              </label>

              {!isImageDimensionOkay && thumbs}

              <div className={classes.singleBorder}></div>
              <div className={classes.uploadBtnRoot}>
                <Button
                  variant="contained"
                  className={classes.uploadBtn}
                  type="submit"
                  disabled={isLoading}
                >
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    className={classes.uploadIcon}
                  />
                  {isLoading ? "Uploading..." : "Upload"}
                </Button>
              </div>
            </form>
          </div>

          <Spacing space={{ height: "2.5rem" }} />

          <Heading className={classes.contentTypeTitle} tag="h2">
            What type of content are you going to upload?
          </Heading>
          <Card className={classes.cardRoot}>
            <CardContent className={classes.cardContent}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  className={classes.imageTypeGrid}
                >
                  <div className={classes.checkboxCol}>
                    {/* <Heading tag="h4"></Heading> */}
                    <Typography c variant="h2">
                      Vectors
                    </Typography>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        EPS and a JPG preview file (with the same name) up to
                        80MB
                      </Typography>
                    </div>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>RGB Color</Typography>
                    </div>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        Preview files must be between 2000px and 10000px on any
                        of the sides.
                      </Typography>
                    </div>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        Titles and tags can be included in preview file. How can
                        I do this?
                      </Typography>
                    </div>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  className={classes.imageTypeGrid}
                >
                  <div className={classes.checkboxCol}>
                    <Heading tag="h2">PSD</Heading>

                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        PSD between 1.5MB and 250MB and a JPG preview file (with
                        the same name)
                      </Typography>
                    </div>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        Color: sRGB, Adobe RGB, Prophoto RGB or P3
                      </Typography>
                    </div>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        Preview files must be between 2000px and 10000px on any
                        of the sides.
                      </Typography>
                    </div>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        Titles and tags can be included in preview file. How can
                        I do this?
                      </Typography>
                    </div>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  className={classes.imageTypeGrid}
                >
                  <div>
                    <Heading tag="h2">Photos</Heading>

                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>Only JPG files Over 0.5MB</Typography>
                    </div>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        Color: sRGB, Adobe RGB, Prophoto RGB or P3
                      </Typography>
                    </div>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        Photos must be between 2000px and 10000px on any of the
                        sides.
                      </Typography>
                    </div>
                    <div className={classes.labelItem}>
                      <CheckCircleRoundedIcon />
                      <Typography>
                        Titles and tags can be included in preview file. How can
                        I do this?
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Footer />
        </main>
      </div>
    </Layout>
  );
};

export default UploadFiles;

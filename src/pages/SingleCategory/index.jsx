import {
  Button,
  ClickAwayListener,
  Container,
  Dialog,
  // DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { useHistory, useLocation, useParams } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";
import downArrowIconWhite from "../../assets/icons/downArrowIconWhite.svg";
import Product from "../../components/ui/Products/Product";
import SectionHeading from "../../components/ui/Heading";
import TagButtons from "../../components/ui/TagButtons";
import SignUpModal from "../Authentication/SignUpModal";
import likeIcon from "../../assets/icons/likeIcon.svg";
import shareIcon from "../../assets/icons/share.svg";
import copyIcon from "../../assets/icons/copy.svg";
import HeroSection from "../../components/ui/Hero";
import authorPhoto from "../../assets/author.png";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import useStyles from "./SingleCategory.styles";
import Spacing from "../../components/Spacing";
import { Link } from "react-router-dom";
import Loader from "../../components/ui/Loader";
import { toast } from "react-toastify";
import Layout from "../../Layout";

const SingleCategory = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const shareUrl = window.location.href;
  const user = useSelector((state) => state.user);

  const imageID = location.pathname.split("=").pop();

  // const [downloadLicenseDialog, setDownloadLicenseDialog] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openCopyLink, setOpenCopyLink] = useState(false);
  const [isFollowing, setFollowing] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [imageDetails, setImageDetails] = useState({});
  const [relatedImage, setRelatedImage] = useState([]);
  const [copySuccess, setCopySuccess] = useState("");
  const [allTags, setAllTags] = useState([]);
  const [open, setOpen] = useState(false);
  const [isLike, setLike] = useState(false);
  const [downloadCount, setDownloadCount] = useState();


  const handleTooltipClose = () => { setOpenCopyLink(false);};

  const handleCopyUrl = (e) => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess("Copied successfully!");
    setOpenCopyLink(true);
  };

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_API_URL}/images/${imageID}`)
      .then(({ data }) => {
        if (data?.success) {
          setImageDetails(data?.detail);
          if (data?.related_tags) {
            const tags = data?.related_tags;
            setAllTags(tags.filter((e) => e));
          }

          if (user?.token) {
            axios
              .get(
                `${process.env.REACT_APP_API_URL}/contributor/follow_status/${data.detail.user_id}`,
                { headers: { Authorization: user.token },}
              )
              .then((response) => {
                if (response.data.status) {
                  setFollowing(true);
                } else {
                  setFollowing(false);
                }
              });
          }
        }
      })
      .catch((error) => console.log(error));

      if (user?.token) {
        axios
          .get(`${process.env.REACT_APP_API_URL}/images/${imageID}/like_status`, 
            { headers: { Authorization: user.token },}
          )
          .then(({ data }) => {
            if (!data?.status) {
              setLike(false);
            } else if (data?.status) {
              setLike(true);
            } else {
              console.log("Image like status error");
            }
          })
          .catch((error) => console.log("Like status error: ", error));
      }

    // related product API
    let relatedImageURL;

    if (user && user?.id) {
      relatedImageURL = `${process.env.REACT_APP_API_URL}/images/${imageID}/related_image?user_id=${user?.id}`;
    } else {
      relatedImageURL = `${process.env.REACT_APP_API_URL}/images/${imageID}/related_image`;
    }
    axios
      .get(relatedImageURL)
      .then(({ data }) => {
        if (data?.status) {
          setRelatedImage(data.images);
          setLoading(false);
        }
      })
      .catch((error) => console.log("Related image error: ", error));
  }, [imageID, user]);

  const handleFollower = () => {
    if ((!user || !user.token) && window.innerWidth > 900) {
      setOpenAuthModal(true);
    } else if ((!user || !user.token) && window.innerWidth < 900) {
      history.push(`/login?url=${location.pathname}`);
    } else if (user.id !== imageDetails?.user_id && user.token) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/contributor/followers/${imageDetails?.user_id}`,
          {},
          { headers: { Authorization: user.token },}
        )
        .then((response) => {
          if (response?.status === 200) {
            setFollowing(!isFollowing);
          }
        });
    } else {
      toast.error("You can't follow yourself");
    }
  };

  const handleLikeBtn = () => {
    if ((!user || !user.token) && window.innerWidth > 900) {
      setOpenAuthModal(true);
    } else if ((!user || !user.token) && window.innerWidth < 900) {
      history.push(`/login?url=${location.pathname}`);
    } else if (user.id !== imageDetails?.user_id && user.token) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/images/${imageID}/like`,
          {},
          { headers: { Authorization: user.token },}
        )
        .then(({ data }) => {
          if (data?.status) {
            setLike(true);
          } else if (!data?.status) {
            toast.error(data.message);
            setLike(true);
          } else {
            console.log("Something wrong with the like");
          }
        })
        .catch((err) => console.log("Like error: ", err));
    } else {
      toast.error("You can't like yourself");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Handle download image
  const handleDownload = (e) => {
    e.preventDefault();

    const downloadAPI = {
      url: `${process.env.REACT_APP_API_URL}/images/${imageID}/download/`,
      method: "get",
    };

    if (user && user.token) {
      downloadAPI.headers = { Authorization: user.token,};
      setButtonLoading(true);
    }
    axios(downloadAPI)
      .then(({ data }) => {
        if (data.url) {
          axios
            .get(data.url, { responseType: "blob",})
            .then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute(
                "download",
                `${imageDetails?.title.replace(/ /g, "_")}.${data.extension}`
              );
              document.body.appendChild(link);
              link.click();

              const prevState = imageDetails?.user?.images?.total_downloads;
              setDownloadCount(prevState + 1);
              setButtonLoading(false);
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      })
      .catch((error) => {
        console.log("catch", error.response);
        if(user?.token){
          toast.error(error.response.data.message);
        } else {
          toast.error(error.response.data.message);
          setOpenAuthModal(true);
        }
      });
  };

  const intToString = (value) => {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = parseFloat(
      (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
        2
      )
    );
    if (shortValue % 1 !== 0) {
      shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
  };

  return (
    <Layout
      title={`${imageDetails?.title} || Piktask`}
      description={`${imageDetails?.description} || Piktask`}
    >
      <Header />
      <HeroSection size="medium" />
      <Container className={classes.containerWrapper}>
        <Grid
          container
          spacing={4}
          classes={{ container: classes.itemDetailsContainer }}
        >
          <Grid item md={7} sm={6} xs={12} className={classes.productColumn}>
            <div className={classes.imageWrapper}>
              <img
                title={imageDetails.title}
                className={classes.image}
                src={encodeURI(imageDetails?.preview)}
                alt={imageDetails?.original_name}
              />
            </div>
          </Grid>
          <Grid item md={5} sm={6} xs={12} className={classes.productColumn}>
            <div className={classes.productDetails}>
              <Typography className={classes.title} variant="h2">
                {imageDetails?.title}
              </Typography>

              <div className={classes.buttons}>
                <Typography className={classes.creationDate}>
                  {imageDetails?.creation_ago}
                </Typography>
                <Button className={classes.button} onClick={handleClickOpen}>
                  <img
                    className={classes.buttonIcon}
                    src={shareIcon}
                    alt="Share"
                  />
                  Share
                </Button>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <div>
                    <Tooltip
                      PopperProps={{
                        disablePortal: true,
                      }}
                      onClose={handleTooltipClose}
                      open={openCopyLink}
                      placement="top"
                      arrow
                      leaveDelay={1500}
                      title="Copied successfully!"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        className={classes.button}
                        onClick={() => handleCopyUrl()}
                      >
                        <img
                          className={classes.buttonIcon}
                          src={copyIcon}
                          alt="Copy Link"
                        />
                        Copy Link
                      </Button>
                    </Tooltip>
                  </div>
                </ClickAwayListener>
              </div>

              <Grid container className={classes.detailsContainer}>
                <Grid item xs={6} className={classes.gridItem}>
                  <div className={classes.singleItem}>
                    <Typography>
                      <strong>Image ID: </strong>
                      {imageDetails?.id}
                    </Typography>
                    <Typography>
                      <strong>Image Size </strong>
                      {imageDetails?.height} x {imageDetails?.width}
                    </Typography>
                  </div>
                  <div className={classes.singleItem}>
                    <Typography>
                      <strong>Copyright Information: </strong><br />
                      Piktask
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={6} className={classes.gridItem}>
                  <div className={classes.singleItem}>
                    <Typography>
                      <strong>Created: </strong>
                      {moment(imageDetails?.createdAt).format("LL")}
                    </Typography>
                    <Typography>
                      <strong>Category: </strong>
                      {imageDetails?.category?.name}
                    </Typography>
                  </div>
                  <div className={classes.singleItem}>
                    <Typography>
                      <strong>Scope of authorization: </strong>
                      personal/enterprise
                    </Typography>
                  </div>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                  <Typography>Share: </Typography>
                  <div>
                    <PinterestShareButton url={shareUrl}>
                      <PinterestIcon size={25} style={{ marginLeft: "1rem" }} round={true} />
                    </PinterestShareButton>

                    <EmailShareButton url={shareUrl}>
                      <EmailIcon size={25} style={{ marginLeft: "0.4rem" }} round={true} />
                    </EmailShareButton>

                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon size={25} style={{ marginLeft: "0.4rem" }} round={true} />
                    </FacebookShareButton>

                    <FacebookMessengerShareButton url={shareUrl}>
                      <FacebookMessengerIcon size={25} style={{ marginLeft: "0.4rem" }} round={true} />
                    </FacebookMessengerShareButton>

                    <TwitterShareButton url={shareUrl}>
                      <TwitterIcon size={25} style={{ marginLeft: "0.4rem" }} round={true} />
                    </TwitterShareButton>

                    <LinkedinShareButton url={shareUrl}>
                      <LinkedinIcon size={25} style={{ marginLeft: "0.4rem" }} round={true} />
                    </LinkedinShareButton>

                    <TelegramShareButton url={shareUrl}>
                      <TelegramIcon size={25} style={{ marginLeft: "0.4rem" }} round={true} />
                    </TelegramShareButton>
                  </div>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item className={classes.authorArea}>
                  <div className={classes.authorProfile}>
                    <Link to={`/author/${imageDetails?.user?.username}`}>
                      {imageDetails?.user?.avatar ? (
                        <img
                          className={classes.authorImg}
                          src={imageDetails?.user?.avatar}
                          alt={imageDetails?.user?.username}
                        />
                      ) : (
                        <img
                          className={classes.authorImg}
                          src={authorPhoto}
                          alt="AuthorPhoto"
                        />
                      )}
                    </Link>

                    <div>
                      <Typography
                        className={classes.profileName}
                        variant="h3"
                        component={Link}
                        to={`/author/${imageDetails?.user?.username}`}
                      >
                        {imageDetails?.user?.username}
                      </Typography>
                      <Typography
                        className={classes.resourceInfo}
                        variant="body2"
                      >
                        {imageDetails?.user?.total_resources} Resources
                      </Typography>
                    </div>
                  </div>
                  {user.id !== imageDetails?.user_id && (
                    <Button
                      className={`${classes.authorBtn} ${classes.followBtn}`}
                      onClick={handleFollower}
                    >
                      {!isFollowing ? <>Follow</> : <>Following</>}
                    </Button>
                  )}
                </Grid>
              </Grid>

              {/* <div className={classes.premiumInfo}>
                <Typography variant="h4">
                  Premium User:
                  <Button
                    className={classes.premiumViewBtn}
                    component={Link}
                    to={`/subscription`}
                  >
                    View Plans
                  </Button>
                </Typography>
                <Typography>- High-Speed Unlimited Download</Typography>
                <Typography>
                  - For commercial use{" "}
                  <Link to="!#" className={classes.moreInfoBtn}>
                    More info
                  </Link>
                </Typography>
                <div>
                  <div className={classes.licenseButton}>
                    <Typography>Images license agreement</Typography>
                    <Button
                      className={classes.licenseBtn}
                      onClick={handleDialogOpen}
                    >
                      Download License
                    </Button>
                  </div>
                  <Dialog
                    className={classes.licenseDialog}
                    open={downloadLicenseDialog}
                    onClose={handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle className={classes.licenseTitle}>
                      {"Piktast License"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleDialogClose}
                        color="primary"
                        autoFocus
                      >
                        Download
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <Typography>&copy; Copyright : Piktask</Typography>
              </div> */}

              <div className={classes.buttonGroup}>
                <div className={classes.downloadWrapper}>
                  {buttonLoading ? (
                    <Button className={classes.downloadingBtn}>
                      <img src={downArrowIconWhite} alt="Download" />
                      Downloading...
                    </Button>
                  ) : (
                    <Button
                      className={classes.downloadBtn}
                      onClick={handleDownload}
                    >
                      <img src={downArrowIconWhite} alt="Download" />
                      Download
                    </Button>
                  )}
                  <div className={classes.downloadedImage}>
                    {downloadCount
                      ? intToString(downloadCount)
                      : intToString(
                          imageDetails?.user?.images?.total_downloads
                        )}
                  </div>
                </div>
                {user.id !== imageDetails?.user_id && (
                  <>
                    {!isLike ? (
                      <Button
                        className={classes.likeBtn}
                        onClick={handleLikeBtn}
                      >
                        <img src={likeIcon} alt="like Button" />
                      </Button>
                    ) : (
                      <Tooltip
                        title="You already liked the image."
                        placement="top"
                        arrow
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button
                          className={classes.likedBtn}
                          onClick={handleLikeBtn}
                        >
                          <FavoriteIcon />
                        </Button>
                      </Tooltip>
                    )}
                  </>
                )}
              </div>
            </div>
          </Grid>
        </Grid>

        {/* Sign up modal section*/}
        <SignUpModal
          openAuthModal={openAuthModal}
          setOpenAuthModal={setOpenAuthModal}
        />

        <Spacing space={{ height: "2.5rem" }}></Spacing>
        <SectionHeading
          title="Related Products"
          subtitle="Top website templates with the highest sales volume."
          size="large"
        />

        {/* <Products /> */}
        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <Loader />
          ) : (
            relatedImage?.map((photo) => (
              <Grid
                key={photo.image_id}
                item
                xs={6}
                sm={4}
                md={3}
                className={classes.productItem}
              >
                <Product photo={photo} />
              </Grid>
            ))
          )}
        </Grid>

        {/* BUTTONS OF TAGS */}
        <TagButtons allTags={allTags} />

        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div className={classes.socialShareWrapper}>
            <DialogTitle className={classes.socialShareTitle}>
              {"Use image social link"}
            </DialogTitle>
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <DialogContent dividers>
            <div
              style={{
                padding: "2rem",
                minWidth: "300px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <PinterestShareButton url={shareUrl}>
                <PinterestIcon size={40} style={{ margin: "0.4rem" }} round={true} />
              </PinterestShareButton>

              <EmailShareButton url={shareUrl}>
                <EmailIcon size={40} style={{ margin: "0.4rem" }} round={true} />
              </EmailShareButton>

              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} style={{ margin: "0.4rem" }} round={true} />
              </FacebookShareButton>

              <FacebookMessengerShareButton url={shareUrl}>
                <FacebookMessengerIcon size={40} style={{ margin: "0.4rem" }} round={true} />
              </FacebookMessengerShareButton>

              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={40} style={{ margin: "0.4rem" }} round={true} />
              </TwitterShareButton>

              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={40} style={{ margin: "0.4rem" }} round={true} />
              </LinkedinShareButton>

              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={40} style={{ margin: "0.4rem" }} round={true} />
              </TelegramShareButton>
            </div>
          </DialogContent>
        </Dialog>
      </Container>
      <Footer />
    </Layout>
  );
};

export default SingleCategory;

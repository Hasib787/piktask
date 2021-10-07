import CompleteRegistration from "./pages/Authentication/EmailVerification";
import EarningManagement from "./admin/pages/EarningManagement";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AccountSettings from "./admin/pages/AccountSettings";
import TagRelatedProducts from "./pages/TagRelatedProducts";
import AdminDashboard from "./admin/pages/AdminDashboard";
import BecomeContributor from "./pages/BecomeContributor";
import { ThemeProvider } from "@material-ui/core/styles";
import PendingFiles from "./admin/pages/PendingFiles";
import RejectFiles from "./admin/pages/RejectFiles";
import SingleCategory from "./pages/SingleCategory";
import UploadFiles from "./admin/pages/UploadFiles";
import "react-toastify/dist/ReactToastify.min.css";
import SearchResults from "./pages/SearchResults";
import AuthorProfile from "./pages/AuthorProfile";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Subscription from "./pages/Subscription";
import Revision from "./admin/pages/Revision";
import Sellers from "./pages/Sellers";
import Publish from "./admin/pages/Publish";
import Categories from "./pages/Categories";
import { useDispatch, useSelector } from "react-redux";
import theme from "./components/ui/Theme";
import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { auth } from "./database";
import axios from "axios";
import {
  ConfirmSignup,
  Help,
  Home,
  Login,
  NotFoundPage,
  Pricing,
  Registration,
  ResetPassword,
  Category,
  Recent,
  PopularImages,
  TrendingSearch,
  TermsConditions,
  CopyrightInfo,
  LicenseAgreement,
  CookiesPolicy,
  Support,
  Contact,
} from "./pages";
import GuidLine from "./pages/GuidLine";
import SingleBlogPost from "./pages/SingleBlogPost";
import AllBlogs from "./pages/AllBlogs";
import UserProfile from "./userDashboard/pages/UserProfile";
import FavoriteItems from "./userDashboard/pages/FavoriteItems";
import DownloadItems from "./userDashboard/pages/DownloadItems";
import UserFollowing from "./userDashboard/pages/UserFollowing";
import DeviceActivity from "./userDashboard/pages/DeviceActivity";
import UserSubscription from "./userDashboard/pages/UserSubscription";
import JoinNow from "./admin/pages/JoinNow";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check firebase auth state
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });
    
    // Check username/password auth state
    const setUserToken = window.localStorage.getItem("token") || "";
    if (setUserToken) {
      const decode = jwt_decode(setUserToken.split(" ")[1]);
      if (decode.email) {
        dispatch({
          type: "SET_USER",
          payload: {
            ...decode,
            token: setUserToken,
          },
        });
      }
    }


    // Popular categories API integration
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories/popular`)
      .then(({ data }) => {
        if (data?.status) {
          dispatch({
            type: "POPULAR_CATEGORIES",
            payload: [...data.categories],
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // Author last file API
    // if (user?.token) {
    //   axios
    //     .get(`${process.env.REACT_APP_API_URL}/contributor/earning/images`, {
    //       headers: { Authorization: user?.token },
    //     })
    //     .then(({ data }) => {
    //       if (data?.status) {
    //         dispatch({
    //           type: "TOTAL_IMAGE_EARNING",
    //           payload: [...data?.images],
    //         });
    //       }
    //     });
    // }

    return () => unsubscribe();
  }, [dispatch, user?.token]);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/popular" component={Home} /> */}
        {/* Admin */}
        {/* <PrivateRoute
          exact
          path="/contributor/dashboard"
          component={AdminDashboard}
        /> */}

        {/* Contributor Dashboard */}
        <Route exact path="/contributor/dashboard" component={AdminDashboard} />
        <Route exact path="/contributor/upload" component={UploadFiles} />
        <Route exact path="/contributor/pending" component={PendingFiles} />
        <Route exact path="/contributor/revision" component={Revision} />
        <Route exact path="/contributor/reject" component={RejectFiles} />
        <Route exact path="/contributor/publish" component={Publish} />
        <Route exact path="/contributor/earnings" component={EarningManagement} />
        <Route exact path="/contributor/guidLine" component={GuidLine} />
        <Route exact path="/contributor/settings" component={AccountSettings} />
        <Route exact path="/contributor/join" component={JoinNow} />

        {/* user Dashboard */}
        <PrivateRoute exact path="/user/profile" component={UserProfile} />
        <PrivateRoute exact path="/user/favorites" component={FavoriteItems} />
        <PrivateRoute exact path="/user/downloads" component={DownloadItems} />
        <PrivateRoute exact path="/user/following" component={UserFollowing} />
        <PrivateRoute exact path="/user/devices" component={DeviceActivity} />
        <PrivateRoute exact path="/user/subscription" component={UserSubscription} />

        <Route exact path="/termsConditions" component={TermsConditions} />
        <Route exact path="/copyrightInformation" component={CopyrightInfo} />
        <Route exact path="/licenseAgreement" component={LicenseAgreement} />
        <Route exact path="/cookiesPolicy" component={CookiesPolicy} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/contact" component={Contact} />

        {/* <Route exact path="/categories" component={Home} /> */}
        <Route exact path="/start-selling" component={BecomeContributor} />
        <Route exact path="/email/verify" component={CompleteRegistration} />

        <Route exact path="/vector" component={Category} />
        <Route exact path="/psd" component={Category} />
        <Route exact path="/photos" component={Category} />
        <Route exact path="/background" component={Category} />
        <Route exact path="/template" component={Category} />
        <Route exact path="/png" component={Category} />

        <Route exact path="/category" component={Category} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/help" component={Help} />

        {/* Authentication Route */}
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/confirm-signup" component={ConfirmSignup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset-password" component={ResetPassword} />

        <Route exact path="/subscription" component={Subscription} />
        <Route exact path="/sellers" component={Sellers} />
        <Route exact path="/categories" component={Categories} />
        <Route
          exact
          path="/search/trending_search"
          component={TrendingSearch}
        />

        <Route exact path="/images/recent_images" component={Recent} />
        <Route exact path="/images/popular_images" component={PopularImages} />

        <Route exact path="/search/:keywords" component={SearchResults} />
        <Route exact path="/allBlogs/blogs" component={AllBlogs} />
        <Route exact path="/blog/:id" component={SingleBlogPost} />
        <Route exact path="/tag/:tagName" component={TagRelatedProducts} />
        <Route exact path="/:username" component={AuthorProfile} />
        <Route exact path="/category/:catName" component={Category} />
        <Route exact path="/images/:id" component={SingleCategory} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;

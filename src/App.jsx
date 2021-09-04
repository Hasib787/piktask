import CompleteRegistration from "./pages/Authentication/EmailVerification";
import EarningManagement from "./admin/pages/EarningManagement";
import PrivateRoute from "./redux/PrivateRoute/PrivateRoute";
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
import SingleBlogPost from "./pages/SinglePost";
import Subscription from "./pages/Subscription";
import Revision from "./admin/pages/Revision";
import Sellers from "./components/ui/Sellers";
import Publish from "./admin/pages/Publish";
import Categories from "./pages/Categories";
import { useDispatch } from "react-redux";
import theme from "./components/ui/Theme";
import React, { useEffect } from "react";
import Category from "./pages/Category";
import Recent from "./pages/Recent";
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
} from "./pages";

const App = () => {
  const dispatch = useDispatch();

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

    // recentProducts();
    getPopularPhotos();
    return () => unsubscribe();
  }, []);

  function getPopularPhotos() {
    try {
      axios
      .get(`${process.env.REACT_APP_API_URL}/categories/popular`)
      .then(({ data }) => {
        if (data?.status) {
          dispatch({
            type: "POPULAR_CATEGORIES",
            payload: [...data.categories],
          });
        }
      });
    } catch (error) { console.log(error); }
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/popular" component={Home} /> */}
        {/* Admin */}
        <PrivateRoute
          exact
          path="/admin/dashboard"
          component={AdminDashboard}
        />
        <Route exact path="/admin/upload" component={UploadFiles} />
        <Route exact path="/admin/pending" component={PendingFiles} />
        <Route exact path="/admin/revision" component={Revision} />
        <Route exact path="/admin/reject" component={RejectFiles} />
        <Route exact path="/admin/publish" component={Publish} />
        <Route exact path="/admin/earnings" component={EarningManagement} />
        <Route exact path="/admin/settings" component={AccountSettings} />

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
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/confirm-signup" component={ConfirmSignup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/subscription" component={Subscription} />
        <Route exact path="/sellers" component={Sellers} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/images/recent_images" component={Recent} />
        <Route exact path="/search/:keywords" component={SearchResults} />
        <Route exact path="/blog/:id" component={SingleBlogPost} />
        <Route exact path="/tag/:tagName" component={TagRelatedProducts} />
        <Route exact path="/:username" component={AuthorProfile} />
        <Route exact path="/category/:catName" component={Category} />
        <Route exact path="/photo/:id" component={SingleCategory} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;

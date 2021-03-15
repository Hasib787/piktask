import { ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AccountSettings from "./admin/pages/AccountSettings";
import AdminDashboard from "./admin/pages/AdminDashboard";
import EarningManagement from "./admin/pages/EarningManagement";
import PendingFiles from "./admin/pages/PendingFiles";
import Publish from "./admin/pages/Publish";
import RejectFiles from "./admin/pages/RejectFiles";
import Revision from "./admin/pages/Revision";
import UploadFiles from "./admin/pages/UploadFiles";
import theme from "./components/ui/Theme";
import { auth } from "./database";
import {
  ForgetPassword,
  Help,
  Home,
  Login,
  Pricing,
  Registration,
} from "./pages";
import CompleteRegistration from "./pages/Authentication/EmailVerification";
import AuthorProfile from "./pages/AuthorProfile";
import Category from "./pages/Category";
import Contributor from "./pages/Contributor";
import SingleCategory from "./pages/SingleCategory";
import SingleBlogPost from "./pages/SinglePost";
import TagTemplate from "./pages/TagTemplate";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Admin */}
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/upload" component={UploadFiles} />
        <Route exact path="/admin/pending" component={PendingFiles} />
        <Route exact path="/admin/revision" component={Revision} />
        <Route exact path="/admin/reject" component={RejectFiles} />
        <Route exact path="/admin/publish" component={Publish} />
        <Route exact path="/admin/earnings" component={EarningManagement} />
        <Route exact path="/admin/settings" component={AccountSettings} />

        <Route exact path="/categories" component={Home} />
        <Route exact path="/email/verify" component={CompleteRegistration} />
        <Route exact path="/vector" component={Category} />
        <Route exact path="/psd" component={Category} />
        <Route exact path="/background" component={Category} />
        <Route exact path="/template" component={Category} />
        <Route exact path="/png-images" component={Category} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/new-password" component={ForgetPassword} />
        <Route exact path="/become-contributer" component={Contributor} />
        <Route exact path="/blog/:id" component={SingleBlogPost} />
        <Route exact path="/tag/:id" component={TagTemplate} />
        <Route exact path="/author/:id" component={AuthorProfile} />
        <Route exact path="/:category/:id" component={SingleCategory} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;

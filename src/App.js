import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./common/notFound/NotFound";
import MoveTop from "./components/MoveTop";
import blue from "@material-ui/core/colors/blue";
import BlogDetail from "./views/blogDetail/BlogDetail";

const AppHome = React.lazy(() => import("./views/home/Home"));
const Login = React.lazy(() => import("./views/login/Login"));
const SignIn = React.lazy(() => import("./views/signIn/SignIn"));
const Lookup = React.lazy(() => import("./views/lookup/Lookup"));
const ForgotPassword = React.lazy(() =>
  import("./views/forgotPassword/ForgotPassword")
);
const VerifyEmail = React.lazy(() => import("./views/verifyEmail"));
const SuccessVerifyEmail = React.lazy(() =>
  import("./views/SuccessVerifyEmail")
);
const Userhome = React.lazy(() => import("./views/user/Userhome"));
const UserInformation = React.lazy(() =>
  import("./views/user/UserInformation")
);
const BookCoachingService = React.lazy(() =>
  import("./views/user/BookCoachingService")
);
const UserSearchHistory = React.lazy(() =>
  import("./views/user/UserSearchHistory")
);
const UserPurchased = React.lazy(() => import("./views/user/UserPurchased"));
const Affiliate = React.lazy(() => import("./views/user/Affiliate"));
const Blog = React.lazy(() => import("./views/blog/Blog"));
const theme = createTheme({
  palette: {
    primary: {
      light: "#f6e58d",
      main: "#f69320",
      dark: "#f39c12",
    },
    secondary: {
      main: "#bdc3c7",
    },
  },

  typography: {
    h1: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
      "@media (max-width:1200px) and (min-width:601px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media only screen and (min-width: 768px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
      "@media (max-width:1200px) and (min-width:601px)": {
        fontSize: "3rem",
      },
    },
    h4: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
      "@media only screen and (min-width: 768px)": {
        fontSize: "1.7rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    h5: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
    },
    subtitle1: {
      "@media only screen and (min-width: 768px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
  },
});
function App() {
  useEffect(() => {
    // component did mount
    const unregisterAuthObserver = async (user) => {};

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={AppHome}></Route>
              <Route exact path="/dang-nhap" component={Login}></Route>
              <Route exact path="/dang-ky" component={SignIn}></Route>
              <Route exact path="/tra-cuu" component={Lookup}></Route>

              <Route
                exact
                path="/verify/:token"
                component={SuccessVerifyEmail}
              ></Route>

              <Route
                exact
                path="/quen-mat-khau"
                component={ForgotPassword}
              ></Route>
              <Route exact path="/xem-online" component={Userhome}></Route>

              <Route
                exact
                path="/xac-thuc-email"
                component={VerifyEmail}
              ></Route>

              <Route
                exact
                path="/xem-online/thong-tin-tai-khoan"
                component={UserInformation}
              ></Route>
              <Route
                exact
                path="/xem-online/dat-lich-coaching"
                component={BookCoachingService}
              ></Route>
              <Route
                exact
                path="/xem-online/lich-su-tra-cuu"
                component={UserSearchHistory}
              ></Route>
              <Route
                exact
                path="/xem-online/purchased"
                component={UserPurchased}
              ></Route>

              <Route
                exact
                path="/xem-online/dang-ky-hop-tac"
                component={Affiliate}
              ></Route>
              <Route exact path="/blog" component={Blog}></Route>
              <Route exact path="/blog/:id" component={BlogDetail}></Route>

              <Route path="*" component={NotFound} />
            </Switch>
            <MoveTop />
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;

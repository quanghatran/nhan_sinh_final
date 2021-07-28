import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./common/notFound/NotFound";
import MoveTop from "./components/MoveTop";

const AppHome = React.lazy(() => import("./views/home/Home"));
const Login = React.lazy(() => import("./views/login/Login"));
const SignIn = React.lazy(() => import("./views/signIn/SignIn"));
const Lookup = React.lazy(() => import("./views/lookup/Lookup"));
const Userhome = React.lazy(() => import("./views/user/Userhome"));
const UserInformation = React.lazy(() =>
  import("./views/user/UserInformation")
);
const UserSearchHistory = React.lazy(() =>
  import("./views/user/UserSearchHistory")
);
const UserPurchased = React.lazy(() => import("./views/user/UserPurchased"));

function App() {
  // const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state
  // handle quan ly on auth sate change
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    // component did mount
    const unregisterAuthObserver = async (user) => {
      // setIsSignedIn(!!user);
      if (!user) {
        // user logs out, handle something here
        console.log("user is not logged in");

        return;
      }

      // TODO: store state into redux store
      // const token = await user.getIdToken();
      console.log("logged in user token: ", user);

      // get me when signed in
      // try {
      // 	const actionResult = await dispatch(getMe());

      // 	const currentUser = unwrapResult(actionResult);
      // 	console.log("logged in user: ", currentUser);
      // } catch (error) {
      // 	console.log("failed to login: ", error.message);
      // }

      // console.log("logged in user:", user.displayName);
      // const token = await user.getIdToken();
      // console.log("token of user:", token);
    };

    // component will unmount
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AppHome}></Route>
            <Route path="/dang-nhap" component={Login}></Route>
            <Route path="/dang-ky" component={SignIn}></Route>
            <Route path="/tra-cuu" component={Lookup}></Route>
            <Route exact path="/xem-online" component={Userhome}></Route>

            <Route
              path="/xem-online/thong-tin-tai-khoan"
              component={UserInformation}
            ></Route>
            <Route
              path="/xem-online/lich-su-tra-cuu"
              component={UserSearchHistory}
            ></Route>
            <Route
              path="/xem-online/purchased"
              component={UserPurchased}
            ></Route>
            <Route path="*" component={NotFound} />
          </Switch>
          <MoveTop />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

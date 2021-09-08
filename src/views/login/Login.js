import { Button, Grid, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import HomeIcon from "@material-ui/icons/Home";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Alert from "@material-ui/lab/Alert";
import clsx from "clsx";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginServiceApi from "../../api/loginServiceApi";
import logo from "../../images/logo_satsi.png";
import "./Login.scss";
import { addUser, verifyEmail } from "./loginSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  textField: {
    width: "35ch",
  },
  spaceTop: {
    marginTop: "1rem",
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#d4d4d4",
      },
      "&:hover fieldset": {
        borderColor: "#d4d4d4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
  },
})(TextField);

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const dataSignIn = {
      phone: phone,
      password: password,
    };

    const fetchLoginData = async () => {
      setIsLoading(true);
      try {
        const request = await loginServiceApi.postLogin(dataSignIn);

        if (request.status === 403) {
          const action = verifyEmail(request.data.data.email);

          dispatch(action);

          setTimeout(() => {
            //history.push("/xac-thuc-email");
            setIsLoading(false);
          }, 1500);

          setErrorMessage(error);

          throw request.data.message;
        } else if (request.status === 401) {
          setIsLoading(false);
          setPassword("");
          throw "Tài khoản hoặc mật khẩu không chính xác";
        } else {
          localStorage.setItem("user", JSON.stringify(request.data));
          localStorage.setItem("userToken", request.data.token);
          localStorage.setItem("userName", request.data.name);
          setSuccess(true);
          setTimeout(() => {
            setIsLoading(false);
            setSuccess(false);
            const action = addUser(request.data);
            dispatch(action);

            history.push("/xem-online");
          }, 2000);
        }
      } catch (error) {
        console.log(error);

        setErrorMessage(error);
        setError(true);

        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    };

    fetchLoginData();
  };

  return (
    <div className="login-wrapper">
      <div className="loginCover">
        <div className="container-fluid">
          <div className="contentLogin">
            <Typography variant="h4" component="h1" align="center">
              <Grid container>
                <Grid item xs={12}>
                  {" "}
                  <Button href="/">
                    <img src={logo} alt="logo" />
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    style={{ margin: "1rem 0" }}
                  >
                    Minh triết nhân sinh
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    style={{ fontStyle: "italic" }}
                  >
                    Đăng nhập
                  </Typography>
                </Grid>
              </Grid>
            </Typography>

            <div className="loginFiled">
              <form className={classes.root} onSubmit={handleSubmitLogin}>
                {error && (
                  <Alert
                    variant="filled"
                    severity="error"
                    style={{ marginTop: "1rem", justifyContent: "center" }}
                  >
                    {errorMessage}
                  </Alert>
                )}
                {success && (
                  <Alert
                    variant="filled"
                    severity="success"
                    style={{ marginTop: "1rem", justifyContent: "center" }}
                  >
                    Đăng nhập thành công
                  </Alert>
                )}
                <Grid container direction="column">
                  <Grid item>
                    <CssTextField
                      size="medium"
                      variant="outlined"
                      margin="normal"
                      type="number"
                      label="Số điện thoại đăng nhập"
                      className={clsx(classes.textField)}
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      color="secondary"
                      autoComplete="off"
                    />
                  </Grid>

                  <Grid item>
                    <FormControl
                      className={clsx(classes.textField, classes.spaceTop)}
                      variant="outlined"
                      size="medium"
                      color="secondary"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Mật khẩu
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="off"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        labelWidth={70}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                {isLoading ? (
                  <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <CircularProgress color="secondary" />
                  </div>
                ) : (
                  <div>
                    <div className="navigateBlock signInBlock">
                      <a
                        className="forgotPassword"
                        href="/quen-mat-khau"
                        style={{ marginRight: 10 }}
                      >
                        Quên mật khẩu?
                      </a>
                      {/* <a
												className='forgotPassword'
												href='/xac-thuc-email'
												style={{ marginLeft: 10 }}>
												Xác thực email
											</a> */}
                    </div>
                    <Button
                      size="large"
                      type="submit"
                      color="primary"
                      variant="contained"
                    >
                      đăng nhập
                    </Button>
                    <div className="navigateBlock signInBlock">
                      <a className="signIn" href="/dang-ky">
                        Đăng ký tài khoản!
                      </a>
                    </div>
                  </div>
                )}
              </form>
              {!isLoading && (
                <Button href="/" startIcon={<HomeIcon />} color="primary">
                  Quay Về Trang Chủ
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

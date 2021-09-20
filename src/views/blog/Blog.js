import React, { useState, useEffect } from "react";
import blogApi from "../../api/blogApi";
import Background from "../../common/background/Background";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

import Grid from "@material-ui/core/Grid";
import Header from "../../common/header/Header";
import Footer from "../../common/newfooter/NewFooter";
import bannerImg from "../../images/imgSlider2.jpg";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import post1 from "../../images/post1.jpg";
import post2 from "../../images/post2.jpg";
import post3 from "../../images/post3.jpg";
import post4 from "../../images/post4.jpg";
import post5 from "../../images/post5.jpg";
import post6 from "../../images/post6.jpg";
import post7 from "../../images/post7.jpg";
import post8 from "../../images/post8.jpg";
import post9 from "../../images/post9.jpg";
import post10 from "../../images/post10.jpg";
import ads from "../../images/ads.jpg";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  banner: {
    background: `url(${bannerImg}) center no-repeat`,
    marginTop: "75px",
    width: "100vw",
    height: "370px",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    alignItems: "center",
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
      zIndex: 0,
    },
  },
  heading: {
    color: "#fff",
    paddingLeft: "20px",
  },
  headingContainer: {
    position: "relative",
    zIndex: 1,
  },
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange !important",
    },
  },
  img: {
    width: "100%",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      height: "30vw",
    },
  },
  aboutSection: {
    color: "#fff",
    marginTop: "20px",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  ads: {
    width: "100%",
    height: "70%",
  },
  stickyBar: {
    maxHeight: "180vh",
    position: "sticky",
    top: 20,
  },
  pagination: {
    margin: "0 0 50px auto",
    "& button": {
      color: "#fff",
    },
    "& .Mui-selected": {
      color: "#fff",
    },
  },
}));

const Blog = () => {
  const history = useHistory();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [amountOfBlogs, setAmountOfBlogs] = useState(null);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const amoutOfPages = Math.ceil(amountOfBlogs / 5);
  const classes = useStyles();
  useEffect(() => {
    const params = {
      page: page,
    };
    const fetchBlog = async () => {
      const res = await blogApi.getAllBlog(params);
      console.log(res.data);
      setBlogs(res.data.data);
      setAmountOfBlogs(res.data.length);
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [page]);
  useEffect(() => {
    const params = {
      page: 1,
    };
    const fetchPopularBlogs = async () => {
      const res = await blogApi.getAllBlog(params);
      setPopularBlogs(res.data.data);
    };
    fetchPopularBlogs();
  }, []);
  console.log(blogs, amoutOfPages);
  const handleChangePage = (e, value) => {
    setPage(value);
  };
  const viewDetailBlog = (id) => {
    history.push(`/blog/${id}`);
    console.log(id);
  };

  return (
    <React.Fragment>
      <Background />
      <Header />
      <div className={classes.banner}>
        <Container maxWidth="lg" className={classes.headingContainer}>
          <Typography variant="h2" className={classes.heading}>
            Trang chủ/Blog
          </Typography>
        </Container>
      </div>
      <Container maxWidth="lg" style={{ marginTop: 100 }}>
        <Grid container justifyContent="space-between">
          <Grid item container md={8} sm={8} xs={8}>
            {blogs[0] &&
              blogs.map((item, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    container
                    md={12}
                    style={{ marginBottom: 50, cursor: "pointer" }}
                    onClick={(e) => {
                      viewDetailBlog(item._id);
                    }}
                  >
                    <Grid
                      item
                      md={12}
                      style={{
                        background: `url(${item.thumbnail})  center / cover no-repeat`,
                      }}
                      className={classes.img}
                    ></Grid>
                    <Grid item md={12}>
                      <Typography
                        variant="h2"
                        gutterBottom
                        style={{
                          color: "#f69320",
                          padding: "20px 0",
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item md={12}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#fff", textAlign: "justify" }}
                      >
                        {item.subTitle}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            <div className={classes.pagination}>
              <Pagination
                color="primary"
                onChange={handleChangePage}
                count={amoutOfPages}
                size="large"
              />
            </div>
          </Grid>

          <Grid
            item
            container
            md={3}
            sm={3}
            xs={3}
            className={classes.stickyBar}
          >
            <Grid item md={12}>
              <TextField
                className={classes.searchField}
                id="searchField"
                color="primary"
                fullWidth
                variant="outlined"
                placeholder="Tìm Kiếm"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon style={{ color: "#fff" }} />
                    </InputAdornment>
                  ),
                  style: {
                    color: "#fff",
                  },
                  classes: {
                    root: classes.root,
                    disabled: classes.disabled,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

            <Grid item container md={12} className={classes.aboutSection}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ color: "#f69320" }}
              >
                Về chúng tôi
              </Typography>
              <Typography variant="subtitle1">
                ‘’Minh triết nhân sinh’’ là một trong các dự án mang giá trị
                tinh thần to lớn, với mong muốn được cống hiến các dòng giá trị
                minh triết của chính cá nhân tích luỹ qua các trải nghiệm cá
                nhân, nghiên cứu khoa học để tìm ra công cụ áp dụng vào việc cho
                mọi người một định hướng minh triết nhất.
              </Typography>
              <Grid item md={12} sm={12} xs={12} style={{ margin: "20px 0" }}>
                <Button variant="contained" color="primary" fullWidth>
                  <a href="/xem-online" style={{ color: "#fff" }}>
                    Tra cứu ngay
                  </a>
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              md={12}
              style={{ color: "#fff", marginTop: 20 }}
            >
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: "#f69320" }}
                >
                  Bài viết phổ biến
                </Typography>
              </Grid>
              {popularBlogs[0] &&
                popularBlogs.map((popularBlog) => (
                  <Grid
                    item
                    container
                    md={12}
                    justifyContent="space-between"
                    style={{ marginBottom: 20 }}
                    onClick={(e) => {
                      viewDetailBlog(popularBlog._id);
                    }}
                  >
                    <Grid item md={4}>
                      <img
                        src={popularBlog.thumbnail}
                        alt=""
                        style={{ width: "100%", height: 80 }}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Typography variant="body1">
                        {popularBlog.title}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
            <Grid item md={12}>
              <img src={ads} alt="" className={classes.ads} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Blog;

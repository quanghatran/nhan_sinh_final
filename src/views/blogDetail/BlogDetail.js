import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import blogApi from "../../api/blogApi";
import Header from "../../common/header/Header";
import Footer from "../../common/newfooter/NewFooter";
import Background from "../../common/background/Background";
import {
  Button,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ads from "../../images/ads.jpg";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  contain: {
    margin: "100px auto",
  },
  title: {
    textAlign: "center",
    color: "#fff",
  },
  content: {
    textAlign: 'center',
    color: '#fff',
    '& .image img': {
      width: '80%',
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
    position: "sticky",
    top: 20,
  },
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange !important",
    },
  },
  readMore: {
    color: "#fff",
    margin: "10px auto 20px",
  },
}));
const BlogDetail = () => {
  const history = useHistory();
  const classes = useStyle();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogById = async () => {
      const res = await blogApi.getBlogById(id);
      console.log(res);
      setBlog(res.data);
    };
    fetchBlogById();
    window.scrollTo(0, 0);
  }, [id]);
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
  const viewPopularBlogDetail = (id) => {
    history.push(`/blog/${id}`);
  };
  const readMoreBlog = () => {
    history.push("/blog");
  };
  return (
    <div className={classes.contain}>
      <Header />
      <Background />
      <Container maxWidths="lg">
        {" "}
        <Grid container>
          <Grid item md={8}>
            {blog && (
              <div>
                <h1 className={classes.title}>{blog.title}</h1>
                <div
                  className={classes.content}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                ></div>
              </div>
            )}
          </Grid>
          <Grid item container md={4} className={classes.stickyBar}>
            <Grid item md={12}>
              <TextField
                className={classes.searchField}
                id="searchField"
                color="primary"
                fullWidth
                variant="outlined"
                placeholder="T??m Ki???m"
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
                V??? ch??ng t??i
              </Typography>
              <Typography variant="subtitle1">
                ??????Minh tri???t nh??n sinh?????? l?? m???t trong c??c d??? ??n mang gi?? tr???
                tinh th???n to l???n, v???i mong mu???n ???????c c???ng hi???n c??c d??ng gi?? tr???
                minh tri???t c???a ch??nh c?? nh??n t??ch lu??? qua c??c tr???i nghi???m c??
                nh??n, nghi??n c???u khoa h???c ????? t??m ra c??ng c??? ??p d???ng v??o vi???c cho
                m???i ng?????i m???t ?????nh h?????ng minh tri???t nh???t.
              </Typography>
              <Grid item md={12} sm={12} xs={12} style={{ margin: "20px 0" }}>
                <Button variant="contained" color="primary" fullWidth>
                  <a href="/xem-online" style={{ color: "#fff" }}>
                    Tra c???u ngay
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
                  B??i vi???t ph??? bi???n
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
                      viewPopularBlogDetail(popularBlog._id);
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
              <Button
                variant="contained"
                color="primary"
                onClick={readMoreBlog}
                className={classes.readMore}
              >
                xem them Blog
              </Button>
            </Grid>
            <Grid item md={12}>
              <img src={ads} alt="" className={classes.ads} />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default BlogDetail;

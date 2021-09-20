import React, { useState, useEffect } from 'react';
import blogApi from '../../api/blogApi';
import Background from '../../common/background/Background';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

import Grid from '@material-ui/core/Grid';
import Header from '../../common/header/Header';
import Footer from '../../common/newfooter/NewFooter';
import bannerImg from '../../images/imgSlider2.jpg';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import post1 from '../../images/post1.jpg';
import post2 from '../../images/post2.jpg';
import post3 from '../../images/post3.jpg';
import post4 from '../../images/post4.jpg';
import post5 from '../../images/post5.jpg';
import post6 from '../../images/post6.jpg';
import post7 from '../../images/post7.jpg';
import post8 from '../../images/post8.jpg';
import post9 from '../../images/post9.jpg';
import post10 from '../../images/post10.jpg';
import ads from '../../images/ads.jpg';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
  banner: {
    background: `url(${bannerImg}) center no-repeat`,
    marginTop: '75px',
    width: '100vw',
    height: '370px',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '&:after': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      zIndex: 0,
    },
  },
  heading: {
    color: '#fff',
    paddingLeft: '20px',
  },
  headingContainer: {
    position: 'relative',
    zIndex: 1,
  },
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'orange !important',
    },
  },
  img: {
    width: '100%',
    height: '500px',
    [theme.breakpoints.down('sm')]: {
      height: '30vw',
    },
  },
  aboutSection: {
    color: '#fff',
    marginTop: '20px',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  ads: {
    width: '100%',
    height: '70%',
  },
  stickyBar: {
    maxHeight: '180vh',
    position: 'sticky',
    top: 20,
  },
  pagination: {
    margin: '0 0 50px auto',
    '& button': {
      color: '#fff',
    },
    '& .Mui-selected': {
      color: '#fff',
    },
  },
}));
const content = [
  {
    id: 1,
    title: 'Ngày sinh có 3 con số 7-8-9 ',
    content:
      'Bạn là 1 người rất năng động, thể hiện sự nhanh nhẹn tháo vát trong tất cả các công việc. Thường làm các công việc hay đi lại nhiều, chủ động trong tất cả các lĩnh vực, công việc của mình. Nếu cùng giao công việc như nhau, bạn sẽ là người hoàn thành công việc của mình nhanh nhất, sớm nhất bởi vì bạn có chỉ số hành động cực cao. Sự độc lập, có ý tưởng, có ước mơ hoài bão có trách nhiệm với bản thân, gia đình và xã hội.',
    img: post1,
  },
  {
    id: 2,
    title: 'Trong ngày tháng năm sinh có 3 con số 4-5-6',
    content:
      'Bạn là một trong những trường hợp rất hiếm có đủ 3 con số 4-5-6 vì chúng được kết hợp giữa sự thông minh, sáng tạo, sự tự do và có đầu óc tổ chức thực tiễn. Số 4-5-6 là sự cân bằng, trung tâm của 3 trục: vật chất, tinh thần và trí não. Khi bạn nhận ra được sự cân bằng này và áp dụng được và công việc hàng ngày thì công việc bạn thay đổi và đạt thành công cao nhất',
    img: post2,
  },
  {
    id: 3,
    title: 'Trong ngày tháng năm sinh có 3 con số 2-5-8',
    content:
      'Bạn đang sở hữu một trục cảm xúc vô cùng tuyệt vời, các bạn biết cân bằng cảm xúc của mình, còn chỉ ra cho bạn có trực giác, đồng cảm với người khác hợp tác tận tụy và trung thành. Sự khát khao tự do, bạn còn là người sống rất là tự lập, yêu cái đẹp, thích kinh doanh',
    img: post3,
  },
  {
    id: 4,
    title: 'Con số 1 nói lên điều gì',
    content:
      'Số 1 thể hiện sự độc lập, lãnh đạo và tiên phong. Bạn đang mang trong mình tố chất của người lãnh đạo, thủ lĩnh. Bản chất cảu bạn là người kiên cường, tự lập, tự chủ, tự tin. Bạn là người quyết đoán, rạch ròi, coi trọng chữ tín, con đường mà bạn đi sẽ là nhà cải cách, nhà lãnh đạo, nhà tiên phong',
    img: post4,
  },
  {
    id: 5,
    title: 'Sự thật thú vị về ngày sinh',
    content:
      'Nếu bạn cộng ngày tháng năm sinh của bạn ra được các con số 11, 22, 33, 44 thì đó là 4 con số đặc biệt- trong thần số học gọi là 4 con số vua. Với 4 con số vua sẽ có những đặc biệt đó là trực giác, tâm linh rất cao. Họ là những người có thể phán đoán được sự việc trước khi xảy ra',
    img: post5,
  },
  {
    id: 6,
    title: 'Số chủ đạo là 9 nói lên điều gì',
    content:
      'Số 9 là người lãnh đạo với lý tưởng cho đi và trách nhiệm. Số 9 luôn hướng thiện, tận tâm, quan tâm đến tầm vĩ mô, cho đi, trách nhiệm và đầy hoài bão, hiểu biết, sáng tạo và chín chắn. Bên cạnh đó, số 9 đôi khi đi qua năng lượng còn dẫn đến nóng tính, khó gần, cầu toàn, dễ chìm vào sự tưởng tượng của chính mình',
    img: post6,
  },
  {
    id: 7,
    title:
      '3 lý do vì sao bạn cần có người chỉ số đường đời số 1 trong cuộc sống',
    content:
      'Số 1 như 1 mũi tên lao thẳng về phía trước, xuyên thủng mọi vật cản. Họ mở đường để bạn tiến thẳng trên con đường sự nghiệp của mình. Nếu bạn cần 1 người tiên phong dẫn đầu với tinh thần mạnh mẽ thì chỉ số 1 mà thôi. Khi đã có mục tiêu rõ ràng thì họ sẽ bám đuổi đến cùng và truyền cảm hứng cho những người xuung quanh . Tốc độ làm việc hiệu suất của họ cực kỳ mạnh. Họ tập trung cao, toàn tâm, toàn ý vào 1 việc, luôn sáng tạo trong công việc, tìm ra con đường ngắn nhất để hoàn thành mục tiêu 1 cách nhanh nhất. Nếu có đường đời số 1 bên cạnh, bạn sẽ tiết kiệm được rất nhiều thời gian lãng phí',
    img: post7,
  },
  {
    id: 8,
    title: '3 lý đo vì sao bạn cần có đường đời số 3 sống cùng',
    content:
      'Số 3 là những người rất vui tươi, luôn sống lạc quan, yêu đời. Bạn sẽ không có một giây phút nào buồn chán nếu sống bên cạnh người số 3. Số 3 là những người rất sáng tạo, nhanh nhạy bén, nắm bắt những ý tưởng của bạn, chiến đấu hết mình với ý tưởng đó. Số 3 rất giỏi giao tiếp, nếu trong nhóm của bạn có người số 3, hãy để họ làm những công việc như là giao tiếp, ngoại giao, marketing, tìm kiếm khách hàng, mang khách hàng, cơ hội về cho hội nhóm',
    img: post8,
  },
  {
    id: 9,
    title: 'Top 4 ngày sinh có tài năng lãnh đạo thiên bẩm',
    content:
      'Đây là những người có tính cách mạnh mẽ, óc sáng tạo và có cá tính độc lập. Họ dám nghĩ, dám làm và có năng lực điều hành, họ luôn nỗ lực để đạt được mục tiêu. Top 1: sinh ngày 1, top 2: sinh ngày 10, top 3: sinh ngày 19, top 4: sinh ngày 28',
    img: post9,
  },
  {
    id: 10,
    title: 'Ngày sinh của bạn thiếu hoàn toàn con số 8',
    content:
      'Con số 8 là con số mang tính chủ động nhất về mặt tinh thần. Số 8 được coi như là sự tập trung và độc lập. Sự thiếu hụt số 8 sẽ làm mất đi trục cân bằng cảm xúc 2-5-8',
    img: post10,
  },
];
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
        <Container maxWidth='lg' className={classes.headingContainer}>
          <Typography variant='h2' className={classes.heading}>
            Trang chủ/Blog
          </Typography>
        </Container>
      </div>
      <Container maxWidth='lg' style={{ marginTop: 100 }}>
        <Grid container justifyContent='space-between'>
          <Grid item container md={8} sm={8} xs={8}>
            {blogs[0] &&
              blogs.map((item, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    container
                    md={12}
                    style={{ marginBottom: 50 }}
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
                        variant='h2'
                        gutterBottom
                        style={{
                          color: '#f69320',
                          padding: '20px 0',
                          textAlign: 'center',
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item md={12}>
                      <Typography
                        variant='subtitle1'
                        style={{ color: '#fff', textAlign: 'justify' }}
                      >
                        {item.subTitle}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            <div className={classes.pagination}>
              <Pagination
                color='primary'
                onChange={handleChangePage}
                count={amoutOfPages}
                size='large'
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
                id='searchField'
                color='primary'
                fullWidth
                variant='outlined'
                placeholder='Tìm Kiếm'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <SearchIcon style={{ color: '#fff' }} />
                    </InputAdornment>
                  ),
                  style: {
                    color: '#fff',
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
                variant='h4'
                gutterBottom
                style={{ color: '#f69320' }}
              >
                Về chúng tôi
              </Typography>
              <Typography variant='subtitle1'>
                ‘’Minh triết nhân sinh’’ là một trong các dự án mang giá trị
                tinh thần to lớn, với mong muốn được cống hiến các dòng giá trị
                minh triết của chính cá nhân tích luỹ qua các trải nghiệm cá
                nhân, nghiên cứu khoa học để tìm ra công cụ áp dụng vào việc cho
                mọi người một định hướng minh triết nhất.
              </Typography>
              <Grid item md={12} sm={12} xs={12} style={{ margin: '20px 0' }}>
                <Button variant='contained' color='primary' fullWidth>
                  <a href='/xem-online' style={{ color: '#fff' }}>
                    Tra cứu ngay
                  </a>
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              md={12}
              style={{ color: '#fff', marginTop: 20 }}
            >
              <Grid item md={12}>
                <Typography
                  variant='h4'
                  gutterBottom
                  style={{ color: '#f69320' }}
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
                    justifyContent='space-between'
                    style={{ marginBottom: 20 }}
                    onClick={(e) => {
                      viewDetailBlog(popularBlog._id);
                    }}
                  >
                    <Grid item md={4}>
                      <img
                        src={popularBlog.thumbnail}
                        alt=''
                        style={{ width: '100%', height: 80 }}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Typography variant='body1'>
                        {popularBlog.title}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
            <Grid item md={12}>
              <img src={ads} alt='' className={classes.ads} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Blog;

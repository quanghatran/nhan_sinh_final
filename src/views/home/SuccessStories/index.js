import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "../../../components/titleSection/TitleSection";
import "./SuccessStories.scss";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import success3 from "../../../images/success3.jpg";
const useStyles = makeStyles(() => ({
  heading: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "1.5rem",
  },
}));

const MeaningNumbers = () => {
  const classes = useStyles();
  return (
    <Container>
      <div id="successStoriesBlock" className="successStoriesBlock ">
        <div className="block successStoriesBlockWrapper ">
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.heading}>
              Câu chuyện thành công
            </Typography>
          </Grid>
          <div className="successStoriesContent">
            <Swiper navigation={true} className="mySwiper">
              <SwiperSlide>
                <div className="contentWrapper">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="titleContent"
                  >
                    Câu chuyện thành công của sinh viên cơ khí bách khoa
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    className="mainContent"
                  >
                    Mình sinh năm 96 học cơ khí bách khoa. Năm trước được người
                    thân giới thiệu đến minhtrietnhansinh.com và được tư vấn bởi
                    thầy Hưng, mình cảm thấy thấu hiểu bản thân hơn, cảm thấy
                    công việc phù hợp với nghành IT. Mình đã quyết định bỏ học
                    cơ khí chuyển qua nghành IT. Giờ mình nhận job remote bên Mỹ
                    tối làm thêm 3 -4 tiếng lương tháng 9-10K USD. Cảm ơn
                    minhtrietnhansinh.com rất nhiều
                  </Typography>
                  <img
                    className="avatarContent"
                    src="https://giagoc68.com/wp-content/uploads/2016/06/team-1.jpg"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    component="p"
                    className="nameCharacter"
                  >
                    Mr. Kieu Nam
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="jobCharacter"
                  >
                    (Kĩ sư trí tuệ nhân tạo)
                  </Typography>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="contentWrapper">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="titleContent"
                  >
                    Hệ thống tra cứu của Minh Triết Nhân Sinh
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    className="mainContent"
                  >
                    Mình thực sự rất ấn tượng với hệ thống tra cứu VIP của Minh
                    Triết Nhân Sinh. Bài viết thực sự chi tiết, chỉ số đường đời
                    mô tả gần như chính xác về cuộc đời, qua đó tôi cảm thấy như
                    tìm được bản thân mình. Cảm ơn Satsi đã tạo ra trang Web này
                  </Typography>
                  <img
                    className="avatarContent"
                    src="https://binhminhdigital.com/StoreData/PageData/1464/anhchandungvanhungloicantranh4.jpg"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    component="p"
                    className="nameCharacter"
                  >
                    Ms. Kieu Anh
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="jobCharacter"
                  >
                    (Kế toán)
                  </Typography>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="contentWrapper">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="titleContent"
                  >
                    Cảm ơn vì đã tạo ra 1 trang web tuyệt vời
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    className="mainContent"
                  >
                    Tôi năm nay đã 70 tuổi, là 1 người am hiểu Thần số học. Mọi
                    người thường nhờ tôi xem. Trước khi biết đến Minh Triết Nhân
                    Sinh, tôi phải tự tính toán bằng tay rất nhiều chỉ số, các
                    con số thực sự khá phức tạp. Nhờ Minh Triết Nhân Sinh, tất
                    cả con số chỉ tính toán trong 3 giây, qua đó giúp tôi tiết
                    kiệm thời gian và giảm được sai sót.
                  </Typography>
                  <img className="avatarContent" src={success3} alt="" />
                  <Typography
                    variant="body1"
                    component="p"
                    className="nameCharacter"
                  >
                    Mr. Nguyen Huu Da
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="jobCharacter"
                  >
                    (Cán bộ xã)
                  </Typography>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MeaningNumbers;

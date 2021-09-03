import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "../../../components/titleSection/TitleSection";
import "./SuccessStories.scss";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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
			<div id='successStoriesBlock' className='successStoriesBlock '>
				<div className='block successStoriesBlockWrapper '>
					<Grid item md={12} sm={12} xs={12}>
						<Typography variant='h1' className={classes.heading}>
							Câu chuyện thành công
						</Typography>
					</Grid>
					<div className='successStoriesContent'>
						<Swiper navigation={true} className='mySwiper'>
							<SwiperSlide>
								<div className='contentWrapper'>
									<Typography
										variant='h6'
										component='h3'
										className='titleContent'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Mollitia, perferendis!
									</Typography>
									<Typography
										variant='body1'
										component='p'
										className='mainContent'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Quos blanditiis tenetur unde suscipit, quam beatae rerum
										inventore consectetur, neque doloribus, cupiditate numquam
										dignissimos laborum fugiat deleniti? Eum quasi quidem
										quibusdam. Lorem ipsum dolor, sit amet consectetur
										adipisicing elit.
									</Typography>
									<img
										className='avatarContent'
										src='https://giagoc68.com/wp-content/uploads/2016/06/team-1.jpg'
										alt=''
									/>
									<Typography
										variant='body1'
										component='p'
										className='nameCharacter'>
										Ms. Kieu Anh
									</Typography>
									<Typography
										variant='body2'
										component='p'
										className='jobCharacter'>
										(Accountant)
									</Typography>
								</div>
							</SwiperSlide>
							<SwiperSlide className=''>
								<div className='contentWrapper'>
									<Typography
										variant='h6'
										component='h3'
										className='titleContent'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Mollitia, perferendis!
									</Typography>
									<Typography
										variant='body1'
										component='p'
										className='mainContent'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Quos blanditiis tenetur unde suscipit, quam beatae rerum
										inventore consectetur, neque doloribus, cupiditate numquam
										dignissimos laborum fugiat deleniti? Eum quasi quidem
										quibusdam. Lorem ipsum dolor, sit amet consectetur
										adipisicing elit.
									</Typography>
									<img
										className='avatarContent'
										src='https://binhminhdigital.com/StoreData/PageData/1464/anhchandungvanhungloicantranh4.jpg'
										alt=''
									/>
									<Typography
										variant='body1'
										component='p'
										className='nameCharacter'>
										Ms. Kieu Anh
									</Typography>
									<Typography
										variant='body2'
										component='p'
										className='jobCharacter'>
										(Accountant)
									</Typography>
								</div>
							</SwiperSlide>
							<SwiperSlide className=''>
								<div className='contentWrapper'>
									<Typography
										variant='h6'
										component='h3'
										className='titleContent'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Mollitia, perferendis!
									</Typography>
									<Typography
										variant='body1'
										component='p'
										className='mainContent'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Quos blanditiis tenetur unde suscipit, quam beatae rerum
										inventore consectetur, neque doloribus, cupiditate numquam
										dignissimos laborum fugiat deleniti? Eum quasi quidem
										quibusdam. Lorem ipsum dolor, sit amet consectetur
										adipisicing elit.
									</Typography>
									<img
										className='avatarContent'
										src='https://bizweb.dktcdn.net/100/202/714/articles/2015325104237423.jpg?v=1493007654497'
										alt=''
									/>
									<Typography
										variant='body1'
										component='p'
										className='nameCharacter'>
										Ms. Kieu Anh
									</Typography>
									<Typography
										variant='body2'
										component='p'
										className='jobCharacter'>
										(Accountant)
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

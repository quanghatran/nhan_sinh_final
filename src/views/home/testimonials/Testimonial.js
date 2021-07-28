import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import TitleSection from "../../../components/titleSection/TitleSection";
import "./Testimonial.scss";

const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
}));

const listTestimonial = [
	{
		id: 1,
		name: "Quản Vân Anh",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, earum beatae. Quaerat voluptates reprehenderit quisquam culpa cumque fugit maxime ab beatae aliquam dicta dolore harum iusto magnam, quam quos eaque!",
		img: "https://snapdownloader.com/img/author-jack-fowler.jpg",
	},
	{
		id: 2,
		name: "Kiều Duy Nam",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, earum beatae. Quaerat voluptates reprehenderit quisquam culpa cumque fugit maxime ab beatae aliquam dicta dolore harum iusto magnam, quam quos eaque!",
		img: "https://s3.amazonaws.com/37assets/svn/1024-original.1e9af38097008ef9573f03b03ef6f363219532f9.jpg",
	},
	{
		id: 3,
		name: "Nguyễn Duy Hưng",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, earum beatae. Quaerat voluptates reprehenderit quisquam culpa cumque fugit maxime ab beatae aliquam dicta dolore harum iusto magnam, quam quos eaque!",
		img: "https://snapdownloader.com/img/author-jack-fowler.jpg",
	},
];

const Testimonial = () => {
	const classes = useStyles();

	return (
		<div id='testimonialBlock' className='block testimonialBlock'>
			<div className='container-fluid'>
				<TitleSection
					titleHeader='cảm nhận người dùng'
					subTitle='Dưới đây là phản hồi của hàng trăm người dùng đã tin tưởng sử dụng dịch vụ của chúng tôi'
				/>
				<div className='testimonialContent'>
					<Grid container spacing={3}>
						{listTestimonial.map((testimonial) => (
							<Grid item xs={12} sm={4} key={testimonial.id}>
								<Card>
									<CardActionArea>
										<CardMedia>
											<Avatar
												alt='avatar_testimonial'
												src={testimonial.img}
												className={classes.large}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant='h6'
												component='h2'
												style={{ textAlign: "center" }}
											>
												{testimonial.name}
											</Typography>
											<Typography
												variant='subtitle2'
												color='textSecondary'
												component='p'
												align='justify'
											>
												{testimonial.description}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;

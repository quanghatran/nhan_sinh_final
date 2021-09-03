import { Button, IconButton, Tooltip } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { motion } from "framer-motion";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import lookUpApi from "../../api/lookUpApi";
import image_avatar from "../../images/71-717091_illuminati-wallpaper-hd-illuminati-pyramid.png";
import "./Lookup.scss";

// import MeaningNumerology from "../user/MeaningNumerology";
// import Footer from "../../common/footer/Footer";

const imageVariants = {
	visible: {
		scale: 1.05,
		boxShadow: "0px 0px 20px rgb(255,255,255)",
		transition: {
			duration: 0.6,
			yoyo: Infinity,
			ease: "easeInOut",
			boxShadow: "0px 0px 40px rgb(255,255,255)",
		},
	},
};

const firstContainerVariants = {
	hidden: {
		duration: 0.8,
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			type: "spring",
			delay: 2,
		},
	},
};

const secondContainerVariants = {
	hidden: {
		duration: 0.8,
		opacity: 0,
		x: "-100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			type: "spring",
			delay: 3,
		},
	},
};

const thirdContainerVariants = {
	hidden: {
		duration: 0.8,
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			type: "spring",
			delay: 4,
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
		y: "-100vh",
		transition: {
			duration: 1,
			type: "spring",
			delay: 1,
		},
	},
	visible: {
		opacity: 1,
		y: "0",
		transition: {
			duration: 1,
			type: "spring",
			delay: 1,
		},
	},
};

const buttonVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 1.5,
			duration: 1.5,
		},
	},
};

const initIDFreeSearch = localStorage.getItem("idFreeSearch");

const Lookup = () => {
	const history = useHistory();

	const [idFreeSearch, setIdFreeSearch] = useState(initIDFreeSearch);
	const [infoFreeSearch, setInfoFreeSearch] = useState("");

	const [isLoaded, setIsLoaded] = useState(false);

	const [delayButton, setDelayButton] = useState(false);

	// get free search info
	useEffect(() => {
		const fetchFreeSearchInfo = async () => {
			try {
				const response = await lookUpApi.getResultLookup(idFreeSearch);
				console.log(response.data);
				setInfoFreeSearch(response.data);
				setIsLoaded(true);
			} catch (error) {
				console.log(error);
			}
		};

		fetchFreeSearchInfo();
	}, [idFreeSearch]);

	setTimeout(() => {
		setDelayButton(true);
	}, 5000);

	const handleBackClick = () => {
		history.goBack();
	};

	return (
		<React.Fragment>
			<div className='lookup-wrapper'>
				<div className='lookupCover'>
					<div className='container-fluid'>
						<Tooltip title='Trở về trang trước'>
							<IconButton
								IconButton
								aria-label='back'
								style={{ color: "#fff" }}
								onClick={handleBackClick}>
								<KeyboardBackspaceOutlinedIcon fontSize='large' />
							</IconButton>
						</Tooltip>
						<div className='contentLookup'>
							<div className='header_lookUp'>
								<div className='img_lookup'>
									<motion.img
										src={image_avatar}
										alt='img_lookup'
										variants={imageVariants}
										animate='visible'
										drag
										dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
									/>
								</div>
								<div className='detail_lookup'>
									{isLoaded && (
										<div>
											<motion.p
												style={{
													fontSize: "2.2rem",
													fontWeight: "bold",
													letterSpacing: "1px",
													color: "#f69320",
												}}
												variants={childVariants}
												initial='hidden'
												animate='visible'>
												<span style={{ textTransform: "uppercase" }}>
													{infoFreeSearch.name}{" "}
												</span>
												- {moment(infoFreeSearch.birthDay).format("DD/MM/YYYY")}
											</motion.p>
											<motion.p
												style={{
													textAlign: "justify",
													fontWeight: "lighter",
												}}
												variants={firstContainerVariants}
												initial='hidden'
												animate='visible'>
												<motion.div
													className='titleContentFreeLookUp'
													whileHover={{
														scale: 1.1,
														originX: 0,
														color: "#f50057",
													}}
													transition={{ type: "spring", stiffness: 300 }}>
													BÀI HỌC
												</motion.div>{" "}
												{infoFreeSearch.baiHoc.content}
											</motion.p>
											<motion.p
												style={{ textAlign: "justify", fontWeight: "lighter" }}
												variants={secondContainerVariants}
												initial='hidden'
												animate='visible'>
												<motion.div
													className='titleContentFreeLookUp'
													whileHover={{
														scale: 1.1,
														originX: 0,
														color: "#f50057",
													}}
													transition={{ type: "spring", stiffness: 300 }}>
													KHÁT TÂM
												</motion.div>{" "}
												{infoFreeSearch.khatTam.content}
											</motion.p>
											<motion.p
												style={{ textAlign: "justify", fontWeight: "lighter" }}
												variants={thirdContainerVariants}
												initial='hidden'
												animate='visible'>
												<motion.div
													className='titleContentFreeLookUp'
													whileHover={{
														scale: 1.1,
														originX: 0,
														color: "#f50057",
													}}
													transition={{ type: "spring", stiffness: 300 }}>
													NHÂN CÁCH
												</motion.div>{" "}
												{infoFreeSearch.nhanCach.content}
											</motion.p>
										</div>
									)}

									{delayButton && (
										<motion.div
											variants={buttonVariants}
											initial='hidden'
											animate='visible'>
											<Button
												href='/'
												startIcon={<HomeIcon />}
												color='primary'
												variant='contained'
												style={{ margin: "10px" }}>
												Về Trang Chủ
											</Button>

											<Tooltip title='Xem đầy đủ nội dung'>
												<Button
													href='/xem-online'
													startIcon={<SearchIcon />}
													color='secondary'
													variant='contained'
													style={{ margin: "10px" }}>
													Tra cứu VIP
												</Button>
											</Tooltip>
										</motion.div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <MeaningNumerology /> */}
			{/* <Footer /> */}
		</React.Fragment>
	);
};

export default Lookup;

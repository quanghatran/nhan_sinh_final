import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CloseIcon from "@material-ui/icons/Close";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import clsx from "clsx";
import PropTypes from "prop-types";
import { default as React } from "react";
import logo from "../../images/logo_satsi.png";
import "./AppBarLogin.scss";
import { useSelector } from "react-redux";
import UserAccountMenu from "../appBar/UserAccountMenu";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
});

const listNav = [
	{
		id: 1,
		href: "/",
		name: "Trang chủ",
		color: "default",
		variant: "text",
	},
	{
		id: 2,
		href: "/xem-online",
		name: "Tra cứu",
		color: "default",
		variant: "text",
	},
	{
		id: 3,
		href: "#meaningNumerology",
		name: "Dịch vụ",
		color: "default",
		variant: "text",
	},
	{
		id: 4,
		href: "#contact",
		name: "liên hệ",
		color: "default",
		variant: "text",
	},
	{
		id: 5,
		href: "/dang-nhap",
		name: "Đăng nhập",
		color: "default",
		variant: "text",
	},
];

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

if (localStorage.getItem("user")) {
	listNav.pop();
}
const AppBarLogin = (props) => {
	const user = useSelector((state) => state.login);
	const userLogIn = useSelector((state) => state.user);
	const classes = useStyles();
	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		setState({ ...state, [anchor]: open });
	};
	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role='presentation'
		>
			<List>
				<div className='logo'>
					<Button onClick={toggleDrawer(anchor, false)} href='/'>
						<img src={logo} alt='logo_navbar' />
					</Button>
				</div>
				<div className='closeButton'>
					<IconButton onClick={toggleDrawer(anchor, false)}>
						<CloseIcon />
					</IconButton>
				</div>
				<Divider />

				{listNav.map((navItem) => (
					<ListItem button key={navItem.id}>
						<Button
							onClick={toggleDrawer(anchor, false)}
							color={navItem.color}
							href={navItem.href}
							variant={navItem.variant}
						>
							{navItem.name}
						</Button>
					</ListItem>
				))}
				<ListItem button>
					{localStorage.getItem("user") &&
						(user.name ? (
							<li key={listNav.length}>
								<UserAccountMenu userName={user.name} />
							</li>
						) : (
							<li key={listNav.length}>
								<UserAccountMenu userName={userLogIn.name} />
							</li>
						))}
				</ListItem>
			</List>
		</div>
	);

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar>
				<div className='appBarWrapper'>
					<Hidden smDown>
						<HideOnScroll {...props}>
							<AppBar>
								<Toolbar>
									<div className='container-fluid'>
										<ul>
											<Button href='/'>
												<img src={logo} alt='logoSatsi' />
											</Button>
											{listNav.map((navItem) => (
												<li key={navItem.id}>
													<Button
														color={navItem.color}
														href={navItem.href}
														variant={navItem.variant}
													>
														{navItem.name}
													</Button>
												</li>
											))}
											{localStorage.getItem("user") &&
												(user.name ? (
													<li key={listNav.length}>
														<UserAccountMenu userName={user.name} />
													</li>
												) : (
													<li key={listNav.length}>
														<UserAccountMenu userName={userLogIn.name} />
													</li>
												))}
										</ul>
									</div>
								</Toolbar>
							</AppBar>
						</HideOnScroll>
					</Hidden>

					<Hidden mdUp>
						<HideOnScroll {...props}>
							<AppBar>
								<Toolbar>
									<ul>
										<li>
											<Button href='/'>
												<img src={logo} alt='logo' />
											</Button>
										</li>
										<li>
											{["left"].map((anchor) => (
												<React.Fragment key={anchor}>
													<Button onClick={toggleDrawer(anchor, true)}>
														<MenuOutlinedIcon fontSize='large' />
													</Button>
													<Drawer
														anchor={anchor}
														open={state[anchor]}
														onClose={toggleDrawer(anchor, false)}
														style={{ width: "250px" }}
													>
														{list(anchor)}
													</Drawer>
												</React.Fragment>
											))}
										</li>
									</ul>
								</Toolbar>
							</AppBar>
						</HideOnScroll>
					</Hidden>
				</div>
			</AppBar>
			<div id='back-to-top-anchor' />
		</React.Fragment>
	);
};

export default AppBarLogin;

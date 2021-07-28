import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./UserAccountMenu.css";
import { Link, useHistory } from "react-router-dom";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import HistoryIcon from "@material-ui/icons/History";
import ShopIcon from "@material-ui/icons/Shop";
import SettingsIcon from "@material-ui/icons/Settings";
const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:hover": {
			backgroundColor: theme.palette.common.black,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

export default function UserAccountMenu(props) {
	const { userName } = props;
	const [anchorEl, setAnchorEl] = React.useState(null);

	const history = useHistory();
	const logOut = () => {
		localStorage.clear();
		window.location.reload();

		history.push("/");
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				aria-controls='customized-menu'
				aria-haspopup='true'
				color='primary'
				onClick={handleClick}
				startIcon={<AccountCircleIcon />}
			>
				{userName}
			</Button>
			<StyledMenu
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<StyledMenuItem>
					<ListItemIcon>
						<SettingsIcon fontSize='small' />
					</ListItemIcon>
					<Link to='/xem-online/thong-tin-tai-khoan'>
						<ListItemText primary='Thông tin tài khoản' />
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemIcon>
						<HistoryIcon fontSize='small' />
					</ListItemIcon>
					<Link to='/xem-online/lich-su-tra-cuu'>
						<ListItemText primary='Lịch sử tra cứu' />
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemIcon>
						<ShopIcon fontSize='small' />
					</ListItemIcon>
					<Link to='/xem-online/purchased'>
						<ListItemText primary='Dịch vụ đã mua' />
					</Link>
				</StyledMenuItem>

				<StyledMenuItem onClick={logOut}>
					<ListItemIcon>
						<PowerSettingsNewIcon fontSize='small' />
					</ListItemIcon>
					<Link to='/'>
						<ListItemText primary='Đăng xuất' />
					</Link>
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}

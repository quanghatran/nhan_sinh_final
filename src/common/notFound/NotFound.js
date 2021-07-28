import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import "./NotFound.scss";

const NotFund = () => {
	return (
		<div className='notFound'>
			<h1>Oopss ... Not found</h1>

			<Button href='/' startIcon={<HomeIcon />} color='secondary'>
				Quay Về Trang Chủ
			</Button>
		</div>
	);
};

export default NotFund;

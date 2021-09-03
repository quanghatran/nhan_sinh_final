import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import "./NotFound.scss";
const NotFund = () => {
	return (
		<div className='notFound'>
			<h1>Oopss ... Not found</h1>

			<Button href='/' startIcon={<HomeIcon />} color='primary'>
				Quay Về Trang Chủ
			</Button>
		</div>
	);
};

export default NotFund;

import { Typography } from "@material-ui/core";
import React from "react";
// import { useEffect } from "react";
import "./Lookup.scss";

const Lookup = () => {
	// useEffect(() => {
	// 	const fetchDataLookup =
	// });

	return (
		<div className='lookup-wrapper'>
			<div className='lookupCover'>
				<div className='container-fluid'>
					<div className='contentLookup'>
						<div className='header_lookUp'>
							<div className='img_lookup'>
								<img
									src='https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa64159fa1279e_avatar-1.jpg'
									alt='img_lookup'
								/>
							</div>
							<div className='title_lookup'>
								<Typography variant='h5' component='h1'>
									Luận giải chính xác
								</Typography>
							</div>
							<div className='detail_lookup'>
								{/* {dataFetch && (
									<div>
										<h1>Nội dung phần tra cứu của bạn</h1>
										<div>{dataFetch}</div>
									</div>
								)} */}

								{/* <ReactPDF
									file={{
										url: "http://www.example.com/sample.pdfhttp://142.93.198.23:5005/PDFReport/ReportUsers/38443658-c9ee-4727-9290-353856e8517d.pdf",
									}}
								/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lookup;

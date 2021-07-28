import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Footer.scss";
import logo from "./../../images/logo_footer.png";

const listContact = [
	{
		id: 1,
		iconClasses: "iconContact fas fa-map-pin",
		content: "01- BT9 KĐT Văn Khê, Hà Đông, Hà Nội",
	},
	{
		id: 2,
		iconClasses: "iconContact fas fa-phone-square-alt",
		content: "024 223 71 777",
	},
	{
		id: 3,
		iconClasses: "iconContact fas fa-phone-volume",
		content: "097 8586 755 - 0962 917 755",
	},
	{
		id: 4,
		iconClasses: "iconContact far fa-envelope",
		content: "satsi.edu@gmail.com",
	},
	{
		id: 5,
		iconClasses: "iconContact fab fa-facebook",
		content: "duhocducsatsi",
		aTag: "https://www.facebook.com/duhocducsatsi",
	},
	{
		id: 6,
		iconClasses: "iconContact fab fa-internet-explorer",
		content: "www.satsi.edu.vn",
		aTag: "http://satsi.edu.vn/",
	},
];

const Footer = () => {
	return (
		<div id='contact' className='footerWrapper'>
			<div className='footerCover'>
				<div className=' container-fluid'>
					<div className='block'>
						<Grid container spacing={3}>
							<Grid item xs={12} md={4} className='logoFooter'>
								<div className='logo'>
									<img src={logo} alt='logo_footer' />
								</div>
								<h3 className='sloganTitle'>LỰA CHỌN VÌ TƯƠNG LAI</h3>
							</Grid>
							<Grid item xs={12} md={4} className='listContactWrapper'>
								<ul className='listContact'>
									{listContact.map((contact) => (
										<li key={contact.id}>
											<i className={`${contact.iconClasses}`}></i>
											{!contact.aTag && contact.content}
											{contact.aTag && (
												<a href={`${contact.aTag}`}>{contact.content}</a>
											)}
										</li>
									))}
								</ul>
							</Grid>
							<Grid item xs={12} md={4}>
								<div>
									<iframe
										title='Satsi location'
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.491141912446!2d105.7590120147541!3d20.97294069505785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453b311f4c94d%3A0xa84f3ad42d3983bd!2zU0FUU0kgLSBWSeG7hk4gxJDDgE8gVOG6oE8gS0jhu55JIE5HSEnhu4ZQIFbDgCDhu6hORyBE4bukTkcgS0hPQSBI4buMQyBDw5RORyBOR0jhu4YgQ0FP!5e0!3m2!1svi!2s!4v1622221019649!5m2!1svi!2s'
										width='100%'
										height='250px'
										loading='lazy'
									></iframe>
								</div>
							</Grid>
						</Grid>
					</div>
					<div className='copyright'>
						<br />
						Copyright &copy; 2021 -{" "}
						<a href='http://satsi.edu.vn/'>www.satsi.edu.vn </a>{" "}
						<span> | Bản quyền thuộc về thương hiệu SATSI</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
